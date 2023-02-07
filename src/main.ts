import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueRouter from "./router";
import { createPinia } from "pinia";
import VueKatex from "@hsorby/vue3-katex";
import "katex/dist/katex.min.css";
import "mathlive/dist/mathlive-fonts.css";
import "mathlive/dist/mathlive";
/*
import * as MathLive from "https://unpkg.com/mathlive/dist/mathlive.min.mjs";
import VueMathfield from "https://unpkg.com/mathlive/dist/vue-mathlive.mjs";
*/

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(VueRouter)
    .use(VueKatex)
    .mount("#app");
