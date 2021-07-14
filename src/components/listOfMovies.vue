<template>
  <div>
    <div>
      <h1>Movie List</h1>
    </div>
    <div>
      <center>
        <input type="text" v-model="search" style="width:330px; margin:0 auto"/>
      </center>
    </div>
    <div>
    <center>
      <md-button style="margin: 5px auto" @click="getWeather()">Search</md-button>
    </center>
    </div>
   
    <b-container>
      <div class="row" style="margin-bottom: 5em, grid-gap: 5em">
        <div class="col-sm-4" v-for="movie in filteredMovies" :key="movie"> 
          <div class="row" style="margin-bottom: 5em">
            <div class="col-sm-5">
              <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" style="width:275px;">
            </div>
            <div class="col-sm-7" style="margin-left: -.5em">
                <h5 class="centered">{{movie.original_title | to-uppercase}}</h5>
                
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>


</template>

<script>
  import { BContainer, VBModal } from 'bootstrap-vue'
    import searchBar from '../mixins/searchBar'
    import {bus} from '../main';
  export default {
    name: 'RegularButtons',
    components: { BContainer },
    directives: { 'b-container': VBModal },
    data () {
      return {
        
        search: '',
        movies: [],
      }       
    },
    methods: {
      //   getWeather: function() {
      //   console.log(this.$refs.search.value)
      //   this.$http.get('http://api.weatherstack.com/current?access_key=17a1cccf8eba608ac806a71d314faffe&query=Khayelitsha').then(function(data) {
      //     console.log(data.body)
      //   })
      //   this.forecast = this.data;
      // }
      
    }, 
    created() {
      bus.$on('sendInput', (data) => {console.log('received from bus: ' + data)})
      this.$http.get('https://api.themoviedb.org/3/movie/popular?api_key=9270421e43cc32ed6056cad8de3c2c67&language=en-US&page=1')
      .then(function(data) {
          console.log(data.body.results)
          this.movies = data.body.results
          this.poster = 'https://image.tmdb.org/t/p/w500/'+data.body.results.poster_path
        })
    }, 
    computed: {
     
    },
    filters: {
      toUppercase(value){
        return value.toUpperCase()
      }, 
      'cut': function(value){
        return value.slice(0,300) + "...p"
      },
    },
    mixins: [
        searchBar
    ]
    
  }
  
  </script>