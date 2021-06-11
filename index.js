
Vue.component('productvue',
  {
    props: {
      productobj: Object
    },
    methods: {
      alertName: function (event) {
        alert(this.productobj.name);
      },
      DeleteButton(){
        this.$emit('deleteclicked', this.productobj)
      }
    },
  }
);
Vue.component('test',
{
  props:{
    producttest: Object
  },
  template:
  `
  <h4>{{producttest.name}}</h4>
  `
})
Vue.component("modal", {
  template: "#modal-template"
});
Vue.component('productmodaledit',
  {
    props: {
      productmodalobj: Object
    },
    template:
      `
      <div class="editmodalcont">
      <div class="modal " id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-modal="true" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="editModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
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
Vue.component('productmodaldelete',
{
  props:{
    deleteProduct:Object
  },
  template:
  `
  <div class="modalcont">
  <div class="modal " id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-modal="true" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="deleteModalLabel">Удаление</h5>
                  <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              {{currentProduct.name}}
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-danger">Удалить</button>
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
  data: {
    showModal: false
  },
  props: {
    currPage: Array,
    currPageNumber: {
      type: Number,
      default: 1
    },
    currentProduct:Object,
    pageCount: Number

  },
  mounted()
  {
    this.currentProduct={
      name:"test"
    }
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
    onclickdelete:function(value){
      this.currentProduct=value;
      // alert(this.currentProduct.name);
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


