(()=>{var a={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},d:(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},e={};(()=>{"use strict";a.r(e);const r=flarum.core.compat["common/app"];a.n(r)().initializers.add("nearata-gif-avatars",(function(){}));const t=flarum.core.compat["admin/app"];var n=a.n(t);n().initializers.add("nearata-gif-avatars",(function(){n().extensionData.for("nearata-gif-avatars").registerPermission({icon:"fas fa-user-tie",label:n().translator.trans("nearata-gif-avatars.admin.permissions.use_gifs"),permission:"nearata-gif-avatars.use-gifs"},"start")}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map