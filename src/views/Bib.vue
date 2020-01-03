<template>
  <div class="flex">
    <Bib :bib="bib" class="bib" />
  </div>
</template>

<script>
import Bib from "@/components/Bib.vue";
export default {
  components: {
    Bib
  },
  name: "bib",
  data() {
    return {
      bib: {}
    };
  },
  mounted() {
    this.axios
      .get(`${this.$store.state.api_ip}/bib/${this.$route.params.id}`)
      .then(response => {
        this.bib = response.data;
        console.log(response.data);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
.bib {
  margin: 16px auto;
}
.flex {
  display: flex;
  justify-content: center;
}
.kolom {
  display: flex;
  justify-content: space-between;
}
</style>
