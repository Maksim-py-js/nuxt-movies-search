<template>
  <div>
    <div class="">
      <h1 class="title">Search movies</h1>
      <Search v-on:search-result="setMovies" />
      <MovieCards :movies="movies" />
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import MovieCards from '@/components/MovieCards.vue'

export default {
  components: {
    Search,
    MovieCards
  },

  data() {
    return {
      movies: []
    }
  },
  mounted() {},

  methods: {
    setMovies: function(movies) {
      console.log(movies)
      this.movies = []
      this.movies.push(...movies)
    }
  },

  watch: {},

  computed: {}
}
</script>

<style>
.title {
    padding-top: 50px;
    padding-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
  }
</style>
