import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

//페이지 추가
import Dashboard from "@/views/Dashboard";
import GridSystem from "@/views/GridSystem";
import Breakpoints from "@/views/Breakpoints";
import Typography from "@/views/Typography";
import Login from "@/views/Login";
import Mypage from "@/views/Mypage";

Vue.use(VueRouter);

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    // 이미 로그인 된 유저 막기
    alert("이미 로그인을 했습니다.");
    next("/");
  } else {
    next();
  }
};

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    // 로그인 안한 유저의 마이페이지 접속 방지
    alert("로그인이 필요합니다");
    next("/");
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/grid-system",
    name: "GridSystem",
    component: GridSystem,
  },
  {
    path: "/breakpoints",
    name: "Breakpoints",
    component: Breakpoints,
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: rejectAuthUser, // 가드
    component: Login,
  },
  {
    path: "/mypage",
    name: "Mypage",
    beforeEnter: onlyAuthUser,
    component: Mypage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
