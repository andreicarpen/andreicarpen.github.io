import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-C8SFUyXo.mjs';
import { useSSRContext, ref, provide, mergeProps, withCtx, createVNode, createTextVNode, unref } from 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/ufo/dist/index.mjs';
import './index-BabADJUJ.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/defu/dist/defu.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/h3/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/devalue/index.js';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/destr/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/klona/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/scule/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/ohash/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/pathe/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/ipx/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/unhead/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/animejs/lib/anime.js';

const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const menuOpen = ref(false);
    provide("menuOpen", menuOpen);
    const setMenuOpen = (value = true) => {
      menuOpen.value = value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-area" }, _attrs))}><div class="container"><div class="gx-row d-flex align-items-center justify-content-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "logo.png",
              densities: "x1 x2",
              alt: "Logo"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "logo.png",
                densities: "x1 x2",
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="${ssrRenderClass([menuOpen.value ? "active" : "", "navbar"])}"><ul class="menu"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        onClick: ($event) => setMenuOpen(false)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About me`);
          } else {
            return [
              createTextVNode("About me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resume",
        onClick: ($event) => setMenuOpen(false)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Resume`);
          } else {
            return [
              createTextVNode("Resume")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portfolio",
        onClick: ($event) => setMenuOpen(false)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portfolio`);
          } else {
            return [
              createTextVNode("Portfolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        onClick: ($event) => setMenuOpen(false)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "theme-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Let&#39;s talk`);
          } else {
            return [
              createTextVNode("Let's talk")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "theme-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Let&#39;s talk`);
          } else {
            return [
              createTextVNode("Let's talk")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass(`show-menu ${menuOpen.value ? "active" : ""}`)}"><span></span><span></span><span></span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-area" }, _attrs))}><div class="container"><div class="footer-content text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "logo.png",
              alt: "Logo"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "logo.png",
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="footer-menu"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About me`);
          } else {
            return [
              createTextVNode("About me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/resume" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Resume`);
          } else {
            return [
              createTextVNode("Resume")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/portfolio" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portfolio`);
          } else {
            return [
              createTextVNode("Portfolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><p class="copyright">\xA9 ${ssrInterpolate(unref(year))} Andrei Carpen</p></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CommonNavbar = _sfc_main$2;
  const _component_CommonFooter = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_CommonFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-1cLAKLre.mjs.map
