<template>
  <div>
    <h1 class="display-1">Scan een QR-code van een bib.</h1>
    <p class="error">{{ error }}</p>
    <qrcode-stream
      @decode="onDecode"
      @init="onInit"
      style="max-width: 400px; margin: 0 auto;"
    ></qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  name: "account",
  components: {
    QrcodeStream
  },
  data() {
    return {
      code: "",
      error: ""
    };
  },
  methods: {
    onDecode(decodedString) {
      this.code = decodedString;
      this.$router.push({ name: "bib", params: { id: this.code } });
    },
    async onInit(promise) {
      try {
        this.$insProgress.start()
        await promise;
        this.$insProgress.finish()
      } catch (error) {
        this.$insProgress.finish()
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: je moet toegang geven tot de camera.";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: dit toestel heeft geen camera.";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: beveiligde verbinding vereist.";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: camera al in gebruik door andere app.";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    }
  }
};
</script>

<style scoped>
h1{
  text-align: center;
}
</style>
