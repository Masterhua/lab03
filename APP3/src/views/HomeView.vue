<template>
  <div class="home-view">
    <h1>Passenger Management System</h1>
    <h2>Passenger List</h2>
    <ul>
      <li v-for="passenger in passengers" :key="passenger._id" @click="goToDetails(passenger._id)">
        <span>ID: {{ passenger._id }}</span>
        <span>Name: {{ passenger.name }}</span>
        <span>Trips: {{ passenger.trips }}</span>
      </li>
    </ul>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="currentPage < totalPages" @click="nextPage">Next Page</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      passengers: [] as Array<{ _id: string; name: string; trips: number; airline: Array<{ _id: string; name: string }> }>,
      loading: true,
      error: null as string | null,
      currentPage: 1,
      totalPages: 1,
    };
  },
  async created() {
    this.fetchPassengers();
  },
  methods: {
    async fetchPassengers() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${this.currentPage}&size=3`);
        this.passengers = response.data.data;
        this.totalPages = response.data.totalPages;
      } catch (error) {
        this.error = 'Failed to fetch passengers. Please try again later.';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    goToDetails(id: string) {
      if (id) {
        this.$router.push({ name: 'PassengerDetail', params: { id } });
      } else {
        console.error('Invalid passenger ID:', id);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
        this.fetchPassengers();
      }
    },
  },
});
</script>

<style scoped>
.home-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  color: #333;
}

h2 {
  margin-top: 20px;
  font-size: 1.5rem;
  color: #444;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  transition: background-color 0.3s;
}

li:hover {
  background-color: #f1f1f1;
}

.error {
  color: red;
  margin-top: 20px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
