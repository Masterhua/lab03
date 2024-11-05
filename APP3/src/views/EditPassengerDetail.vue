<template>
    <div class="edit-passenger-detail">
      <h1>Edit Passenger Details</h1>
      <div>
        <p>ID: {{ passenger._id }}</p>
        <p>Name: {{ passenger.name }}</p>
        <p>Trips: {{ passenger.trips }}</p>
        <button @click="updatePassenger">Edit</button>
      </div>
      <div v-if="flashMessage" class="flash-message">{{ flashMessage }}</div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  
  export default defineComponent({
    data() {
      return {
        passenger: {
          _id: '',
          name: '',
          trips: 0,
        },
        flashMessage: null as string | null,
      };
    },
    async created() {
      const passengerId = this.$route.params.id;
      const response = await axios.get(`https://api.instantwebtools.net/v1/passenger/${passengerId}`);
      this.passenger = response.data;
    },
    methods: {
      async updatePassenger() {
        this.flashMessage = 'Updating passenger details...'; 
  
        setTimeout(() => {
          this.flashMessage = null;
          this.$router.push('/');
        }, 5000);
      },
    },
  });
  </script>
  
  <style scoped>
  .flash-message {
    color: green;
    margin-top: 10px;
  }
  </style>
  