
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
        },
        pageCount: Number

    },
    methods: {
        setSecond: function(event)
        {
            axios
            .get('https://localhost:5001/api/Products/get/page/2')
            .then(response => (this.currPage= response));
            
        },
        setPage: function(pageNumber)
        {
            axios
            .get('https://localhost:5001/api/Products/get/page/'+pageNumber)
            .then(response => (this.currPage= response));

        }
    },
    mounted() {
      axios
        .get('https://localhost:5001/api/Products/get/page/'+this.currPageNumber)
        .then(response => (this.currPage= response));
    },
    created(){
        axios
        axios
        .get('https://localhost:5001/api/Products/count')
        .then(response => (this.pageCount = Math.ceil(response.data / 12)));

    }
  })
var app5 = new Vue({
    el: '#app5',
    data(){
        return{
            pages: 1
        };
    },
    mounted(){
        axios
        .get('https://localhost:5001/api/Products/count')
        .then(response => (this.pages = response.data / 12));
    }
})

