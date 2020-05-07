<template>
  <div>
    <div class="input">
      <input
        type="text"
        placeholder="Input name Movie"
        v-model="title"
      >
    </div>
    <div class="submit">
      <input
        type="submit"
        value="Search"
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: ''
  })
}
</script>

<style scoped>
  .input,
  .submit {
    width: 600px;
    margin: 0 auto;
  }
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
  .submit input{
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
