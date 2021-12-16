import repository from "../../api/repository";

const state = {
  user: sessionStorage.user ? JSON.parse(sessionStorage.getItem("user")) : null,
};

const getters = {
  user: (state) => state.user,
  authenticated: (state) => state.user !== null,
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

const actions = {
  async signup({ commit }, user) {
    await repository.createSession();
    const { data } = await repository.register(user);
    commit("SET_USER", data);
    sessionStorage.user = JSON.stringify(data);
  },

  async login({ commit }, user) {
    await repository.createSession();
    const { data } = await repository.login(user);
    commit("SET_USER", data);
    sessionStorage.user = JSON.stringify(data);
  },

  async logout({ commit }) {
    await repository.logout();
    commit("SET_USER", null);
    sessionStorage.removeItem("user");
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
