<template>
  <div class="columns is-multiline">
    <div class="column is-one-fifth" v-for="(movie, index) in movies" :key="index">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by5">
            <img :src="movie.Poster" alt="Poster" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <p>{{ movie.Title }}</p>
            <time datetime="2016-1-1">{{ movie.Year }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .columns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
  .column {
    background: #f1f1f1;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    width: calc(100% / 4 - 20px);
    min-height: 330px;
  }
  p {
    font-family: 'Roboto';
    font-size: 20px;
    line-height: 30px;
    margin: 0;
  }
  img {
    width: 100%;
  }
  time {
    font-family: 'Roboto';
    font-size: 14px;
  }
</style>
