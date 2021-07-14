<template> 
    <div id="single-movie">
        <h1></h1>
        <div class="row" style="margin-bottom: 5em, grid-gap: 5em">
        <div class="col-sm-4" v-for="movie in movie" :key="movie"> 
          <div class="row" style="margin-bottom: 5em">
            <div class="col-sm-5">
              <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" style="width:275px;">
            </div>
            <div class="col-sm-7" style="margin-left: -.5em">
                <router-link v-bind:to="'/movie/'+'query'">
                    <h5 class="centered">{{movie.original_title }}</h5>
                </router-link>
                <p style="font-size:12px;">{{movie.overview | cut}}</p>
                <p style="font-size:12px;">Released: {{movie.release_date}}</p>
                <p style="font-size:12px;">Rating: {{movie.vote_average}}</p>
            </div>
          </div>
        </div>
      </div>
        <article></article>
    </div>
</template>

<script>

export default {
    data () {
        return {
            query: this.$route.params.query,
            movie: []
        }
    },
    created() {
        this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=9270421e43cc32ed6056cad8de3c2c67&query=' + this.query).then(function(data){
            console.log(data);
            this.movie = data.body.results;
        });
    }
}

</script>

<style></style>