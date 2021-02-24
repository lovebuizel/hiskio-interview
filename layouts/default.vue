<template>
  <div>
    <Header />
    <Nuxt class="pt-50px" />
    <Cart />
    <Auth v-show="get_openAuth" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '~/components/Header'
import Cart from '~/components/Cart'
import Auth from '~/components/Auth'
export default {
  components: {
    Header,
    Cart,
    Auth
  },
  computed: {
    ...mapGetters(['get_openAuth'])
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.pt-50px {
  padding-top: 50px;
}
</style>
