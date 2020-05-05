<template>
  <div>
    <h1 class="title">Search movies</h1>
    <Search />
    <Movie />
  </div>
</template>

<script>
import Search from '@/components/Search'
import Movie from '@/components/Movie'

export default {
  components: {
    Search, Movie
  }
}
</script>

<style scoped>
  .title {
    padding-top: 50px;
    padding-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
  }
</style>

