<template>
  <section class="container mt-5">
    <h2 class="mb-4">Contact Us</h2>
    <form @submit.prevent="submitForm" novalidate>
      <div class="row">
        <div class="col-md-6">
          <label for="name" class="form-label">Name</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.name }"
            id="name"
            required
          />
          <div class="invalid-feedback">{{ errors.name }}</div>
        </div>

        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
            id="email"
            required
          />
          <div class="invalid-feedback">{{ errors.email }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="message" class="form-label">Message</label>
          <textarea
            v-model="message"
            class="form-control"
            :class="{ 'is-invalid': errors.message }"
            id="message"
            rows="4"
            required
          ></textarea>
          <div class="invalid-feedback">{{ errors.message }}</div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { validateContactForm } from '../utils/formValidator'

const name = ref('')
const email = ref('')
const message = ref('')
const errors = ref({})

function submitForm() {
  const result = validateContactForm({
    name: name.value,
    email: email.value,
    message: message.value
  })

  errors.value = result

  if (Object.keys(result).length === 0) {
    console.log('Form submitted:', { name: name.value, email: email.value, message: message.value })
    // Proceed with backend call or reset
  }
}
</script>