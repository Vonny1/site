
var app4 =   new Vue({
    el: '#app4',
    data() {
      return {
        info: null
      };
    },
    props:{
        currPage: Array,
        currPageNumber:{
            type:Number,
            default:1
        }
    },
    methods: {
        getPage(number)
        {
            axios
            .get('https://localhost:5001/api/Products/get/page/${number}')
            .then(response => (this.info = response));
        }

    },
    mounted() {
      axios
        .get('https://localhost:5001/api/Products/get/page/1')
        .then(response => (this.info= response));
    }
  })
var app5 = new Vue({
    el: '#app5',
    data(){
        return{
            pages: 10
        };
    },
    mounted(){
        axios
        .get('https://localhost:5001/api/Products/count')
        .then(response => (this.pages = response.data / 12));
    }
})

