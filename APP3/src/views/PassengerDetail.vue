<template>
  <div class="passenger-detail">
    <h1>Passenger Details</h1>
    <ul>
      <li v-for="passenger in paginatedPassengers" :key="passenger._id">
        <span>ID: {{ passenger._id }}</span>
        <span>Name: {{ passenger.name }}</span>
        <span>Trips: {{ passenger.trips }}</span>
      </li>
    </ul>
    <button @click="nextPage" :disabled="!hasNextPage">Next Page</button>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      passengers: [] as Array<{ _id: string; name: string; trips: number }>,
      currentPage: 1,
      pageSize: 3,
      error: null as string | null,
    };
  },
  async created() {
    const id = this.$route.params.id;
    try {
      const response = await axios.get(`https://api.instantwebtools.net/v1/passenger/${id}`);
      this.passengers = response.data.data || [];  // 确保 passengers 是一个数组
    } catch (error) {
      console.error('Error fetching passenger data:', error);
      this.error = 'Failed to load passenger details.';
    }
  },
  computed: {
    paginatedPassengers() {
      if (Array.isArray(this.passengers)) {
        return this.passengers.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
      }
      return [];
    },
    hasNextPage() {
      return Array.isArray(this.passengers) && this.currentPage * this.pageSize < this.passengers.length;
    }
  },
  methods: {
    nextPage() {
      if (this.hasNextPage) {
        this.currentPage++;
      }
    }
  }
});
</script>

<style scoped>
.passenger-detail {
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  margin-top: 20px;
}
</style>
