<template>
  <section class="text-center primary-color">
    <h2>View Profile {{userId}}</h2>
    <br/>

    <div class="row">
      <div class="col-md-12">
        <table class="table table-bordered table-striped">
          <tr><th colspan="2">Applicant Details</th></tr>
          <tr>
            <th>Name</th>
            <td>Tanmay</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>1234567890</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>test@gamil.com</td>
          </tr>
          <tr>
            <th>PIN</th>
            <td>71101</td>
          </tr>
          <tr>
            <th>State</th>
            <td>West Bengal</td>
          </tr>
          <tr>
            <th>District</th>
            <td>Howrah</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>23 howrah</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
console.log(userId)
</script>