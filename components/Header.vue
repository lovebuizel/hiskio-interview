<template>
  <header class="fixed top-0 z-10 w-full bg-white shadow-sm h-50px">
    <div class="flex items-center justify-between h-full mx-auto max-w-1170">
      <div class="header-bar">
        <nuxt-link to="/" class="logo">
          <div class="logo-hiskio" />
        </nuxt-link>
        <div class="flex items-center justify-start">
          <a class="text-gray-600 mr-8px">
            <img src="~/assets/search.svg" alt="" srcset="" class="w-16px">
          </a>
          <div class="relative">
            <input
              id="seach"
              type="text"
              placeholder="搜尋"
              name="seachBar"
              autocomplete="off"
              class="search-bar">
          </div>
        </div>
      </div>
      <div class="flexRight">
        <ul class="h-full flexRight mobile">
          <li class="header-btn list">
            <nuxt-link to="/teach" class="text-gray-700 textBtn transition-color">我想開課</nuxt-link>
          </li>
          <li v-show="get_user" class="relative header-btn list">
            <a href="#" class="text-gray-700 textBtn transition-color">
              任務板
            </a>
          </li>
          <li v-show="get_user" class="relative header-btn list">
            <a href="#" class="text-gray-700 textBtn transition-color">
              我的課程
            </a>
          </li>
        </ul>
        <ul class="h-full flexRight">
          <li class="hidden md:flex sn-640:hidden"></li>
          <li class="list">
            <a href="#" @click="toggle_openCart" :class="get_carts.length >= 1 ? 'active-cart' : ''">
              <img v-if="get_carts.length < 1" src="~/assets/cart.svg" alt="" srcset="" class="w-18px h-24px">
              <img v-else src="~/assets/cart-active.svg" alt="" srcset="" class="w-18px h-24px">
            </a>
          </li>
          <li class="list mobile">
            <a href="#">
              <img src="~/assets/question.svg" alt="" srcset="" class="w-16px">
            </a>
          </li>
          <li class="mobileOpen ml-12px">
            <a href="#">
              <img src="~/assets/hamburger.svg" alt="" srcset="" class="mr-15px">
            </a>
          </li>
        </ul>
        <ul class="h-full flexRight mobile">
          <li class="list" v-show="!get_user">
            <a href="#" class="authBtn login" @click="toggle_openAuth">登入</a>
          </li>
          <li class="list" v-show="!get_user">
            <a href="#" class="authBtn registered">註冊</a>
          </li>
          <li class="list" v-show="get_user">
            <a>
              <img :src="get_user && get_user.avatar" alt="" class="rounded-full mr-12px w-32px h-32px">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['toggle_openAuth', 'toggle_openCart'])
  },
  computed: {
    ...mapGetters(['get_user', 'get_carts'])
  }
}
</script>

<style lang="scss" scoped>
header {
  background: red;
}
.h-50px {
  height: 50px;
}
.logo {
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
}
.logo-hiskio {
  height: 15px;
  width: 100px;
  margin-right: 31px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url('~/assets/hiskio.svg');
  @media (max-width: 1200px) {
    margin-left: 15px;
  }
}
.bg-white {
  background: #fff;
}
.max-w-1170 {
  max-width: 1170px;
}
.mr-8px {
  margin-right: 8px;
}
.w-16px {
  width: 16px;
}
.header-bar {
  height: 100%;
  width: 33.333333%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.search-bar {
  outline: 0;
  width: 100%;
  padding-left: 8px;
  background-color: #fafafa;
}
.flexRight {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.mobile {
  @media (max-width: 768px) {
    display: none;
  }
}
.w-18px {
  width: 18px;
}
.list {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 16px;
  justify-content: center;
}
.ml-12px {
  margin-left: 12px;
}
.mobileOpen {
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
}
.mr-15px {
  margin-right: 15px;
}
.authBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 2rem;
  border-radius: .25rem;
  font-size: .875rem;
  &.login {
    color: #308eac;
  border-width: 1px;
  border-color: #308eac;
  }
  &.registered {
    background-color: #308eac;
    color: #fff;
  }
}
.textBtn {
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    color: #308eac;
  }
}
.text-gray-700 {
  color: #595959;
}
.transition-color {
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4,0,1,1);
  transition-duration: .1s;
}
.mr-12px {
  nav-right: 12px;
}
.w-32px {
  width: 32px;
}
.h-32px {
  height: 32px;
}
.h-24px {
  height: 24px;
}
.active-cart {
  color: #178fac;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 3px;
    right: 0;
    display: block;
    width: 6px;
    height: 6px;
    background-color: #eb6767;
    border-radius: 9999px;
  }
}
</style>
