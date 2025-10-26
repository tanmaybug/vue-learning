<template>
  <AppLayout>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
      <p>Welcome to your dashboard.</p>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from './layouts/Layout.vue'
export default {
  name: 'DashboardView',
  components: {
    AppLayout,
  }
}
</script>
