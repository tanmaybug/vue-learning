<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<script setup>
import AppHeader from '../components/admin/AppHeader.vue'
import AppFooter from '../components/admin/AppFooter.vue'
</script>