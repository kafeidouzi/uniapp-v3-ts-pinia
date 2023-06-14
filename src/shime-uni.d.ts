export {}
import to from 'await-to-js'; 
declare module "vue" {
  type Hooks = App.AppInstance & Page.PageInstance;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ComponentCustomOptions extends Hooks {}
  // interface ComponentCustomProperties{
  //   $to: typeof to;
  // } 
}
