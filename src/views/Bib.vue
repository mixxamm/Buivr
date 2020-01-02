<template>
  <div>
    <Bib :bib="bib" />
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
      .get(`http://192.168.43.97:3000/bib/${this.$route.params.id}`)
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

<style></style>
