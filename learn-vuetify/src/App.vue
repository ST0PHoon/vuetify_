<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-spacer />
      <v-btn flat color="primary" v-if="isLogin">Welcome</v-btn>
      <v-btn flat color="primary" v-else router :to="{ name: 'login' }"
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
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            v-if="item.title == 'Login' || item.title == 'Mypage'"
          >
            <v-list-item-title v-if="isLogin">Mypage</v-list-item-title>
            <v-list-item-title v-else>Login</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content v-else>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "Grid-System", icon: "mdi-border-all", to: "/grid-system" },
      { title: "Breakpoint", icon: "mdi-cards-spade", to: "/breakpoints" },
      { title: "Typography", icon: "mdi-alpha-a-box", to: "/typography" },
      { title: "Login", icon: "mdi-account", to: "/login" }, // v-if="isLogin===true"
      { title: "Mypage", icon: "mdi-account", to: "/mypage" }, //v-if="isLogin===false"
    ],
    right: null,
  }),
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>
