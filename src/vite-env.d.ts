/// <reference types="vite/client" />

declare module "*.svg?component" {
  const component: (props: SVGAttributes<SVGSVGElement>) => JSX.Element;
  export default component;
}
