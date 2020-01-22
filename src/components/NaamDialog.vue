<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">Inloggen</v-card-title>
        <v-container fluid>
          Log in om door te gaan.
          <!-- <v-col cols="12" justify="center">
            <v-text-field label="Naam" v-model="naam"></v-text-field>
          </v-col>-->
        </v-container>
        <v-card-actions>
          <img class="login" src="../assets/google.svg" height="50" @click="login()" />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import firebase from "firebase";
var provider = new firebase.auth.GoogleAuthProvider();
export default {
  name: "NaamDialog",
  computed: {
    dialog() {
      return !this.$store.state.user.loggedIn;
    }
  },
  data() {
    return {
      naam: ""
    };
  },
  methods: {
    setNaam() {
      this.$store.dispatch("setNaam", this.naam);
    },
    login() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
          console.log(token); //dit nog opslaan indien nodig voor verder gebruik
          this.$store.commit("setLogin", user);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          console.log(errorCode, errorMessage, email, credential);
        });
    }
  }
};
</script>

<style scoped>
.login{
  cursor: pointer;
}
</style>
