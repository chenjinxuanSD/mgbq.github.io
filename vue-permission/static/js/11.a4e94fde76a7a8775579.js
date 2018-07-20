webpackJsonp([11],{"405r":function(t,e,n){"use strict";var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}!function(){function e(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){var i=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function r(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}var a=["Start","Add","Remove","Update","End"],s=["Choose","Sort","Filter","Clone"],l=["Move"].concat(a,s).map(function(t){return"on"+t}),c=null;return{name:"draggable",props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},data:function(){return{transitionMode:!1,noneFunctionalComponentMode:!1,init:!1}},render:function(t){var e=this.$slots.default;if(e&&1===e.length){var n=e[0];n.componentOptions&&"transition-group"===n.componentOptions.tag&&(this.transitionMode=!0)}var i=e,r=this.$slots.footer;r&&(i=e?[].concat(o(e),o(r)):[].concat(o(r)));var a=null,s=function(t,e){a=function(t,e,n){return void 0==n?t:((t=null==t?{}:t)[e]=n,t)}(a,t,e)};if(s("attrs",this.$attrs),this.componentData){var l=this.componentData,c=l.on,d=l.props;s("on",c),s("props",d)}return t(this.element,a,i)},mounted:function(){var e=this;if(this.noneFunctionalComponentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.noneFunctionalComponentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: "+this.element);var n={};a.forEach(function(t){n["on"+t]=function(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),r.call(e,t,n)}}.call(e,t)}),s.forEach(function(t){n["on"+t]=r.bind(e,t)});var o=i({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in o)&&(o.draggable=">*"),this._sortable=new t(this.rootContainer,o),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==l.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.init||(this.noneFunctionalComponentMode=this.noneFunctionalComponentMode&&1==this.$children.length,this.init=!0),this.noneFunctionalComponentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=function(t,e,n){if(!t)return[];var i=t.map(function(t){return t.elm}),r=[].concat(o(e)).map(function(t){return i.indexOf(t)});return n?r.filter(function(t){return-1!==t}):r}(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)})},getUnderlyingVm:function(t){var e=function(t,e){return t.map(function(t){return t.elm}).indexOf(e)}(this.getChildrenNodes()||[],t);return-1===e?null:{index:e,element:this.realList[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(o(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,o=this.getUnderlyingPotencialDraggableComponent(e);if(!o)return{component:o};var r=o.realList,a={list:r,component:o};if(e!==n&&r&&o.getUnderlyingVm){var s=o.getUnderlyingVm(n);if(s)return i(s,a)}return a},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),c=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var i=this.getVmIndex(t.newIndex);this.spliceList(i,0,n),this.computeIndexes();var o={element:n,newIndex:i};this.emitChanges({added:o})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)e(t.clone);else{var i=this.context.index;this.spliceList(i,1);var o={element:this.context.element,oldIndex:i};this.resetTransitionData(i),this.emitChanges({removed:o})}},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var i=this.context.index,o=this.getVmIndex(t.newIndex);this.updatePosition(i,o);var r={element:this.context.element,oldIndex:i,newIndex:o};this.emitChanges({moved:r})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(o(e.to.children)).filter(function(t){return"none"!==t.style.display}),i=n.indexOf(e.related),r=t.component.getVmIndex(i);return-1!=n.indexOf(c)||!e.willInsertAfter?r:r+1},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var o=this.getRelatedContextFromMoveEvent(t),r=this.context,a=this.computeFutureIndex(o,t);return i(r,{futureIndex:a}),i(t,{relatedContext:o,draggedContext:r}),n(t,e)},onDragEnd:function(t){this.computeIndexes(),c=null}}}}Array.from||(Array.from=function(t){return[].slice.call(t)});var r=n("HOBB");t.exports=e(r)}()},E1LY:function(t,e,n){var i=n("i8Gq");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("5f0381aa",i,!0)},"HK++":function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.board-column {\n  min-width: 300px;\n  min-height: 100px;\n  height: auto;\n  overflow: hidden;\n  background: #f0f0f0;\n  border-radius: 3px;\n}\n.board-column .board-column-header {\n    height: 50px;\n    line-height: 50px;\n    overflow: hidden;\n    padding: 0 20px;\n    text-align: center;\n    background: #333;\n    color: #fff;\n    border-radius: 3px 3px 0 0;\n}\n.board-column .board-column-content {\n    height: auto;\n    overflow: hidden;\n    border: 10px solid transparent;\n    min-height: 60px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.board-column .board-column-content .board-item {\n      cursor: pointer;\n      width: 100%;\n      height: 64px;\n      margin: 5px 0;\n      background-color: #fff;\n      text-align: left;\n      line-height: 54px;\n      padding: 5px 10px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);\n              box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);\n}\n",""])},HOBB:function(t,e,n){var i,o;!function(r){"use strict";void 0===(o="function"==typeof(i=r)?i.call(e,n,e,t):i)||(t.exports=o)}(function(){"use strict";if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var t,e,n,i,o,r,a,s,l,c,d,u,h,f,p,g,m,v,b,x,y,_={},D=/\s+/g,w=/left|right|inline/,C="Sortable"+(new Date).getTime(),k=window,T=k.document,S=k.parseInt,E=k.setTimeout,M=k.jQuery||k.Zepto,I=k.Polymer,O=!1,N="draggable"in T.createElement("div"),B=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((y=T.createElement("x")).style.cssText="pointer-events:auto","auto"===y.style.pointerEvents),P=!1,A=Math.abs,L=Math.min,F=[],Y=[],R=it(function(t,e,n){if(n&&e.scroll){var i,o,r,a,d,u,h=n[C],f=e.scrollSensitivity,p=e.scrollSpeed,g=t.clientX,m=t.clientY,v=window.innerWidth,b=window.innerHeight;if(l!==n&&(s=e.scroll,l=n,c=e.scrollFn,!0===s)){s=n;do{if(s.offsetWidth<s.scrollWidth||s.offsetHeight<s.scrollHeight)break}while(s=s.parentNode)}s&&(i=s,o=s.getBoundingClientRect(),r=(A(o.right-g)<=f)-(A(o.left-g)<=f),a=(A(o.bottom-m)<=f)-(A(o.top-m)<=f)),r||a||(a=(b-m<=f)-(m<=f),((r=(v-g<=f)-(g<=f))||a)&&(i=k)),_.vx===r&&_.vy===a&&_.el===i||(_.el=i,_.vx=r,_.vy=a,clearInterval(_.pid),i&&(_.pid=setInterval(function(){if(u=a?a*p:0,d=r?r*p:0,"function"==typeof c)return c.call(h,d,u,t);i===k?k.scrollTo(k.pageXOffset+d,k.pageYOffset+u):(i.scrollTop+=u,i.scrollLeft+=d)},24)))}},30),$=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){O={capture:!1,passive:!1}}}))}catch(t){}function X(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=ot({},e),t[C]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==X.supportPointer};for(var i in n)!(i in e)&&(e[i]=n[i]);for(var o in $(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&N,H(t,"mousedown",this._onTapStart),H(t,"touchstart",this._onTapStart),e.supportPointer&&H(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(H(t,"dragover",this),H(t,"dragenter",this)),Y.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function j(e,n){"clone"!==e.lastPullMode&&(n=!0),i&&i.state!==n&&(z(i,"display",n?"none":""),n||i.state&&(e.options.group.revertClone?(o.insertBefore(i,r),e._animate(t,i)):o.insertBefore(i,t)),i.state=n)}function U(t,e,n){if(t){n=n||T;do{if(">*"===e&&t.parentNode===n||nt(t,e))return t}while(t=V(t))}return null}function V(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function H(t,e,n){t.addEventListener(e,n,O)}function q(t,e,n){t.removeEventListener(e,n,O)}function W(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(D," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(D," ")}}function z(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return T.defaultView&&T.defaultView.getComputedStyle?n=T.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function K(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function G(t,e,n,o,r,a,s,l){t=t||e[C];var c=T.createEvent("Event"),d=t.options,u="on"+n.charAt(0).toUpperCase()+n.substr(1);c.initEvent(n,!0,!0),c.to=r||e,c.from=a||e,c.item=o||e,c.clone=i,c.oldIndex=s,c.newIndex=l,e.dispatchEvent(c),d[u]&&d[u].call(t,c)}function J(t,e,n,i,o,r,a,s){var l,c,d=t[C],u=d.options.onMove;return(l=T.createEvent("Event")).initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),u&&(c=u.call(d,l,a)),c}function Q(t){t.draggable=!1}function Z(){P=!1}function tt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function et(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!nt(t,e)||n++;return n}function nt(t,e){if(t){var n=(e=e.split(".")).shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function it(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,E(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function ot(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function rt(t){return I&&I.dom?I.dom(t).cloneNode(!0):M?M(t).clone(!0)[0]:t.cloneNode(!0)}function at(t){return E(t,0)}function st(t){return clearTimeout(t)}return X.prototype={constructor:X,_onTapStart:function(e){var n,i=this,o=this.el,r=this.options,s=r.preventOnFilter,l=e.type,c=e.touches&&e.touches[0],d=(c||e).target,u=e.target.shadowRoot&&e.path&&e.path[0]||d,h=r.filter;if(function(t){var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var i=e[n];i.checked&&F.push(i)}}(o),!t&&!(/mousedown|pointerdown/.test(l)&&0!==e.button||r.disabled)&&!u.isContentEditable&&(d=U(d,r.draggable,o))&&a!==d){if(n=et(d,r.draggable),"function"==typeof h){if(h.call(this,e,d,this))return G(i,u,"filter",d,o,o,n),void(s&&e.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=U(u,t.trim(),o))return G(i,t,"filter",d,o,o,n),!0})))return void(s&&e.preventDefault());r.handle&&!U(u,r.handle,o)||this._prepareDragStart(e,c,d,n)}},_prepareDragStart:function(n,i,s,l){var c,d=this,u=d.el,h=d.options,p=u.ownerDocument;s&&!t&&s.parentNode===u&&(v=n,o=u,e=(t=s).parentNode,r=t.nextSibling,a=s,g=h.group,f=l,this._lastX=(i||n).clientX,this._lastY=(i||n).clientY,t.style["will-change"]="all",c=function(){d._disableDelayedDrag(),t.draggable=d.nativeDraggable,W(t,h.chosenClass,!0),d._triggerDragStart(n,i),G(d,o,"choose",t,o,o,f)},h.ignore.split(",").forEach(function(e){K(t,e.trim(),Q)}),H(p,"mouseup",d._onDrop),H(p,"touchend",d._onDrop),H(p,"touchcancel",d._onDrop),H(p,"selectstart",d),h.supportPointer&&H(p,"pointercancel",d._onDrop),h.delay?(H(p,"mouseup",d._disableDelayedDrag),H(p,"touchend",d._disableDelayedDrag),H(p,"touchcancel",d._disableDelayedDrag),H(p,"mousemove",d._disableDelayedDrag),H(p,"touchmove",d._disableDelayedDrag),h.supportPointer&&H(p,"pointermove",d._disableDelayedDrag),d._dragStartTimer=E(c,h.delay)):c())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),q(t,"mouseup",this._disableDelayedDrag),q(t,"touchend",this._disableDelayedDrag),q(t,"touchcancel",this._disableDelayedDrag),q(t,"mousemove",this._disableDelayedDrag),q(t,"touchmove",this._disableDelayedDrag),q(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(e,n){(n=n||("touch"==e.pointerType?e:null))?(v={target:t,clientX:n.clientX,clientY:n.clientY},this._onDragStart(v,"touch")):this.nativeDraggable?(H(t,"dragend",this),H(o,"dragstart",this._onDragStart)):this._onDragStart(v,!0);try{T.selection?at(function(){T.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(o&&t){var e=this.options;W(t,e.ghostClass,!0),W(t,e.dragClass,!1),X.active=this,G(this,o,"start",t,o,o,f)}else this._nulling()},_emulateDragOver:function(){if(b){if(this._lastX===b.clientX&&this._lastY===b.clientY)return;this._lastX=b.clientX,this._lastY=b.clientY,B||z(n,"display","none");var t=T.elementFromPoint(b.clientX,b.clientY),e=t,i=Y.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(b.clientX,b.clientY)),e)do{if(e[C]){for(;i--;)Y[i]({clientX:b.clientX,clientY:b.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);B||z(n,"display","")}},_onTouchMove:function(t){if(v){var e=this.options,i=e.fallbackTolerance,o=e.fallbackOffset,r=t.touches?t.touches[0]:t,a=r.clientX-v.clientX+o.x,s=r.clientY-v.clientY+o.y,l=t.touches?"translate3d("+a+"px,"+s+"px,0)":"translate("+a+"px,"+s+"px)";if(!X.active){if(i&&L(A(r.clientX-this._lastX),A(r.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),x=!0,b=r,z(n,"webkitTransform",l),z(n,"mozTransform",l),z(n,"msTransform",l),z(n,"transform",l),t.preventDefault()}},_appendGhost:function(){if(!n){var e,i=t.getBoundingClientRect(),r=z(t),a=this.options;W(n=t.cloneNode(!0),a.ghostClass,!1),W(n,a.fallbackClass,!0),W(n,a.dragClass,!0),z(n,"top",i.top-S(r.marginTop,10)),z(n,"left",i.left-S(r.marginLeft,10)),z(n,"width",i.width),z(n,"height",i.height),z(n,"opacity","0.8"),z(n,"position","fixed"),z(n,"zIndex","100000"),z(n,"pointerEvents","none"),a.fallbackOnBody&&T.body.appendChild(n)||o.appendChild(n),e=n.getBoundingClientRect(),z(n,"width",2*i.width-e.width),z(n,"height",2*i.height-e.height)}},_onDragStart:function(e,n){var r=this,a=e.dataTransfer,s=r.options;r._offUpEvents(),g.checkPull(r,r,t,e)&&((i=rt(t)).draggable=!1,i.style["will-change"]="",z(i,"display","none"),W(i,r.options.chosenClass,!1),r._cloneId=at(function(){o.insertBefore(i,t),G(r,o,"clone",t)})),W(t,s.dragClass,!0),n?("touch"===n?(H(T,"touchmove",r._onTouchMove),H(T,"touchend",r._onDrop),H(T,"touchcancel",r._onDrop),s.supportPointer&&(H(T,"pointermove",r._onTouchMove),H(T,"pointerup",r._onDrop))):(H(T,"mousemove",r._onTouchMove),H(T,"mouseup",r._onDrop)),r._loopId=setInterval(r._emulateDragOver,50)):(a&&(a.effectAllowed="move",s.setData&&s.setData.call(r,a,t)),H(T,"drop",r),r._dragStartId=at(r._dragStarted))},_onDragOver:function(a){var s,l,c,f,p=this.el,v=this.options,b=v.group,y=X.active,_=g===b,D=!1,k=v.sort;if(void 0!==a.preventDefault&&(a.preventDefault(),!v.dragoverBubble&&a.stopPropagation()),!t.animated&&(x=!0,y&&!v.disabled&&(_?k||(f=!o.contains(t)):m===this||(y.lastPullMode=g.checkPull(this,y,t,a))&&b.checkPut(this,y,t,a))&&(void 0===a.rootEl||a.rootEl===this.el))){if(R(a,v,this.el),P)return;if(s=U(a.target,v.draggable,p),l=t.getBoundingClientRect(),m!==this&&(m=this,D=!0),f)return j(y,!0),e=o,void(i||r?o.insertBefore(t,i||r):k||o.appendChild(t));if(0===p.children.length||p.children[0]===n||p===a.target&&function(t,e){var n=t.lastElementChild.getBoundingClientRect();return e.clientY-(n.top+n.height)>5||e.clientX-(n.left+n.width)>5}(p,a)){if(0!==p.children.length&&p.children[0]!==n&&p===a.target&&(s=p.lastElementChild),s){if(s.animated)return;c=s.getBoundingClientRect()}j(y,_),!1!==J(o,p,t,l,s,c,a)&&(t.contains(p)||(p.appendChild(t),e=p),this._animate(l,t),s&&this._animate(c,s))}else if(s&&!s.animated&&s!==t&&void 0!==s.parentNode[C]){d!==s&&(d=s,u=z(s),h=z(s.parentNode));var T=(c=s.getBoundingClientRect()).right-c.left,S=c.bottom-c.top,M=w.test(u.cssFloat+u.display)||"flex"==h.display&&0===h["flex-direction"].indexOf("row"),I=s.offsetWidth>t.offsetWidth,O=s.offsetHeight>t.offsetHeight,N=(M?(a.clientX-c.left)/T:(a.clientY-c.top)/S)>.5,B=s.nextElementSibling,A=!1;if(M){var L=t.offsetTop,F=s.offsetTop;A=L===F?s.previousElementSibling===t&&!I||N&&I:s.previousElementSibling===t||t.previousElementSibling===s?(a.clientY-c.top)/S>.5:F>L}else D||(A=B!==t&&!O||N&&O);var Y=J(o,p,t,l,s,c,a,A);!1!==Y&&(1!==Y&&-1!==Y||(A=1===Y),P=!0,E(Z,30),j(y,_),t.contains(p)||(A&&!B?p.appendChild(t):s.parentNode.insertBefore(t,A?B:s)),e=t.parentNode,this._animate(l,t),this._animate(c,s))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),z(e,"transition","none"),z(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,z(e,"transition","all "+n+"ms"),z(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=E(function(){z(e,"transition",""),z(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;q(T,"touchmove",this._onTouchMove),q(T,"pointermove",this._onTouchMove),q(t,"mouseup",this._onDrop),q(t,"touchend",this._onDrop),q(t,"pointerup",this._onDrop),q(t,"touchcancel",this._onDrop),q(t,"pointercancel",this._onDrop),q(t,"selectstart",this)},_onDrop:function(a){var s=this.el,l=this.options;clearInterval(this._loopId),clearInterval(_.pid),clearTimeout(this._dragStartTimer),st(this._cloneId),st(this._dragStartId),q(T,"mouseover",this),q(T,"mousemove",this._onTouchMove),this.nativeDraggable&&(q(T,"drop",this),q(s,"dragstart",this._onDragStart)),this._offUpEvents(),a&&(x&&(a.preventDefault(),!l.dropBubble&&a.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),o!==e&&"clone"===X.active.lastPullMode||i&&i.parentNode&&i.parentNode.removeChild(i),t&&(this.nativeDraggable&&q(t,"dragend",this),Q(t),t.style["will-change"]="",W(t,this.options.ghostClass,!1),W(t,this.options.chosenClass,!1),G(this,o,"unchoose",t,e,o,f),o!==e?(p=et(t,l.draggable))>=0&&(G(null,e,"add",t,e,o,f,p),G(this,o,"remove",t,e,o,f,p),G(null,e,"sort",t,e,o,f,p),G(this,o,"sort",t,e,o,f,p)):t.nextSibling!==r&&(p=et(t,l.draggable))>=0&&(G(this,o,"update",t,e,o,f,p),G(this,o,"sort",t,e,o,f,p)),X.active&&(null!=p&&-1!==p||(p=f),G(this,o,"end",t,e,o,f,p),this.save()))),this._nulling()},_nulling:function(){o=t=e=n=r=i=a=s=l=v=b=x=p=d=u=m=g=X.active=null,F.forEach(function(t){t.checked=!0}),F.length=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragover":case"dragenter":t&&(this._onDragOver(e),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.preventDefault()}(e));break;case"mouseover":this._onDrop(e);break;case"selectstart":e.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,i=0,o=n.length,r=this.options;i<o;i++)U(t=n[i],r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||tt(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,i){var o=n.children[i];U(o,this.options.draggable,n)&&(e[t]=o)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return U(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&$(n)},destroy:function(){var t=this.el;t[C]=null,q(t,"mousedown",this._onTapStart),q(t,"touchstart",this._onTapStart),q(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(q(t,"dragover",this),q(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),Y.splice(Y.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},H(T,"touchmove",function(t){X.active&&t.preventDefault()}),X.utils={on:H,off:q,css:z,find:K,is:function(t,e){return!!U(t,e,t)},extend:ot,throttle:it,closest:U,toggleClass:W,clone:rt,index:et,nextTick:at,cancelNextTick:st},X.create=function(t,e){return new X(t,e)},X.version="1.7.0",X})},PV4T:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("405r"),o={name:"dragKanban-demo",components:{draggable:n.n(i).a},props:{headerText:{type:String,default:"Header"},options:{type:Object,default:function(){return{}}},list:{type:Array,default:function(){return[]}}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board-column"},[n("div",{staticClass:"board-column-header"},[t._v("\n    "+t._s(t.headerText)+"\n  ")]),t._v(" "),n("draggable",{staticClass:"board-column-content",attrs:{list:t.list,options:t.options}},t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"board-item"},[t._v("\n      "+t._s(e.name)+" "+t._s(e.id)+"\n    ")])}))],1)},staticRenderFns:[]};var a={name:"dragKanban-demo",components:{nxKanban:n("vSla")(o,r,!1,function(t){n("jdYq")},null,null).exports},data:function(){return{options:{group:"mission"},list1:[{name:"Mission",id:1},{name:"Mission",id:2},{name:"Mission",id:3},{name:"Mission",id:4}],list2:[{name:"Mission",id:5},{name:"Mission",id:6},{name:"Mission",id:7}],list3:[{name:"Mission",id:8},{name:"Mission",id:9},{name:"Mission",id:10}]}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container board"},[n("nx-kanban",{key:1,staticClass:"kanban todo",attrs:{list:t.list1,options:t.options,"header-text":"Todo"}}),t._v(" "),n("nx-kanban",{key:2,staticClass:"kanban working",attrs:{list:t.list2,options:t.options,"header-text":"Working"}}),t._v(" "),n("nx-kanban",{key:3,staticClass:"kanban done",attrs:{list:t.list3,options:t.options,"header-text":"Done"}})],1)},staticRenderFns:[]};var l=n("vSla")(a,s,!1,function(t){n("E1LY")},null,null);e.default=l.exports},i8Gq:function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.board {\n  width: 1000px;\n  margin-left: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.kanban.todo .board-column-header {\n  background: #4A9FF9;\n}\n.kanban.working .board-column-header {\n  background: #f9944a;\n}\n.kanban.done .board-column-header {\n  background: #2ac06d;\n}\n",""])},jdYq:function(t,e,n){var i=n("HK++");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("653fa4b2",i,!0)}});