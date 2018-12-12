import Cookies from 'js-cookie'

const app = {
  state: {
    //language: Cookies.get('language') || 'en',
    language: 'en',
    backWidth: '',
    backHeight: '',
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      Cookies.set('language', language)
    },
    SET_WIDTH: (state, backWidth) => {
      state.backWidth = backWidth
    },
    SET_HEIGHT: (state, backHeight) => {
      state.backHeight = backHeight;
    },
  },
  actions: {
    setLanguage({commit}, language) {
      commit('SET_LANGUAGE', language)
    },
    setWidth({commit}, backWidth) {
      commit('SET_WIDTH', backWidth);
    },
    setHeight({commit}, backHeight) {
      commit('SET_HEIGHT', backHeight);
    },
  }
};

export default app
