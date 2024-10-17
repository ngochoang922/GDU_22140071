const { createApp } = Vue;

createApp({
    data() {
        return {
            product: {
                name: '',
                price: 0
            },
            products: [],
            searchQuery: '',
            editIndex: null
        };
    },
   
}).mount('#app');
