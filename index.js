

Vue.component('productvue',
{
  props: {
    id: Number,
    name: String,
    cost: Number,
    categoryid: Number,
    category: {
      id: Number,
      name: Number
    }
  },
  methods: {
    alertName: function (event) {
      alert(this.name);
    }
    },
}
);


new Vue({
  el: '#app4',
  data() {
    return {
      info: null
    };
  },
  props: {
    currPage: Array,
    currPageNumber: {
      type: Number,
      default: 1
    },
    pageCount: Number

  },
  methods: {
    setSecond: function (event) {
      axios
        .get('http://localhost:62233/api/Products/get/page/2')
        .then(response => (this.currPage = response));

    },
    setPage: function (pageNumber) {
      axios
        .get('http://localhost:62233/api/Products/get/page/' + pageNumber)
        .then(response => (this.currPage = response));

    }

  },
  mounted() {
    axios
      .get('http://localhost:62233/api/Products/get/page/' + this.currPageNumber)
      .then(response => (this.currPage = response));
  },
  created() {
    axios
    axios
      .get('http://localhost:62233/api/Products/count')
      .then(response => (this.pageCount = Math.ceil(response.data / 12)));

  }
})


