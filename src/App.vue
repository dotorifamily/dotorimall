<template>
  <Header />
  <Event />
  <Search />  
  <Introduction />
  <BestProduct />
  <Footer />
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component';
import Header from './components/HeaderPage.vue';
import Search from './pages/main/SearchPage.vue';
import Event from './pages/main/EventPage.vue';
import Introduction from './pages/main/IntroductionPage.vue';
import BestProduct from './pages/main/BestProductPage.vue';
import Footer from './components/FooterPage.vue';

export default {
  name : 'App',
  components: {  Header,  Search,  Event, Introduction, BestProduct, Footer },

  setup(){

  }
}

</script>

<style lang="scss">

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  position:relative;
}
</style>
