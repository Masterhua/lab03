import axios from 'axios';

const API_URL = 'https://api.instantwebtools.net/v1/passenger';

export const getPassengers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
