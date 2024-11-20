import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-C8SFUyXo.js";
import { ref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import "video.js";
/* empty css                     */
import { u as useHead } from "./index-BabADJUJ.js";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "destr";
import "animejs";
import "aos";
const _sfc_main$1 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "contact-area",
        "data-aos": "fade-up",
        "data-aos-duration": "800",
        "data-aos-easing": "ease-in-out-sine"
      }, _attrs))}><div class="container"><div class="gx-row d-flex justify-content-between" style="${ssrRenderStyle({ "gap": "16px" })}"><div class="contact-infos"><h3 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"> Reach </h3><ul class="contact-details"><li class="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"><div class="icon-box shadow-box"><i class="iconoir-mail"></i></div><div class="right"><span>EMAIL</span><h4><a href="mailto:andreicarpen@gmail.com">andreicarpen@gmail.com</a></h4></div></li><li class="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"><div class="icon-box shadow-box"><i class="iconoir-phone"></i></div><div class="right"><span>WhatsApp</span><h4><a href="https://wa.me/+40730513553" target="_blank">+40 730 513 553</a></h4></div></li><li class="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"><div class="icon-box shadow-box"><i class="iconoir-pin-alt"></i></div><div class="right"><span>Current Location</span><h4>Johor Bahru, Malaysia</h4></div></li></ul><h3 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"> Network </h3><ul class="social-links d-flex align-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.linkedin.com/in/andreicarpen",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="iconoir-linkedin"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "iconoir-linkedin" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.instagram.com/andreicarpen",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="iconoir-instagram"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "iconoir-instagram" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine" class="contact-form aos-init aos-animate order-first"><div class="shadow-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "bg1.png",
        alt: "BG",
        class: "bg-img"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icon3.png",
        alt: "Icon"
      }, null, _parent));
      _push(`<h1>Let’s work <span>together.</span></h1><video autoplay class="video-js" style="${ssrRenderStyle({ "border-radius": "30px" })}"></video><a href="https://calendly.com/andreicarpen/discovery-call" target="_blank" download="Andrei Carpen Resume.pdf" class="theme-btn mt-3" style="${ssrRenderStyle({ "width": "100%", "text-align": "center" })}">Book a meeting</a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Andrei Carpen | Contact"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Contact = _sfc_main$1;
      _push(ssrRenderComponent(_component_Contact, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-6_8lQwsG.js.map
