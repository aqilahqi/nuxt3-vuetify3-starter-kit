import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const myTheme: ThemeDefinition = {
  colors: {
    primary: '#0E0F10',
    secondary: '#3D4257',
    'secondary-lighten-1': '#6A749F',
    success: '#4B9761',
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      themes: {
        myTheme,
      },
    },
    ssr: true,
  });
  nuxtApp.vueApp.use(vuetify);
});
