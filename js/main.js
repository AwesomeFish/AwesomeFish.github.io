const app = Vue.createApp({
  data() {
    return {
      items: [],
      newItem: {
        name: '',
        profilePicture: '',
        description: '',
        date: new Date().toLocaleDateString()
      }
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
  },
  methods: {
    addItem() {
      // Add new item to array and clear form
      this.items.push(this.newItem);
      this.newItem = {
        name: '',
        profilePicture: '',
        description: '',
        date: new Date().toLocaleDateString()
      };
      // Update JSON file
      const json = JSON.stringify(this.items, null, 2);
      const json = JSON.stringify(this.items, null, 2);
            fetch('data.json', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: json
            })
              .then(response => {
                console.log(response);
                alert('Item added successfully!');
              })
              .catch(error => console.error(error));
          }
        }
      });

      app.mount('#app');
