
var app4 =   new Vue({
    el: '#app4',
    data() {
      return {
        info: null
      };
    },
    mounted() {
      axios
        .get('https://localhost:5001/api/Products/get/id/1')
        .then(response => (this.info = response));
    }
  })
  
