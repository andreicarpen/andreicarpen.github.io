import { u as useHead } from "./index-BabADJUJ.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "destr";
import "animejs";
import "aos";
const _sfc_main = {
  __name: "hobbies",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Andrei Carpen | Hobbies"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hobbies = resolveComponent("Hobbies", true);
      _push(ssrRenderComponent(_component_Hobbies, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hobbies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=hobbies-C3E_M2ha.js.map
