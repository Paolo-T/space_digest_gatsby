(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+hbH":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("vrFN"),i=n("c8nA"),s=n("19Cd"),c=n("YSkA"),l=n("Wbzz");var m=function(e){var t=e.image,n=e.link,r=e.key,o=e.title,i=e.tag1,s=e.tag2,c=e.tag3;return a.a.createElement("div",{key:r,className:"h-full bg-gray-100 rounded overflow-hidden border-2 hover:border-tertiary text-center"},a.a.createElement(l.Link,{to:n},a.a.createElement("div",{className:"w-full h-32 md:h-48 mt-10 md:my-20",style:{backgroundImage:"url("+t+")",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}),a.a.createElement("div",{className:"w-full"},a.a.createElement("p",{className:"font-bold text-2xl mb-2 text-gray-700 text-left pb-4 px-8"},o),a.a.createElement("div",{className:"flex h-16 justify-between bg-gray-200 px-6 py-4"},a.a.createElement("span",{className:"inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},"Launch ",i),a.a.createElement("span",{className:"inline-block px-3 py-1 text-sm font-semibold text-gray-700"},s),a.a.createElement("span",{className:"inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},c)))))},u=n("SC5V"),d=n.n(u),f=n("wEEd");var p=function(e){var t=e.items,n={mass:3,tension:700,friction:70},r=Object(f.c)(t.length,t.map((function(e,t){return{config:n,from:{opacity:0,y:100},to:{opacity:1,y:0},delay:50*t}})));return a.a.createElement("ul",{className:"mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:mb-32 cursor-pointer"},r.map((function(e,n){var r=e.y,o=e.opacity,i=t[n];return a.a.createElement(f.a.li,{key:i.mission_name,style:{opacity:o.interpolate((function(e){return""+e})),transform:r.interpolate((function(e){return"translate3d(0,"+e+"px,0)"}))}},a.a.createElement(m,{link:"/app/launch/"+i.mission_name,image:i.links.mission_patch?i.links.mission_patch:d.a,title:i.mission_name,tag1:i.flight_number,tag2:i.rocket.rocket_id,tag3:i.launch_year}))})))},h=n("saL6");var b=function(){var e,t=Object(r.useContext)(i.a),n=Object(r.useState)(1),o=n[0],l=n[1],m=Object(r.useState)(),u=m[0],d=m[1];return Object(r.useEffect)((function(){t.response&&d(Object(h.a)(t.response,16))}),[t.response,o]),a.a.createElement(a.a.Fragment,null,u?a.a.createElement("div",{className:"w-10/12 mx-auto mt-10 md:mt-32 mb-16 md:mb0"},a.a.createElement("div",{className:"container md:flex justify-between items-end mb-8 md:mb-12"},a.a.createElement("h2",{className:" inline-block w-full"},"Mission Patches"),a.a.createElement(c.a,{numberOfPages:u.length,onPageChange:function(e){return l(e)},activePageNumber:o})),(e=o-1,a.a.createElement(p,{items:u[e],key:e}))):a.a.createElement("div",{className:"container mx-auto pt-12 pb-32"},a.a.createElement(s.a,{className:"mx-auto"})))},g=n("oq01"),v=n("9cXN");t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{keywords:["Nasa","Spacex","Space","star","gatsby","tailwind","react","tailwindcss"],title:"Nasa"}),a.a.createElement(g.a,null,a.a.createElement("div",{className:"mx-auto pt-12 md:pt-24"},a.a.createElement("div",{className:"py-10 bg-primary"},a.a.createElement("div",{className:"w-9/12 mx-auto text-center"},a.a.createElement("h1",{className:"tracking-snug text-5xl md:text-7xl mb-4"},"SpaceX"))),a.a.createElement("div",{className:"w-10/12 md:w-9/12 mx-auto md:px-8 mb-10 mt-0 md:mt-20"},a.a.createElement("div",{className:" md:flex mt-16 md:mt-32 mb-12 md:mb-24 border-b border-gray-400 text-left"},a.a.createElement("p",{className:"md:w-4/12 line-block flex-1 md:mb-8 md:mx-auto text-lg font-bold uppercase"},"SpaceX"),a.a.createElement("p",{className:"w-12/12 md:w-7/12 mb-10 mx-auto"},a.a.createElement("p",{className:" pt-4 md:mr-10 mb-4"},"HQ: Hawthorne - California | Address: Rocket Road"),"SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.",a.a.createElement("p",{className:" pt-4 mr-10"},"HQ: Hawthorne - California | Address: Rocket Road")))),a.a.createElement(v.a,null,a.a.createElement(b,null)))))}},"9cXN":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("wEEd");var i=function(e,t){if(!e)throw new Error("Invariant failed")};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=new Map,u=new Map,d=new Map,f=0;function p(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,a=r.root,o=r.rootMargin,s=r.threshold;if(m.has(e)&&i(!1),e){var c=function(e){return e?d.has(e)?d.get(e):(f+=1,d.set(e,f.toString()),d.get(e)+"_"):""}(a)+(o?s.toString()+"_"+o:s.toString()),l=u.get(c);l||(l=new IntersectionObserver(b,n),c&&u.set(c,l));var p={callback:t,element:e,inView:!1,observerId:c,observer:l,thresholds:l.thresholds||(Array.isArray(s)?s:[s])};return m.set(e,p),l.observe(e),p}}function h(e){if(e){var t=m.get(e);if(t){var n=t.observerId,r=t.observer,a=r.root;r.unobserve(e);var o=!1,i=!1;n&&m.forEach((function(t,r){r!==e&&(t.observerId===n&&(o=!0,i=!0),t.observer.root===a&&(i=!0))})),!i&&a&&d.delete(a),r&&!o&&r.disconnect(),m.delete(e)}}}function b(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,a=m.get(r);if(a&&n>=0){var o=a.thresholds.some((function(e){return a.inView?n>e:n>=e}));void 0!==t&&(o=o&&t),a.inView=o,a.callback(o,e)}}))}var g=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return s(l(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),s(l(t),"node",null),s(l(t),"handleNode",(function(e){t.node&&(h(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),s(l(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){this.node||i(!1)},o.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(h(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(h(this.node),this.node=null)},o.componentWillUnmount=function(){this.node&&(h(this.node),this.node=null)},o.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;p(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},o.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var a=this.props,o=a.children,i=a.as,s=a.tag,l=(a.triggerOnce,a.threshold,a.root,a.rootMargin,a.onChange,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(i||s||"div",c({ref:this.handleNode},l),o)},a}(r.Component);s(g,"displayName","InView"),s(g,"defaultProps",{threshold:0,triggerOnce:!1});var v={inView:!1,entry:void 0};t.a=function(e){var t=e.children,n=Object(r.useState)(!1),i=n[0],s=n[1],c=function(e){void 0===e&&(e={});var t=Object(r.useRef)(),n=Object(r.useState)(v),a=n[0],o=n[1],i=Object(r.useCallback)((function(n){t.current&&h(t.current),n&&p(n,(function(t,r){o({inView:t,entry:r}),t&&e.triggerOnce&&h(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(r.useEffect)((function(){t.current||a===v||e.triggerOnce||o(v)})),[i,a.inView,a.entry]}({rootMargin:"-100px 0px"}),l=c[0],m=c[1],u=Object(o.b)({config:{mass:1,tension:120,friction:30},opacity:i?1:0,transform:i?"translate3d(0,0rem,0)":"translate3d(0,10rem,0)"});return Object(r.useEffect)((function(){!i&&m&&s(!0)}),[m]),a.a.createElement(o.a.div,{ref:l,style:u},t)}},SC5V:function(e,t,n){e.exports=n.p+"static/spacex-d0303f5dc16bc4e04142d5d7b7191fae.png"},YSkA:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(e){var t=e.numberOfPages,n=e.onPageChange,o=e.activePageNumber,i=Object(r.useMemo)((function(){return Array(t).fill().map((function(e,t){return t+1}))}));return a.a.createElement("nav",{className:"inline-block h-auto mt-6 md:mt-0"},a.a.createElement("ul",{className:"md:flex flex-row"},i.map((function(e,t){return a.a.createElement("li",{className:"inline-block ml-2",key:e},a.a.createElement("button",{className:(o===t+1&&"bg-tertiary border-tertiary")+" inline-block border border-black-500 h-8 w-8 hover:bg-primary hover:border-primary focus:bg-tertiary rounded-full focus:outline-none rounded-sm text-sm",onClick:function(){return n(e)}},e))}))))}},saL6:function(e,t,n){"use strict";function r(e,t){for(var n=[],r=0;r<e.length;)n.push(e.slice(r,t+r)),r+=t;return n}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-spacex-js-0b4c2fb57f6fafb10077.js.map