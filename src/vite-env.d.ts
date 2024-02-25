/// <reference types="vite/client" />
// 解决ts引入js报错的问题
declare module "*.js"

declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}