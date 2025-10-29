<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<script setup>
import AppHeader from '../components/user/AppHeader.vue'
import AppFooter from '../components/user/AppFooter.vue'
</script>