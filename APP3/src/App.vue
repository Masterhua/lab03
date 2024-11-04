<template>
  <div id="app">
    <header>
      <h1>Passenger Management System</h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
/* Global styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh; /* Make sure the content takes at least the full viewport height */
}

header {
  background-color: #35495e; /* Dark background color for header */
  color: white; /* White text color for better contrast */
  padding: 20px 0; /* Add padding to the header */
}

h1 {
  margin: 0; /* Remove default margin from the heading */
  font-size: 2.5rem; /* Increase font size for the heading */
}

/* Responsive design */
@media (max-width: 600px) {
  h1 {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }

  #app {
    margin-top: 30px; /* Reduce margin on smaller screens */
  }
}
</style>

