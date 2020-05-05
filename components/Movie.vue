<template>
  <div class="movie">
    <div class="name"></div>
    <div class="image"></div>
    <div class="year"></div>
    <div class="description"></div>
  </div>
</template>
<script>
import { watch } from '@/plugins/movie-api'
export default {

}
</script>

<style  scoped>
  .movie {
    width: 25%;
    height: 50px;
    background: #000;
  }
</style>
