const { createApp } = Vue;

createApp({
    data() {
        return {
          message: 'Hello world!'  
        }
    },
    methods: {

    },
    mounted() {
      axios
        .get('https://url.url')
        .then((response) => {
          console.log(this.response.data) 
        })
    }}
).mount('#app');