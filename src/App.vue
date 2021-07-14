<template>
  <div>
    
    <h1 style="text-align: center">Movie-Stop</h1>
    <router-view></router-view>
    <nav-buttons></nav-buttons>

  </div>
</template>

<script>

import AddBlog from './components/addBlog.vue';
import homeView from './components/home.vue'
import listMovies from './components/listOfMovies.vue'
import header from './components/header.vue';
import navButtons from './components/navButtons.vue'


export default {
  components: {
    'add-blog': AddBlog,
    'home-view': homeView,
    'list-movies': listMovies,
    'app-header': header ,
    'nav-buttons': navButtons 
  },
  data () {
    return {
    }
  }
 
}
</script>
<style scoped>
h1{
  display: block;
  color: #333333;
    max-width: 650px;
    margin: 0 auto;
    padding: 0 16px;
    font-size: 59px;
}
</style>