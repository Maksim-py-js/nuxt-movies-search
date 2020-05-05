import { defineComponent, ref, useFetch } from 'nuxt-composition-api'
import axios from 'axios'

const API_KEY = 'a5549d08';

export default defineComponent({
  setup() {
    const name = ref('')

    useFetch(async () => {
      name.value = await axios.get(`https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`)
    })

    return { name }
  },
})
