(()=>{var a={n:e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},d:(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},e={};(()=>{"use strict";a.r(e);const t=flarum.core.compat["common/app"];a.n(t)().initializers.add("nearata-gif-avatars",(function(){}));const r=flarum.core.compat["admin/app"];var i=a.n(r);i().initializers.add("nearata-gif-avatars",(function(){i().extensionData.for("nearata-gif-avatars").registerSetting({setting:"nearata-gif-avatars.image-optimizer",type:"select",label:i().translator.trans("nearata-gif-avatars.admin.settings.image_optimizer.label"),options:{none:i().translator.trans("nearata-gif-avatars.admin.settings.image_optimizer.none_label"),imageMagick:i().translator.trans("nearata-gif-avatars.admin.settings.image_optimizer.image_magick_label")}}).registerPermission({icon:"fas fa-user-tie",label:i().translator.trans("nearata-gif-avatars.admin.permissions.use_gifs"),permission:"nearata-gif-avatars.use-gifs"},"start")}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map