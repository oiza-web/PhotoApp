<template>
  <div class="background">
    <div class="vh-100 d-flex justify-content-center align-items-center">
      <div>
        <form>
          <div class="input-group">
            <input
              type="text"
              v-model="tag"
              placeholder="Search for any photo"
              aria-describedby="button-addon1"
              class="form-control border-0 bg-light"
            />
            <div class="input-group-append">
              <button
                class="form-control-lg btn btn-success my-2 my-sm-0"
                @click.prevent="search"
                type="submit"
              >
                Search
              </button>
              <!-- <button
                type="submit"
                class="btn btn--primary btn--go"
                @click.prevent="search"
              >
                Go
              </button> -->
            </div>
          </div>
        </form>
        <div class="d-flex">
          <div class="text-white fw-bold ml-2 my-1">Suggested tags:</div>
          <div class="mx-2 my-1">
            <router-link
              :to="{
                name: 'searchResults',
                params: { tag: 'christmas' },
              }"
              >Christmas</router-link
            >
          </div>
          <router-link
            :to="{
              name: 'searchResults',
              params: { tag: 'man' },
            }"
            ><div :value="tag" @click="search" class="my-1">Man</div></router-link
          >
          <router-link
            :to="{
              name: 'searchResults',
              params: { tag: 'dog' },
            }"
            ><div :value="tag" @click="search" class="mx-2 my-1">
              Dog
            </div></router-link
          >
          <router-link
            :to="{
              name: 'searchResults',
              params: { tag: 'cat' },
            }"
            ><div :value="tag" @click="search" class="mx-2 my-1">Cat</div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroCOmponent",
  data() {
    return {
      tag: "",
    };
  },
  methods: {
    search() {
      this.$router.push({ name: "searchResults", params: { tag: this.tag } });
      this.tag = "";
    },
  },
};
</script>

<style scoped>
.background {
  background: url("../assets/images/african-american-business-man.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.form-control {
  height: 50px;
  width: 620px;
}
.btn {
  width: 100px;
  height: 50px;
}

.color {
  color: white;
}
a:active, a:focus, a:hover {
  color: white !important;
  text-decoration: none;
}
@media only screen  and (min-device-width: 320px) 
  and (max-device-width: 480px){
  /* For mobile phones: */
  .form-control{
    width: 150px;
  }
  .btn{
   display: none;
  }
}
</style>
