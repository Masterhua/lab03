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
    text-align: center; /* Center align text */
    margin-top: 50px; /* Add margin to the top */
  }
  
  h1 {
    font-size: 2rem; /* Increase font size for the heading */
    color: #333; /* Darker color for the heading */
  }
  
  p {
    font-size: 1.2rem; /* Increase font size for the paragraph */
    color: #666; /* Lighter color for the paragraph */
  }
  </style>
  