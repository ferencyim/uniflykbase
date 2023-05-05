import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "飞行笔记",
  description: "时时复习",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
