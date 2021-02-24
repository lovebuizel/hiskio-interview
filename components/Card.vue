<template>
  <div class="card">
    <div class="bg-white rounded shadow-lg-plus relative max-w-280 h-full">
      <div class="fundraising-card">
        <div class="card-icon img-box relative">
          <a href="#" class="absolute top-0 left-0 h-full w-full z-4" />
          <div class="relative pt-video-top w-full h-full">
            <div class="course-image" :style="{ backgroundImage: `url(${cardData.thumbnails.w300})` }" />
          </div>
          <div class="userTeacher rounded-md rounded-b-none" />
          <div class="collect">
            <img src="~/assets/bookmark.svg" alt="" class="w-16 inline-block">
            <img src="~/assets/card-cart.svg" alt="" class="w-24 inline-block ml-6px" @click="toggleCart">
          </div>
        </div>
      </div>
      <div class="contant-block relative">
        <a href="#" class="absolute top-0 left-0 h-full w-full z-4" />
        <h1 class="courses-title">
          {{ cardData.title }}
        </h1>
        <div>
          <div class="flex items-center mb-6px">
            <img :src="cardData.lecturers[0].thumbnails.w300" alt="" class="w-30px h-30px rounded-full">
            <p class="teacher-name">{{ cardData.lecturers[0].username }}</p>
          </div>
          <div class="relative">
            <div class="flex items-center justify-between text-14px text-gray-700">
              <p class="w-1/2">剩 50 天</p>
              <p class="w-1/2 text-right">{{ `已募資 ${Math.round(cardData.consumers / cardData.fundraising_tickets * 100)}%` }}</p>
            </div>
            <div class="h-28px flex-1 flex justify-center items-center">
              <div class="w-full">
                <div class="progress">
                  <div class="pg-block">
                    <div class="pg-box">
                      <span class="progress-rate" style="width: 53%;" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <p class="text-hi-price text-22px leading-5 mr-6px font-medium">{{ `$${cardData.price}` }}</p>
          <p class="text-gray-500 text-14px line-through">{{ `$${cardData.fixed_price}` }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    cardData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['post_cart']),
    toggleCart() {
      if (!localStorage.getItem('carts')) localStorage.setItem('carts', JSON.stringify([]))
      let carts = JSON.parse(localStorage.getItem('carts'))
      const found = carts.find(cart => cart.id === `${this.cardData.id}`)
      if (!found) {
        carts.push({
          id: `${this.cardData.id}`,
          coupon: ''
        })
      } else {
        carts = carts.filter(cart => cart.id !== `${this.cardData.id}`)
      }
      localStorage.setItem('carts', JSON.stringify(carts))
      this.post_cart()
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  float: left;
  padding: 8px;
  width: 25%;
}
.max-w-280 {
  max-width: 280px;
}
.shadow-lg-plus {
  box-shadow: 0 5px 20px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);
}
.fundraising-card {
  background-color: #fff;
  border-radius: .25rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  height: 100%;
  .userTeacher {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition-property: opacity;
    transition-duration: .5s;
  }
}
.w-16 {
  width: 16px;
}
.w-24 {
  width: 24px;
}
.z-4 {
  z-index: 4;
}
.img-box {
  position: relative;
  display: flex;
  align-items: center;
}
.pt-video-top {
  padding-top: 56.25%;
}
.collect {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: .5rem;
  padding-bottom: .5rem;
  z-index: 5;
  opacity: 0;
  transition-property: opacity;
  transition-duration: .3s;
}
.contant-block {
  padding: 13px 10px 12px;
  width: 100%;
}
.courses-title {
  color: #454545;
  font-size: 20px;
  height: 52px;
  margin-bottom: 10px;
  line-height: 1.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.course-image {
  height: 100%;
  max-width: 280px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50%;
}
.w-30px {
  width: 30px;
}
.h-30px {
  height: 30px;
}
.teacher-name {
  color: #8c8c8c;
  padding-left: .5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.text-14px {
  font-size: 14px;
}
.text-gray-700 {
  color: #595959;
}
.h-28px {
  height: 28px;
}
.progress {
  width: 100%;
  .pg-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    .pg-box {
      width: 100%;
      height: 8px;
      background-color: #f5f5f5;
      overflow: hidden;
      border-radius: .375rem;
    }
  }
}
.progress-rate {
  background-image: linear-gradient(90deg,#eb6767 -.01%,#e34a4a 99.7%);
  display: block;
  height: 100%;
  border-radius: .375rem;
}
.text-22px {
  font-size: 22px;
}
.text-hi-price {
  color: #454545;
}
.mr-6px {
  margin-right: 6px;
}
.text-gray-500 {
  color: #bfbfbf;
}
.card-icon {
  &:hover {
    .userTeacher {
      background-image: linear-gradient(0,rgba(0,0,0,.4),hsla(0,0%,98%,0));
      transition-property: opacity;
      transition-duration: .5s;
      opacity: .5;
    }
    .collect {
      opacity: 1;
      transition-property: opacity;
      transition-duration: .2s;
    }
  }
}
.ml-6px {
  margin-left: 6px;
}
</style>
