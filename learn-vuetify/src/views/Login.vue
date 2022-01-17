<template>
  <v-contianer>
    <v-alert :value="isError" type="error">
      아이디와 비밀번호를 확인해주세요.
    </v-alert>
    <v-alert :value="LoginSuccess" type="success"> 로그인 되었습니다. </v-alert>
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

          <v-btn color="primary" depressed block large @click="login()">
            로그인
          </v-btn>
        </v-card-text>
      </div>
    </v-card>
  </v-contianer>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      isError: false,
      LoginSuccess: false,
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
    };
  },
  methods: {
    login() {
      // 전체 유저에서 해당 이메일로 유저를 찾는다.
      let selectedUser = null;
      this.allUsers.forEach((user) => {
        if (user.email === this.email) selectedUser = user;
      });
      selectedUser === null
        ? (this.isError = true)
        : selectedUser.password !== this.password
        ? (this.isError = true)
        : (this.LoginSuccess = true);
      // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
    },
  },
};
</script>
