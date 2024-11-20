import { _ as __nuxt_component_1 } from './nuxt-img-C8SFUyXo.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/defu/dist/defu.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/ufo/dist/index.mjs';
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
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/animejs/lib/anime.js';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "credential-area" }, _attrs))}><div class="container"><div class="gx-row d-flex"><div class="credential-sidebar-wrap" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"><div class="credential-sidebar text-center"><div class="shadow-box">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "bg1.png",
    alt: "BG",
    class: "bg-img"
  }, null, _parent));
  _push(`<div class="img-box">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "me2.jpg",
    alt: "About Me",
    width: "500",
    placeholder: "/square-placeholder.jpg"
  }, null, _parent));
  _push(`</div><h2>Andrei Carpen</h2><p>@andreicarpen</p><ul class="social-links d-flex justify-content-center"><li>`);
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
  _push(`</li></ul><a href="andrei-carpen-resume.pdf" target="_blank" download="Andrei Carpen Resume.pdf" class="theme-btn">Download Resume</a></div></div></div><div class="credential-content flex-1 mt-4" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"><div class="credential-edc-exp credential-experience mt-4"><h2 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"> Experience </h2><div class="credential-edc-exp-item" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "freelance-resume.jpg",
    class: "w-100 mb-4",
    placeholder: "/resume-placeholder.jpg",
    alt: ""
  }, null, _parent));
  _push(`<h3>Carpen &amp; Co \u2022 Remote</h3><h4>Product Designer</h4><h5>September 2020 - Present</h5><ul><li> \u2022 Collaborated with over 5 different clients over a span of 5 years to enhance their digital presence, resulting in a collective increase of 50% in online sales and engagement metrics. </li><li> \u2022 Developed innovative user interface designs for various clients, leading to a 30% decrease in bounce rates and a 20% increase in average session duration. </li><li> \u2022 Implemented user experience testing on multiple client websites, resulting in an average conversion rate improvement of 15% across all platforms. </li><li> \u2022 Created and designed innovative software designs for clients across a broad range of industries, from entertainment to AI. </li><li> \u2022 Directed creative concepts and adhered to project guidelines to execute campaigns according to business needs. </li><li> \u2022 Collaborated with the creative team to ensure designs and deliverables were completed efficiently and on-time. </li></ul></div><div class="credential-edc-exp-item" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "ezugi-resume.jpg",
    class: "w-100 mb-4",
    placeholder: "/resume-placeholder.jpg",
    alt: ""
  }, null, _parent));
  _push(`<h3>Ezugi \u2022 Bucharest, Romania</h3><h4>UI/UX Designer</h4><h5>May 2018 - September 2020</h5><ul><li> \u2022 Led the migration of Ezugi&#39;s platform from Flash to HTML5 by overseeing the design process of their new visual language, resulting in a 200% increase in revenue. </li><li> \u2022 Collaborated with the Head of Games and development team to design, develop, and launch over ten games within a two-year period, leading to a 40% growth in player retention. </li><li> \u2022 Utilized a user-centered design approach to create all project assets and specifications, identifying design issues and implementing innovative solutions that improved the overall user experience. </li><li> \u2022 Helped with the transition from a Sketch + Zapier flow to Figma. </li></ul></div><div class="credential-edc-exp-item" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "okapi-resume.jpg",
    class: "w-100 mb-4",
    placeholder: "/resume-placeholder.jpg",
    alt: ""
  }, null, _parent));
  _push(`<h3>OkapiStudio \u2022 Bucharest, Romania</h3><h4>UI/UX/Web Designer</h4><h5>May 2016 - April 2018</h5><ul><li> \u2022 Utilized advanced design software to create visually appealing presentations and ads for clients, leading to a 30% increase in client satisfaction ratings. </li><li> \u2022 Created rapid prototypes to validate design concepts with stakeholders, identified and troubleshot UX problems, and adhered to style standards on fonts, colors, and images. </li><li> \u2022 Established benchmarks, identified potential areas of improvement and stayed abreast of UX trends on the project. </li></ul></div><div class="credential-edc-exp-item" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "tbwa-resume.jpg",
    class: "w-100 mb-4",
    placeholder: "/resume-placeholder.jpg",
    alt: ""
  }, null, _parent));
  _push(`<h3>FRIENDS \\ TBWA \u2022 Bucharest, Romania</h3><h4>Digital Designer Intern</h4><h5>February 2015 - April 2016</h5><ul><li> \u2022 Illustrated design ideas, designed graphic user interface elements, developed mockups and prototypes and created original graphic designs for different digital products. </li><li> \u2022 Provided support for platform content creation and management for different online platforms. </li><li> \u2022 Identified, troubleshot and fixed bugs on different web applications in production for clients. </li></ul></div></div><div class="credential-edc-exp credential-education"><h2 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"> Volunteer </h2><div class="credential-edc-exp-item" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "nomads-resume.jpg",
    class: "w-100 mb-4",
    placeholder: "/resume-placeholder.jpg",
    alt: ""
  }, null, _parent));
  _push(`<h3>Nomads Skillshare! \u2022 Bali, Indonesia</h3><h4>Head of Product</h4><h5>December 2020 - May 2023</h5></div><div class="credential-edc-exp-item" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "jokula-resume.jpg",
    class: "w-100 mb-4",
    placeholder: "/resume-placeholder.jpg",
    alt: ""
  }, null, _parent));
  _push(`<h3>//J\xD6KUL\xC1 \u2022 Remote</h3><h4>Web Designer</h4><h5>March 2016 - March 2018</h5><ul><li> \u2022 Executed visual designs on 10+ projects from conception to completion; working mostly on landing pages and e-commerce sites </li><li> \u2022 Built easy-to-use and performant websites for clients and participated in the full development lifecycle of projects </li><li> \u2022 Promoted existing design guidelines, established standards and evangelised best practices on projects </li></ul><h4 class="mt-3">Web Developer</h4><h5>April 2015 - March 2016</h5><ul><li> \u2022 Created HTML5 &amp; Wordpress presentation websites, based on my own concepts &amp; designs </li></ul></div></div><div class="credential-edc-exp credential-education"><h2 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"> Education </h2><div class="credential-edc-exp-item" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "university-resume.jpg",
    class: "w-100 mb-4",
    placeholder: "/resume-placeholder.jpg",
    alt: ""
  }, null, _parent));
  _push(`<h3>AP Degree in Multimedia Design</h3><h4>IBA Erhvervsakademi Kolding, Denmark</h4><h5>2013 - 2015</h5><ul><li> \u2022 Whilst studying in Denmark, I\u2019ve teamed up with a group of passionate entrepreneurs and worked at no less than 8 start-up projects as a Web Designer. </li><li> \u2022 I\u2019ve also participated in the GoBuddy Entrepreneurial Weekend and was awarded the Most Innovative Idea Award (Autumn 2014). </li></ul></div><div class="credential-edc-exp-item" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "liceu-resume.jpg",
    class: "w-100 mb-4",
    placeholder: "/resume-placeholder.jpg",
    alt: ""
  }, null, _parent));
  _push(`<h3>Architecture and Design</h3><h4>Ploiesti Art High School, Romania</h4><h5>2009 - 2013</h5><ul><li> \u2022 I\u2019ve discovered my passion for design and digital creation in high school. </li><li> \u2022 During that period, I have studied design, architecture and the history of art for 4 years. </li></ul></div></div></div></div><div class="row mt-2"><div class="col-md-12"><div class="d-flex profile-contact-credentials-wrap" style="${ssrRenderStyle({ "gap": "8px" })}"><div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine" class="about-client-box info-box shadow-box" style="${ssrRenderStyle({ "display": "grid", "place-items": "center" })}">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "bg1.png",
    alt: "BG",
    class: "bg-img"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "d-none d-md-block",
    style: { "margin": "0", "width": "100%" },
    src: "expertise.png",
    placeholder: [400, 30, 50],
    alt: "My Works"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "d-md-none d-sm-block",
    style: { "margin": "0", "width": "100%" },
    src: "expertise-mobile.png",
    placeholder: [400, 30, 50],
    alt: "My Works"
  }, null, _parent));
  _push(`</div><div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"><div class="about-project-box info-box shadow-box">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "overlay-link",
    to: "/portfolio"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "bg1.png",
    alt: "BG",
    class: "bg-img"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "my-works.png",
    placeholder: [400, 30, 50],
    alt: "My Works"
  }, null, _parent));
  _push(`<div class="d-flex align-items-center justify-content-between"><div class="infos"><h4>PORTFOLIO</h4><h1>Explore My Case Studies</h1></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/portfolio",
    class: "about-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtImg, {
          src: "icon.svg",
          style: { "width": "48px" },
          alt: "Button"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtImg, {
            src: "icon.svg",
            style: { "width": "48px" },
            alt: "Button"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/resume/Resume.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "resume",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Andrei Carpen | Resume"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Resume = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Resume, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resume.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=resume-D9FCUXF8.mjs.map
