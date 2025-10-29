<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="logo1"><img :src="logo" alt="Logo" class="me-2" height="40" /></router-link>
      <div class="links">
        <router-link to="/admin">Dashboard</router-link>
        <router-link to="/">User Panel</router-link>
      </div>
    </nav>
  </header>
</template>



<script>
import logo from '../../assets/logo.png'

export default {
  name: 'AppHeader',
  data() {
    return {
      logo
    }
  }
}
</script>


<style scoped>
.header {
  background-color: #1e2f23;
  padding: 1rem;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00bcd4;
  text-decoration: none;
}

.links a {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.links a:hover {
  color: #00bcd4;
}
</style>
