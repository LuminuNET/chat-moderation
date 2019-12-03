import Vue from 'vue';
import VueI18n from 'vue-i18n';

// locales
import en from './en';
import de from './de';

Vue.use(VueI18n);

const messages = {
	en,
	de
};

const i18n = new VueI18n({
	fallbackLocale: 'en',
	messages
});

export default i18n;
