<template>
  <div>
    <h1 class="title">Search movies</h1>
    <Search v-on:search-result="setMovies" />
    <MovieCards :movies="movies" />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import MovieCards from '@/components/MovieCards.vue'

export default {
  components: {
    Search,  MovieCards
  },
  data() {
    return {
      movies: []
    }
  },
  methods: {
    setMovies: function(movies) {
      console.log(movies)
      this.movies = []
      this.movies.push(...movies)
    }
  }
}
</script>

<style>
body {
  background:transparent url("../assets/bg.png") no-repeat 50% 50%/cover;
  min-height: 80vh;
}
.title {
  padding-top: 50px;
  padding-bottom: 30px;
  text-align: center;
  font-family: "Asap";
  font-weight: medium;
  font-size: 60px;
  color: #4d4d4d;
}
::-webkit-scrollbar-button {
  background-image: url("");
  background-repeat: no-repeat;
  width: 3px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background-color: #262626;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0px;
  border-radius: 3px;
  background-color: #f6f6f6;
}

::-webkit-resizer {
  background-image: url("");
  background-repeat: no-repeat;
  width: 5px;
  height: 0px;
}

::-webkit-scrollbar {
  width: 5px;
}
</style>
