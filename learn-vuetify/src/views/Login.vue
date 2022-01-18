<template>
  <v-contianer>
    <v-alert :value="isLoginError" type="error">
      아이디와 비밀번호를 확인해주세요.
    </v-alert>
    <v-alert :value="isLogin" type="success"> 로그인 되었습니다. </v-alert>
    <v-card>
      <v-card-title> Log-in </v-card-title>
      <div class="pa-3">
        <v-card-text>
          <v-text-field v-model="email" label="이메일을 입력하세요.">
          </v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            label="비밀번호를 입력하세요."
          >
          </v-text-field>

          <v-btn
            color="primary"
            depressed
            block
            large
            @click="login({ email, password })"
          >
            로그인
          </v-btn>
        </v-card-text>
      </div>
    </v-card>
  </v-contianer>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
