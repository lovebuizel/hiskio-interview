<template>
  <div class="auth">
    <div class="bg-layout">
      <button>
        <img src="~/assets/times.svg" alt="" class="close-btn" @click="toggle_openAuth">
      </button>
      <img src="~/assets/hiskio.svg" alt="" class="mx-auto w-120px h-18px">
      <header class="w-full overflow-hidden">
        <div class="flex justify-center">
          <a href="#" class="btn float-left active">登入</a>
          <a href="#" class="btn float-right">註冊</a>
        </div>
        <div class="dash-height mx-auto clear-both max-w-320 w-full bg-white">
          <span class="dash dash-height dash-logIn" />
        </div>
      </header>
      <div class="w-full h-full">
        <p class="text-center text-gray-700 text-16px mt-24px mb-21px">
          使用 HiSKIO ID 登入
        </p>
      </div>
      <div class="mx-auto overflow-hidden w-320px">
        <ul>
          <li class="relative mb-8px">
            <input v-model="account" type="email" placeholder="請輸入 HiSKIO ID" class="inputText">
            <img src="~/assets/user.svg" alt="" class="w-20px font-awesome-position">
          </li>
          <li class="relative">
            <input v-model="password" type="password" placeholder="請輸入登入密碼" class="inputText">
            <img src="~/assets/lock.svg" alt="" class="w-20px font-awesome-position">
          </li>
        </ul>
      </div>
      <a href="#" class="submitbtn" @click="login">登入</a>
      <a href="#" class="forgetPassword">忘記密碼</a>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations(['toggle_openAuth']),
    ...mapActions(['post_login']),
    login() {
      this.post_login({
        account: this.account,
        password: this.password
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.7);
  z-index: 30;
}
.bg-layout {
  max-width: 450px;
  width: 100%;
  max-height: 100vh;
  overflow: auto;
  border-radius: .625rem;
  position: relative;
  padding-bottom: 28px;
  padding-top: 40px;
  background-size: contain;
  background-position: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-image: url('~/assets/auth_bg.png');
  min-height: 762px;
}
.close-btn {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 11px;
}
.w-120px {
  width: 120px;
}
.h-18px {
  height: 18px;
}
.btn {
  font-size: 32px;
  width: 160px;
  text-align: center;
  font-weight: 900;
  color: #bfbfbf;
  padding-top: 1.25rem;
  padding-bottom: 8px;
  transition-property: background-color,border-color,color,fill,stroke;
  &.active {
    color: #288fac;
  }
}
.dash-height {
  height: 4px;
}
.max-w-320 {
  max-width: 320px;
}
.dash {
  display: block;
  background-color: #288fac;
  width: 80px;
  transform: translateX(50%);
}
.text-gray-700 {
  color: #595959;
}
.text-16px {
  font-size: 16px;
}
.mb-21px {
  margin-bottom: 21px;
}
.mt-24px {
  margin-top: 24px;
}
.w-320px {
  width: 320px;
}
.mb-8px {
  margin-bottom: 8px;
}
.w-16px {
  width: 16px;
}
.font-awesome-position {
  position: absolute;
  top: 9px;
  width: 20px;
  height: 20px;
  left: 5%;
}
.inputText {
  font-size: 14px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #8c8c8c;
  background-color: #fafafa;
  padding-left: 3rem;
  border-radius: .25rem;
  outline: 0;
}
.w-20px {
  width: 20px;
}
.submitbtn, .forgetPassword {
  font-size: 16px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
.submitbtn {
  align-items: center;
  width: 320px;
  background-color: #288fac;
  color: #fafafa;
  margin-top: 28px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 4px;
}
.forgetPassword {
  color: #8c8c8c;
  text-align: center;
  margin-top: 19px;
  width: 50%;
}
</style>
