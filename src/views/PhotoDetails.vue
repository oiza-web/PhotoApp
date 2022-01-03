<template>
  <div>
    <div class="container">
      <div class="row g-3 py-6 mb-5">
        <div class="col-xs-12 col-sm-4">
          <div class="card">
            <div class="card-image-wrapper">
              <img
                
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">
               5555
              </h5>
              <p class="card-text">By :Oiza</p>
              <p class="card-text">Views : 3</p>
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
  mounted() {
    console.log(this.$route.params.id,this.$route.params.secret )
    this.fetchPhotoInfo({
      id: this.$route.params.id,
      secret: this.$route.params.secret,
    });
  },
  methods:{
    fetchPhotoInfo() {
    console.log('I got here getone')
    return flickr("photos.getInfo", {
      photo_id: this.id,
      secret: this.secret,
      extras: "url_n, owner_name, description, date_taken, views",
      page: 10,
      per_page: 15,
    }).then((response) => {
      this.images = response.data.photos.photo;
    });
  },
  }
};
</script>
