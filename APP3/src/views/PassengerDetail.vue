<template>
  <div class="passenger-detail">
    <h1>Passenger Details</h1>
    <div v-if="passenger">
      <div>ID: {{ passenger._id }}</div>
      <div>Name: {{ passenger.name }}</div>
      <div>Trips: {{ passenger.trips }}</div>
      <h2>Airline Details</h2>
      <div v-if="airline">
        <div>ID: {{ airline._id }}</div>
        <div>Name: {{ airline.name }}</div>
        <div>Country: {{ airline.country }}</div>
        <div>Logo: <img :src="airline.logo" alt="Airline Logo" /></div>
        <div>Slogan: {{ airline.slogan }}</div>
        <div>Headquarters: {{ airline.head_quaters }}</div>
        <div>Website: <a :href="`https://${airline.website}`" target="_blank">{{ airline.website }}</a></div>
        <div>Established: {{ airline.established }}</div>
      </div>
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
      passenger: null as null | {
        _id: string;
        name: string;
        trips: number;
        airline: Array<{
          _id: string;
          name: string;
          country: string;
          logo: string;
          slogan: string;
          head_quaters: string;
          website: string;
          established: string;
        }>;
      },
      airline: null as null | {
        _id: string;
        name: string;
        country: string;
        logo: string;
        slogan: string;
        head_quaters: string;
        website: string;
        established: string;
      },
    };
  },
  async created() {
    const id = this.$route.params.id;
    await this.fetchPassengerDetails(id);
  },
  methods: {
    async fetchPassengerDetails(id: string) {
      try {
        const response = await axios.get(`https://api.instantwebtools.net/v1/passenger/${id}`);
        this.passenger = response.data;
        this.airline = this.passenger.airline[0];
      } catch (error) {
        console.error('Error fetching passenger data:', error);
      }
    },
  },
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

.passenger-item {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}
</style>
