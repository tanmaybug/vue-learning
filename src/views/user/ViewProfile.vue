<template>
  <section class="text-center primary-color">
    <h2>View Profile {{userId}}</h2>
    <p>We are passionate developers building awesome stuff!</p>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
console.log(userId)
</script>