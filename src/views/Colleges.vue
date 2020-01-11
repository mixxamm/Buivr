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
    <div class="categorie" v-for="categorie in categorien" v-bind:key="categorie">
      <h2 class="headline">{{categorie}}</h2>
      <div class="flex">
        <div v-for="college in collegesFilter(categorie)" v-bind:key="college._id">
          <College
            :link="college.link"
            :titel="college.titel"
            :beschrijving="college.beschrijving"
            :color="college.color"
          />
        </div>
      </div>
    </div>
    <img src="../assets/colleges.svg" id="colleges-img" />
    <p class="body-1">
      Begin met leren en bouw jouw beste toekomst,
      <span>vandaag</span>.
    </p>
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
      colleges: [],
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
  },
  computed: {
    categorien: function() {
      const categorien = this.colleges
        .filter(college => college.categorie !== undefined)
        .map(college => college.categorie);
      return [...new Set(categorien)];
    }
  },
  methods: {
      collegesFilter: function(categorie) {
      const filtered = this.colleges.filter(
        college => college.categorie == categorie
      );
      return filtered;
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 65px 16px;
}
.nieuw,
.categorie {
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
#colleges-img {
  max-width: 500px;
  margin: 0 auto;
  display: block;
}

.body-1 {
  text-align: center;
}
span {
  color: #ffc107;
  font-weight: bold;
}
@media (max-width: 600px) {
  .nieuw,
  .categorie {
    max-width: 100%;
  }
  h2 {
    margin-left: 25px;
  }
  #colleges-img {
    max-width: 80%;
  }
}
</style>