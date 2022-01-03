<template>
  <div>
    <h2 class="centered">Browse the Latest Uploads</h2>

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
              <h5 class="card-title">
                {{ image.title }}
              </h5>
              <p class="card-text">By : {{ image.ownername }}</p>
              <p class="card-text">Views : {{ image.views }}</p>
              <a href="#" class="btn btn-primary">View Image</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flickr from "../flickr";

export default {
  name: "recentPhotos",
  created() {
    this.fetchRecentPhotos();
  },
  data() {
    return {
      recentPhotos: [],
    };
  },

  methods: {
    fetchRecentPhotos() {
      return flickr("photos.getRecent", {
        extras: "url_n, owner_name, description, date_taken, views",
        page: 1,
        per_page: 9,
      })
        .then((response) => {
          this.recentPhotos = response.data.photos.photo;
        })
        .catch((error) => {
          console.log("Error occured: ", error);
        });
    },
  },
};
</script>
