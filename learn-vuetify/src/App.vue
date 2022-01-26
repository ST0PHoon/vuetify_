<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-spacer />
      <v-menu left bottom v-if="isLogin">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item router :to="{ name: 'Mypage' }">
            <v-list-item-title>마이페이지</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <!--dispatch를 통해 store에있는 actions의 함수를 불러와 사용-->
            <v-list-item-title @click="$store.dispatch('logout')"
              >로그아웃</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn flat color="primary" v-else router :to="{ name: 'Login' }"
        >Log in</v-btn
      >
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list v-for="item in items" :key="item.title" dense nav>
        <!-- 로그인 안됐을 때(false), Nologin(로그인페이지) / 로그인 됐을 때(true), YesLogin(마이페이지) -->
        <v-list-item
          v-if="
            item.show == 'all' ||
            (isLogin == false && item.show == 'NoLogin') ||
            (isLogin == true && item.show == 'YesLogin')
          "
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data: () => ({
    drawer: false,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/", show: "all" },
      {
        title: "Grid-System",
        icon: "mdi-border-all",
        to: "/grid-system",
        show: "all",
      },
      {
        title: "Breakpoint",
        icon: "mdi-cards-spade",
        to: "/breakpoints",
        show: "all",
      },
      {
        title: "Typography",
        icon: "mdi-alpha-a-box",
        to: "/typography",
        show: "all",
      },
      { title: "Login", icon: "mdi-account", to: "/login", show: "NoLogin" },
      { title: "Mypage", icon: "mdi-account", to: "/mypage", show: "YesLogin" },
    ],
    right: null,
  }),
  computed: {
    ...mapState(["isLogin"]),
  },
  // import에 mapActions 를 기입 > @click="logout" 을 작성 => store actions에 있는 함수 사용
  // methods: {
  //   ...mapActions(["logout"]),
  // },
};
</script>
