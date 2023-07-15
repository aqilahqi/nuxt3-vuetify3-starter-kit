import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import variables from 'assets/scss/_variables.module.scss';

const myTheme: ThemeDefinition = {
  colors: {
    primary: variables.primary,
    secondary: variables.secondary,
    'secondary-lighten-1': variables.secondaryLighten1,
    success: variables.success,
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
      defaultTheme: 'myTheme',
      themes: {
        myTheme,
      },
    },
    ssr: true,
  });
  nuxtApp.vueApp.use(vuetify);
});
