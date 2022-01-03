<template>
  <div class="background">
    <div class="vh-100 d-flex justify-content-center align-items-center">
  <div>
    <form class="searchbar">
      <label>
        <span class='screen-reader-only'>Search:</span>
        <input
          v-model="tag"
          placeholder="Search for photos"
          type="text"
          class="searchbar-input">
      </label>
      <button
        type="submit"
        class="btn btn--green btn--go"
        @click.prevent="search">
          Go
      </button>
    </form>
    
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'HeroCOmponent',
  data() {
    return {
      tag: '',
    };
  },
  methods: {
    search() {
      this.$router.push({ name: 'searchResults', params: { tag: this.tag } });
      this.tag = '';
    },
  },
}
</script>

<style scoped>
.background{
  background: url('../assets/images/african-american-business-man.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>