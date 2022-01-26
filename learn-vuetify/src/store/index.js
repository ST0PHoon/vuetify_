import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      {
        id: 1,
        name: "zihoon",
        email: "aksjdj306@naver.com",
        password: "1q2w3e4r!",
      },
      {
        id: 2,
        name: "coder",
        email: "codingnb306@naver.com",
        password: "1q2w3e4r!",
      },
    ],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    // 로그인이 성공했을 때,
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    // 로그인이 실패했을 때,
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    //로그아웃
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
  },
  actions: {
    //로그인 시도
    login({ state, commit }, loginObj) {
      let selectedUser = null;
      state.allUsers.forEach((user) => {
        if (user.email === loginObj.email) selectedUser = user;
      });
      if (selectedUser === null || selectedUser.password !== loginObj.password)
        commit("loginError");
      else {
        commit("loginSuccess", selectedUser);
        router.push({ name: "Mypage" }); //vue 파일 안에서는 this.$router.push({})
      }
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "home" }); // 로그아웃하면 홈으로 보내줌
    },
  },
});
