<template>
  <div>
    <h1 class="title">Search movies</h1>
    <div class="input"> <input type="text" placeholder="Input name Movie"></div>
    <div class="btn"><button>Search</button></div>

  </div>
</template>

<style scoped>
  .title {
    padding-top: 50px;
    padding-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
  }
  .input {
    width: 600px;
    margin: 0 auto;
  }
  input {
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
  }
  .btn {
    width: 150px;
    margin: 0 auto;
  }
  .btn button {
    padding: 20px;
    background: skyblue;
    color: #fff;
    text-transform: uppercase;
    border: 1px solid white;
    border-radius: 20px;
    width: 150px;
    outline: none;
    cursor: pointer;
  }
</style>

