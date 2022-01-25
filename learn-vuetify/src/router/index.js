import Vue from "vue";
import VueRouter from "vue-router";
//페이지 추가
import Dashboard from "@/views/Dashboard";
import GridSystem from "@/views/GridSystem";
import Breakpoints from "@/views/Breakpoints";
import Typography from "@/views/Typography";
import Login from "@/views/Login";
import Mypage from "@/views/Mypage";

Vue.use(VueRouter);

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
    component: Login,
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
