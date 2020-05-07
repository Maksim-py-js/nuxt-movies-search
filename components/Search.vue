<template>
    <div class="search" @keyup.enter="search">
      <div class="input">
        <input type="text" placeholder="Find a movie" v-model="searchValue" />
      </div>
      <div class="control">
        <button class="button" v-on:click="search">Search</button>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: null,
      searchUrl: 'http://www.omdbapi.com/?apikey=ca5e425d&s='
    }
  },
  methods: {
    async search() {
      if (this.searchValue) {
        let url = this.searchUrl + this.searchValue
        const obj1 = await this.$axios.$get(url)
        url = url + '&page=2'
        const obj2 = await this.$axios.$get(url)
        const answer = obj1.Search.concat(obj2.Search)

        this.$emit('search-result', answer)
      }
    }
  }
}
</script>

<style scoped>
.input input {
   width: 600px;
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #000;
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 30px;
    outline: none;
}
.button {
  padding: 20px;
  background: skyblue;
  color: #fff;
  text-transform: uppercase;
  border: 1px solid white;
  border-radius: 20px;
  width: 150px;
  outline: none;
  cursor: pointer;
  margin: 0 auto;
}
</style>
