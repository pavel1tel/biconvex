export {};

declare global {
  interface Window {
    navigation: Navigation;
    providedUiConfig: {
      serverBaseUrl: string;
      googleClientId: string;
      googleAnalyticsId: string;
      uiDisableAuthChecks: boolean;
    };
  }
}

declare module "*.svg" {
  const SvgComponent;

  import("react").FC<import("react").SVGAttributes<SVGElement>>;
  export default SvgComponent;
}

/*declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
  const src: string;
  export default src;
}*/
