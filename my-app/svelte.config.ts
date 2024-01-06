import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import type { Config } from 'svelte/types/runtime/kit';

const config: Config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  kit: {
    // Specify the adapter
    adapter: adapter(),

    // Specify the preprocessors
    vite: {
      preprocess: vitePreprocess(),
    },
  },
};

export default config;
