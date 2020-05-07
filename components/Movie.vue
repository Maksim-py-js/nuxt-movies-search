<template>
  <section>
    <ul  class="movie">
      <li>
        <h2>{{ mov }}</h2>
      </li>
    </ul> 
  </section>
</template>

<script>
export default {
  data () {
    return {
      movie: []
    }
  },
  async fetch () {
    const mov = await axios.get(`http://www.omdbapi.com/?t=joker&apikey=2cac6eaa`)
    
  }
}
</script>



<style  scoped>
  .movie {
    width: 25%;
    height: 50px;
    background: #f1f1f1;
  }
</style>