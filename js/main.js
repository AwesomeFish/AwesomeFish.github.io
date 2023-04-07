
const app = Vue.createApp({
    data() {
      return {
        items: []
      }
    },
    mounted() {
      // Load data from JSON file
      fetch('data.json')
        .then(response => response.json())
        .then(data => {
          this.items = data;
        })
        .catch(error => console.error(error));
    }
  });
  app.mount('#app');
