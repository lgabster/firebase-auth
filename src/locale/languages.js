import { createI18n } from 'vue-i18n'

import ar from './ar.json';
import en from './en.json';
import fr from './fr.json';
import sp from './sp.json'

const i18n = createI18n({
    locale: 'en',
    globalInjection: true,
    messages: {
        en,
        ar,
        sp,
        fr,
    },
  });

  export default i18n;