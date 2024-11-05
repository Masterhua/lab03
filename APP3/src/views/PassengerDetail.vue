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
      <button @click="handleEdit">Edit</button>
      <div v-if="showMessage" class="flash-message">Your edit is successful!</div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const passenger = ref(null);
    const airline = ref(null);
    const showMessage = ref(false);
    const router = useRouter();

    const fetchPassengerDetails = async (id: string) => {
      try {
        const response = await axios.get(`https://api.instantwebtools.net/v1/passenger/${id}`);
        passenger.value = response.data;
        airline.value = passenger.value.airline[0];
      } catch (error) {
        console.error('Error fetching passenger data:', error);
      }
    };

    const handleEdit = () => {
      showMessage.value = true;
      setTimeout(() => {
        showMessage.value = false;
        router.push({ name: 'HomeView' });
      }, 5000);
    };

    return {
      passenger,
      airline,
      showMessage,
      fetchPassengerDetails,
      handleEdit,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.fetchPassengerDetails(id);
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

.flash-message {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 10px;
}
</style>
