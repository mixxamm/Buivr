<template>
  <div class="text-center">
    <div v-if="!this.$store.state.user.loggedIn">
      <h1 class="display-1">Login</h1>
      <v-btn @click="login()">Login</v-btn>
    </div>
    <div v-else>
      <h1>Welkom terug, {{this.$store.state.user.data.displayName}}</h1>
      <img :src="this.$store.state.user.data.photoURL">
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
var provider = new firebase.auth.GoogleAuthProvider();
export default {
  methods: {
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
          this.$router.go(-1);
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

<style>
</style>