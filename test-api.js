import { fetchImages } from './src/api.js';

// Test the fetchImages function
fetchImages('nature', 1)
  .then(response => {
    console.log('API Response:', response.data);
    console.log('Total results:', response.data.results.length);
    console.log('First image:', response.data.results[0]);
  })
  .catch(error => {
    console.error('Error fetching images:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  });