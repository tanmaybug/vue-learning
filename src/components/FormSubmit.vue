<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const message = ref('')
const response = ref(null)

const submitForm = async () => {
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      name: name.value,
      email: email.value,
      message: message.value
    })
    response.value = res.data
  } catch (error) {
    console.error('POST failed:', error)
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" placeholder="Name" required />
    <input v-model="email" placeholder="Email" required />
    <textarea v-model="message" placeholder="Message" required></textarea>
    <button type="submit">Send</button>
  </form>

  <div v-if="response">
    <h3>Response:</h3>
    <pre>{{ response }}</pre>
  </div>
</template>