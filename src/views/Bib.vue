<template>
  <div>
    <p>{{ this.$route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "bib",
  data() {
    return {
      bib: ""
    };
  },
  mounted() {
    this.axios
      .get(`http://localhost:3000/bib/${this.$route.params.id}`)
      .then(response => {
        this.bibs = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style></style>
