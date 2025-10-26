<template>
  <form @submit.prevent="submitForm" class="p-4 border rounded bg-light">
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input v-model="name" type="text" class="form-control" placeholder="Enter your name" required />
      <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
    </div>

    <div class="mb-3">
      <label class="form-label">Email</label>
      <input v-model="email" type="email" class="form-control" placeholder="Enter your email" required />
      <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
    </div>

    <div class="mb-3">
      <label class="form-label">Message</label>
      <textarea v-model="message" class="form-control" rows="4" placeholder="Your message" required></textarea>
      <div v-if="errors.message" class="text-danger">{{ errors.message }}</div>
    </div>

    <button type="submit" class="btn btn-primary">Send</button>
  </form>
  <SuccessModal
      :visible="showModal"
      :message="successMessage"
      @close="showModal = false"
    />
  <ErrorToast :visible="showError" :message="errorMessage" @close="showError = false" />
  <div v-if="response" class="mt-4 alert alert-success">
    <h5>Response:</h5>
    <pre>{{ response }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validateContactForm } from '../utils/formValidator'
import { postData } from '../services/apiService.js'
import SuccessModal from '../components/SuccessModal.vue'
import ErrorToast from '../components/ErrorToast.vue'

const name = ref('')
const email = ref('')
const message = ref('')
const response = ref(null)
const errors = ref({})
const showModal = ref(false)
const successMessage = ref('')

const showError = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  errors.value = validateContactForm({ name: name.value, email: email.value, message: message.value })

  if (Object.keys(errors.value).length === 0) {
    try {
      const res = await postData('/post', {
        name: name.value,
        email: email.value,
        message: message.value
      })
      response.value = res.data
      successMessage.value = 'Form submitted successfully!'
      showModal.value = true
    } catch (error) {
      console.error('POST failed:', error)
      errorMessage.value = 'Form submission failed. Please try again.'
      showError.value = true
      setTimeout(() => {
        showError.value = false
      }, 4000)
    }
  }
}
</script>