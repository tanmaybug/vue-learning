<template>
  <div class="toast-container position-fixed bottom-0 end-0 p-3" v-if="visible">
    <div class="toast show bg-danger text-white">
      <div class="toast-header bg-danger text-white">
        <strong class="me-auto">Error</strong>
        <button type="button" class="btn-close btn-close-white" @click="$emit('close')"></button>
      </div>
      <div class="toast-body">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['visible', 'message'])
const emit = defineEmits(['close'])
</script>