<template>
  <div>
    <h2 class="d-flex justify-content-center my-5">Browse the Latest Uploads</h2>

    <div class="container">
      <div class="row g-3 py-6 mb-5">
        <div
          class="col-xs-12 col-sm-4"
          v-for="image in recentPhotos"
          :key="image.id"
          :image="image"
        >
          <div class="card">
            <div class="card-image-wrapper">
              <img
                :src="image.url_n"
                class="img-fluid card-img-top"
                :alt="image.description"
              />
            </div>
            <div class="card-body">
              <h6 class="card-title">
                {{ image.title }}
              </h6>
              <p class="card-text">By : {{ image.ownername }}</p>
              <p class="card-text">Views : {{ image.views }}</p>
              <router-link
                :to="{
                  name: 'photoDetails',
                  params: { id: image.id, secret: image.secret },
                }"
              >
                <a href="#" class="btn btn-primary">View Image</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <ErrorToast />
      <LoadingSpinner v-if="loading" />
      <!-- <div class="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" v-if="firstPaginatorNumber >= 1" @click="handlePrevClick(firstPaginatorNumber-1)"  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" @click="fetchRecentPhotos(1)" >{{firstPaginatorNumber}}</a></li>
            <li class="page-item"><a class="page-link" @click="fetchRecentPhotos(2)" >{{secondPaginatorNumber}}</a></li>
            <li class="page-item"><a class="page-link" @click="fetchRecentPhotos(3)" >{{thirdPaginatorNumber}}</a></li>
            <li class="page-item">
              <a class="page-link" @click="handleNextClick(thirdPaginatorNumber+1)"  aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
  </div> -->
    </div>
  </div>
</template>

<script>
import flickr from "../flickr";
import ErrorToast from "../components/ErrorToast.vue"
import LoadingSpinner from "../components/LoadingSpinner.vue";
// import Pagination from "../components/Pagination.vue";
export default {
  name: "recentPhotos",

  components: {
    // Pagination,
    LoadingSpinner,
    ErrorToast
  },
  created() {
    this.fetchRecentPhotos();
  },
  data() {
    return {
      recentPhotos: [],
      loading: false,
      error: false,
      errorMessage: null,
      // firstPaginatorNumber: 1,
      // secondPaginatorNumber: 2,
      // thirdPaginatorNumber: 3
    };
  },

  methods: {
    fetchRecentPhotos() {
      this.loading = true;

      return flickr("photos.getRecent", {
        extras: "url_n, owner_name, description, date_taken, views",
        page: 1,
        per_page: 9,
      })
        .then((response) => {
          this.recentPhotos = response.data.photos.photo;
          this.loading = false;
          
        })
        .catch((error) => {
          this.loading = false;
          console.log("Error occured: ", error.message);
        });
    },
    // incrementPaginatorNumbers(pageNumber) {
    //   if(pageNumber - this.firstPaginatorNumber > 2) {
    //     this.firstPaginatorNumber++
    //   }
    //   if(pageNumber - this.secondPaginatorNumber > 1) {
    //     this.secondPaginatorNumber++
    //   }
    //   if(pageNumber - this.thirdPaginatorNumber > 0 ) {
    //     this.thirdPaginatorNumber++
    //   }
    // },
    // decreasePaginatorNumbers(pageNumber) {
    //   if(this.thirdPaginatorNumber - pageNumber > 2) {
    //     this.firstPaginatorNumber--
    //   }
    //   if(this.secondPaginatorNumber - pageNumber > 1) {
    //     this.secondPaginatorNumber--
    //   }
    //   if(this.thirdPaginatorNumber - pageNumber > 0 ) {
    //     this.thirdPaginatorNumber--
    //   }
    // },
    // handleNextClick(pageNumber) {
    //   this.incrementPaginatorNumbers(pageNumber);
    //   this.fetchRecentPhotos(pageNumber);
    // },
    // handlePrevClick(pageNumber) {
    //   this.decreasePaginatorNumbers(pageNumber);
    //   this.fetchRecentPhotos(pageNumber);
    // },

  },
  computed:{
    cleanImages() {
      return this.recentPhotos.filter((image) => image.url_n);
    },
  }
};
</script>
<style>
.card-img-top {
  height: 320px !important;
}

.card {
  height: 520px;
}
</style>
