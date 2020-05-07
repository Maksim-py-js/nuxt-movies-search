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
    display: block;
    width: 600px;
    margin: 0 auto 30px;
    text-align: center;
    font-size: 15px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #404040;
    border-radius: 4px;
    border: none;
    padding: 10px;
    outline: none;
}
.button {
  display: block;
  padding: 15px 20px;
  background: #767676;
  color: #fff;
  text-transform: uppercase;
  border: 1px solid white;
  border-radius: 4px;
  border: 2px solid #404040;
  width: 150px;
  outline: none;
  cursor: pointer;
  margin: 0 auto;
}
</style>
