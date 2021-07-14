import home from './components/home.vue'
import listMovies from './components/listOfMovies.vue'
import movieItem from './components/movieItem.vue'
export default [
    {path: '/', component: home},
    {path: '/list', component: listMovies},
    {path: '/movie/:id', component: movieItem}

]