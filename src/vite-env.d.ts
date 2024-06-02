/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_HOST?: string;
  readonly VITE_DISABLE_AUTH_CHECKS?: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
