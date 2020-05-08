<template>
  <div class="columns">
    <div class="column" v-for="(movie, index) in movies" :key="index">
      <div class="card">
        <div class="image">
          <img  :src="movie.Poster" alt="Poster">
        </div>
        <div class="content">
          <p>{{ movie.Title }}</p>
          <div datetime="2016-1-1">{{ movie.Year }}</div>
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
  * {
    text-align: center;
  }
  .columns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .column {
    width: 24%;
    margin-bottom: 20px;
  }
  .card {
    border-radius: 15px 15px 15px 15px;
    background: #262626;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    min-height: 420px;
    margin-right: 5px;
    margin-left: 5px;
    padding-bottom: 10px;
  }
  .card:hover {
    margin-top: -20px;
    transition: .2s;
    box-shadow: 0px 0px 30px 10px #a9a9a9;
    cursor: pointer;
    background: #fff;
  }
  .card:hover .content {
    font-weight: bold;
    color: #4d4d4d;
  }
  .card:hover img {
    font-family: "Asap";
    font-weight: bold;
    font-size: 16px;
    color: #4d4d4d;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 15px 15px 0 0;

    font-family: "Asap";
    font-weight: medium;
    font-size: 16px;
    color: #fff;
    border: none;
  }
  .content {
    font-family: "Asap";
    font-weight: medium;
    font-size: 16px;
    color: #fff;
    padding: 5px;
  }
</style>
