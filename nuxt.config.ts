import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiEndpoint: '',
      
      anonKey: '',
      supabaseUrl: ''
    },
  },

  app: {
    head: {
      title: 'Nuxt 3 Template',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Template',
        },
      ],
    },
  },

  supabase: {
    redirect: false
  },

  css: [
    // See https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
    join(currentDir, './assets/css/global.css'),
  ],

  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/supabase', '@vee-validate/nuxt'],

  veeValidate: {
    autoImports: true
  },

  eslint: {
    // Additional configs
  },

  shadcn: {
    componentDir: './components/ui',
  },

  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
  },
});