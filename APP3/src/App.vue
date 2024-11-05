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
  min-height: 100vh;
}

header {
  background-color: #35495e;
  color: white;
  padding: 20px 0;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
}


@media (max-width: 600px) {
  h1 {
    font-size: 2rem; 
  }

  #app {
    margin-top: 30px;
  }
}
</style>

