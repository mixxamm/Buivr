<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="flex">
      <div class="bib" v-for="bib in bibs" v-bind:key="bib._id">
        <Bib :bib="bib" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Bib from "@/components/Bib.vue";

export default {
  name: "home",
  components: {
    //HelloWorld
    Bib
  },
  data() {
    return {
      bibs: [],
      loading: true
    };
  },
  mounted() {
    this.axios
      .get(`http://192.168.43.97:3000/bib`)
      .then(response => {
        const bibs = response.data.map(bib => {
          bib.loading = true;
          return bib;
        });
        this.bibs = bibs;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    load(bib) {
      console.log(bib);
      //bib.loading = false;
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
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
@media (orientation: portrait) {
  .flex {
    display: flex;
    flex-direction: column;
  }
}
</style>
