/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
  readonly VITE_WS_URL: string;
  readonly VITE_GITHUB_TOKEN?: string;
  readonly VITE_GH_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
