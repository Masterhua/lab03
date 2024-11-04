<template>
    <div>
      <h1>Airline Details</h1>
      <div v-if="airline">
        <p>ID: {{ airline._id }}</p>
        <p>Name: {{ airline.name }}</p>
        <p>Country: {{ airline.country }}</p>
        <p>Logo: <img :src="airline.logo" alt="Airline Logo" /></p>
        <p>Slogan: {{ airline.slogan }}</p>
        <p>Headquarters: {{ airline.head_quaters }}</p>
        <p>Website: <a :href="`https://${airline.website}`" target="_blank">{{ airline.website }}</a></p>
        <p>Established: {{ airline.established }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    data() {
      return {
        airline: null as {
          _id: string;
          name: string;
          country: string;
          logo: string;
          slogan: string;
          head_quaters: string;
          website: string;
          established: string;
        } | null,
      };
    },
    async created() {
      const airlineId = this.$route.params.airlineId;
      try {
        const response = await axios.get(`https://api.instantwebtools.net/v1/airlines/${airlineId}`);
        this.airline = response.data;
      } catch (error) {
        if (error.response && error.response.status === 404) {
          this.$router.push({ name: 'NotFound' });
        }
      }
    },
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  