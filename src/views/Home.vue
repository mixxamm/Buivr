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
          this.$refs.topProgress.done()
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
