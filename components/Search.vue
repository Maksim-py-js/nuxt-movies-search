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
  width: 70%;
  margin: 0 auto 30px;
	padding: 18px 48px;
  border: none;
  background:transparent;
  text-align: center;
	font-family: "Asap";
  font-weight: bold;
	font-size: 16px;
	color: #4d4d4d;
  border-radius: 15px 15px 15px 15px;
  outline: none;
  background: #fff;
}
.input input:hover {

  box-shadow: 0px 10px 15px 8px #cacaca;
}
.button {
  display: block;
  background:transparent;
	padding: 18px 48px;
	border: 1px solid #4d4d4d;
	font-family: "Asap";
	font-weight: medium;
	font-size: 16px;
	color: #4d4d4d;
  border-radius: 15px 15px 15px 15px;
  cursor: pointer;
  margin: 0 auto;
  outline: none;
}
.button:hover {
  font-weight: bold;
  background: #fff;
  border: 1px solid #fff;
  box-shadow: 0px 10px 15px 8px #cacaca;
}
</style>
