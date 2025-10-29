<template>
  <footer class="footer">
    © {{ new Date().getFullYear() }} My App. All rights reserved.
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background-color: #1e1e2f;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
}
</style>