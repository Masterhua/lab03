<template>
    <div class="not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NotFound',
  });
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2rem;
    color: #333;
  }
  
  p {
    font-size: 1.2rem;
    color: #666;
  }
  </style>
  