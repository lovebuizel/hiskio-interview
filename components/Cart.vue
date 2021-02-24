<template>
  <div class="cart-list" :class="get_openCart ? 'open' : ''">
    <a href="#" class="absolute top-0 right-0 flex items-center justify-center w-60 h-60 z-2" @click="toggle_openCart">
      <img src="~/assets/close_cart.svg" alt="" class="w-16">
    </a>
    <h3 class="msg-title text-18px text-hi-price">購物車</h3>
    <div class="w-full h-full overflow-auto bg-white pb-58px">
      <div v-for="cart in get_carts" :key="cart.id" class="relative item">
        <a href="#" class="absolute top-0 left-0 w-full h-full z-2" target="_blank" />
        <div class="relative card">
          <div class="relative flex">
            <img :src="cart.courses[0].thumbnails.w300" alt="" class="image mr-4px">
          </div>
          <div class="card-content">
            <div class="flex flex-col items-start justify-between w-full h-full">
              <div class="flex items-start justify-between w-full">
                <p class="title">{{ cart.name }}</p>
                <a href="#" class="z-3" @click="deleteCart(cart.id)">
                  <img src="~/assets/trash.svg" alt="" class="w-14">
                </a>
              </div>
              <div class="price mt-4px">
                <div class="disPrice">
                  <span class="dollar-sign">$</span>
                  <p class="discount-price">
                    {{ cart.total }}
                  </p>
                </div>
                <div class="fundraising-tag">募資課程</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="btn z-3">
      <img src="~/assets/goToCart.svg" alt="" class="w-24 mr-16px">
      <p class="text-18px">前往購物車</p>
    </a>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['get_openCart', 'get_carts'])
  },
  created() {
    if (process.client) {
      this.post_cart()
    }
  },
  methods: {
    ...mapMutations(['toggle_openCart']),
    ...mapActions(['post_cart']),
    deleteCart(id) {
      if (!localStorage.getItem('carts')) localStorage.setItem('carts', JSON.stringify([]))
      let carts = JSON.parse(localStorage.getItem('carts'))
      const found = carts.find(cart => cart.id === id)
      if (found) carts = carts.filter(cart => cart.id !== id)
      localStorage.setItem('carts', JSON.stringify(carts))
      this.post_cart()
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-list {
  position: fixed;
  right: -130%;
  top: 0;
  box-shadow: 10px 0 20px 2px rgba(0, 0, 0, .2), 0 4px 6px -2px rgba(0, 0, 0, .05);
  width: 100%;
  max-width: 375px;
  height: 100%;
  background-color: #fff;
  z-index: 11;
  padding-top: 60px;
  transition-duration: .3s;
  transition-property: top,left,right,bottom;
  display: flex;
  align-items: center;
  &.open {
    right: 0;
  }
  .msg-title {
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.w-14 {
  width: 14px;
}
.w-16 {
  width: 16px;
}
.w-60 {
  width: 60px;
}
.h-60 {
  height: 60px;
}
.z-2 {
  z-index: 2;
}
.z-3 {
  z-index: 3;
}
.text-18px {
  font-size: 18px;
}
.text-hi-price {
  color: #454545;
}
.pb-58px {
  padding-bottom: 58px;
}
.bg-white {
  background-color: #fff;
}
.item {
  height: 115px;
  padding: 12px 8px;
  border-bottom-width: 1px;
  border-color: #d9d9d9;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .image {
    width: 150px;
    height: 84px;
    border-radius: 6px;
  }
  .card-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 8px;
    height: 90px;
    width: 75%;
  }
  .title {
    font-size: 16px;
    color: #595959;
    width: 100%;
    height: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    display: flex;
    align-items: flex-end;
  }
  .dollar-sign {
    color: #e34a4a;
    font-weight: 700;
    margin-bottom: 2px;
    margin-right: 4px;
  }
  .discount-price {
    font-size: 18px;
    color: #e34a4a;
    font-weight: 600;
  }
}
.mr-4px {
  margin-right: 4px;
}
.mt-4px {
  margin-top: 4px;
}
.fundraising-tag {
  font-size: 14px;
  margin-bottom: 3px;
  width: 64px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #454545;
  border: 1px solid #454545;
}
.disPrice {
  display: flex;
  align-items: flex-end;
  margin-right: 5px;
}
.btn {
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background-color: #178fac;
  color: #fff;
}
.w-24 {
  width: 24px;
}
.mr-16px {
  margin-right: 16px;
}
</style>
