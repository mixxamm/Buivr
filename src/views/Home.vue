<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="flex">
      <div class="bib" v-for="bib in bibs" v-bind:key="bib._id">
        <Bib :bib="bib" />
      </div>
    </div>
     <vue-topprogress color="#00bcd4" ref="topProgress"></vue-topprogress>
  </div>
</template>

<script>
// @ is an alias to /src
import Bib from "@/components/Bib.vue";
import { vueTopprogress } from 'vue-top-progress'

export default {
  name: "home",
  components: {
    Bib,
    vueTopprogress
  },
  data() {
    return {
      bibs: []
    };
  },
  mounted() {
    this.$refs.topProgress.start()
    this.axios
      .get(`${this.$store.state.api_ip}/bib`)
      .then(response => {
        const bibs = response.data.map(bib => {
          bib.loading = true;
          return bib;
        });
        this.bibs = bibs;
        this.$refs.topProgress.done()
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
  margin: 16px;
}
.flex {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 80%;
  justify-content: flex-start;
}
@media (orientation: portrait) {
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    max-width: 95%;
    margin: 0 auto;
  }
}
</style>
