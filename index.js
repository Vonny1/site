
Vue.component('productvue',
  {
    // props: {
    //   id: Number,
    //   name: String,
    //   cost: Number,
    //   categoryid: Number,
    //   category: {
    //     id: Number,
    //     name: Number
    //   }
    // },
    props: {
      productobj: Object

    },
    methods: {
      alertName: function (event) {
        alert(this.productobj.name);
      },
      onclickbutton(event){
        this.$emit('clicked', this.productobj)
      }
    },
  }
);
Vue.component('productmodal',
  {
    props: {
      productmodalobj: Object
    },
    template:
      `
      <div class="modalcont">
      <div class="modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      {{productobj.name}}
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
              </div>
          </div>
      </div>
  </div>

  `
  }
)


new Vue({
  el: '#app4',
  data() {
    return {
      currentproduct: {}
    };
  },
  data:{
    currentProduct:{}
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
        .get('https://localhost:5001/api/Products/get/page/2')
        .then(response => (this.currPage = response));

    },
    setPage: function (pageNumber) {
      axios
        .get('https://localhost:5001/api/Products/get/page/' + pageNumber)
        .then(response => (this.currPage = response));

    },
    onclickchild(value){
      currentProduct = value
    }


  },
  mounted() {
    axios
      .get('https://localhost:5001/api/Products/get/page/' + this.currPageNumber)
      .then(response => (this.currPage = response));
  },
  created() {
    axios
      .get('https://localhost:5001/api/Products/count')
      .then(response => (this.pageCount = Math.ceil(response.data / 12)));

  }
})


