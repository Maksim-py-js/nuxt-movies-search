import { defineComponent, ref, watch } from 'nuxt-composition-api'
import axios from 'axios'

const API_KEY = 'a5549d08';

export default defineComponent({
  setup() {
    const name = ref('hi')

    watch(async () => {
      name.value = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=2cac6eaa')
    })

    return { name }
  }
})

