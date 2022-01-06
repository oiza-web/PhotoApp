<template>
  <div>
    <ErrorToast v-if="error" />
    <h2 class="d-flex justify-content-center my-5" id="browse">
      Browse the Latest Uploads
    </h2>

    <div class="container">
      <div class="row g-3 py-6 mb-5">
        <div
          class="col-xs-12 col-md-6 col-lg-4 col-sm-4"
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

      <LoadingSpinner v-if="loading" />
      <nav class="d-none d-lg-block">
        <ul
          class="pagination"
          total-items="50"
          items-per-page="10"
          max-size="3"
        >
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>

          <li
            class="page-item"
            v-for="(page, i) in pagination.pages"
            :key="`pagination_${i}`"
            @click="fetchRecentPhotos(page)"
            :class="pagination.page == page && 'active'"
          >
            <a class="page-link" href="#">{{ page }}</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import flickr from "../flickr";
import ErrorToast from "../components/ErrorToast.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  name: "recentPhotos",

  components: {
    LoadingSpinner,
    ErrorToast,
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
      pagination: {
        page: 1,
        pages: 0,
        perpage: 0,
        total: 0,
      },
    };
  },

  methods: {
    fetchRecentPhotos() {
      this.loading = true;

      return flickr("photos.getRecent", {
        extras: "url_n, owner_name, description, date_taken, views",
        per_page: 36,
      })
        .then((response) => {
          this.recentPhotos.filter((image) => image.url_n);
          this.recentPhotos = response.data.photos.photo;
          const { pages, page, perpage, total } = response.data.photos;
          this.pagination = {
            page,
            pages,
            perpage,
            total,
          };
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.error = error.message;
          this.error = true || alert(error.message);
        });
    },
  },
};
</script>
<style>
.card-img-top {
  height: 320px !important;
}

.card {
  height: 520px;
}
.error-toast {
  position: relative !important;
  bottom: 0% !important;
}
</style>
