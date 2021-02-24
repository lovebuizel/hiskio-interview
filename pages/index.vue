<template>
  <div class="home">
    <div class="fundraising-wrapper">
      <div class="card-box">
        <header class="flex items-center justify-between w-full mb-20px mb-20px">
          <h1 class="title">正在募資中的課程</h1>
          <a href="#" class="text-gray-600 pr-8px text-14px">更多募資課程</a>
        </header>
        <div class="card-content">
          <Card v-for="item in fundraisingData" :cardData="item" :key="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  },
  async asyncData(context) {
    const data = await context.$axios('/api/courses/fundraising')
    return {
      fundraisingData: data.data
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
}
.fundraising-wrapper {
  padding-top: 60px;
  background-repeat: no-repeat!important;
  background-position: 50%!important;
  background: url('~/assets/fundraising_bg.png');
  min-height: 849px;
}
.card-box {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
}
.mb-20px {
  margin-bottom: 20px;
}
.pr-8px {
  padding-right: 8px;
}
.text-14px {
  font-size: 14px;
}
.title {
  font-size: 1.5rem;
  color: #454545;
}
.card-content {
  overflow: auto;
  margin: -16px;
  padding: 8px;
}
</style>
