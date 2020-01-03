<template>
  <div>
    <h1 class="display-3">Leer nieuwe vaardigheden. Boost je carrière.</h1>
    <div class="nieuw">
      <h2 class="headline">Nieuw</h2>
      <div class="flex">
        <div v-for="college in colleges" v-bind:key="college._id">
          <College
            :link="college.link"
            :titel="college.titel"
            :beschrijving="college.beschrijving"
            :color="college.color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import College from "@/components/College.vue";
export default {
  components: {
    College
  },
  name: "colleges",
  data() {
    return {
      colleges: []
    };
  },
  mounted() {
    this.axios
      .get(`${this.$store.state.api_ip}/college`)
      .then(response => {
        this.colleges = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 16px;
}
.nieuw {
  max-width: 80%;
  margin: 40px auto;
}
.flex {
  display: flex;
  overflow-x: auto;
}
.flex::-webkit-scrollbar {
    display: none;
}
</style>