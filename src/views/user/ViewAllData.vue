<template>
  <div class="container mt-4">
    <h2>Registration Data List</h2><br/>
    <div v-if="loading" class="text-center my-4">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Sl.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,index) in users" :key="user.id">
          <td>{{ index+1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.username }}</td>
          <td><router-link :to="`/view-profile/${user.id}`"><button class="btn btn-success btn-xs">View</button></router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = response.data
  } catch (error) {
    console.error('Error fetching users:', error)
  }finally {
    loading.value = false
  }
})
</script>

<style>
.table thead tr th{
    background-color: #373764;
    color:aliceblue;
    text-align:center
}
</style>