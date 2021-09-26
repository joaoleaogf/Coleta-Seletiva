<template>
  <div class="body">
    <div class="cont">
      <div class="title">
        <h1 class="title-text">Cadastrar Local De Coleta</h1>
      </div>
      <div class="form">
        <div class="campos">
          <div class="infos">
            <label>Nome Completo</label>
            <input v-model="name" type="text" />
          </div>
          <div class="infos">
            <label>Endereço</label>
            <input
              type="text"
              placeholder="Ex:av joão goularte, RIo De Janeiro"
              v-model="address"
              :onbluer="fr()"
            />
          </div>
          <div class="infos" v-if="long">
            <label>Longitude</label>
            <input type="text" :value="long" />
          </div>

          <div v-else class="infos">
            <label>Longitude</label>
            <input type="text" />
          </div>

          <div v-if="lat" class="infos">
            <label>Latitude</label>
            <input type="text" :value="lat" />
          </div>

          <div v-else class="infos">
            <label>Latitude</label>
            <input type="text" />
          </div>
        </div>
        <div class="buttons">
          <button class="button" @click="submit()">
            cadastrar
          </button>
          <button class="button botao-voltar">
            <nuxt-link class="clear-decoration" to="/"> Voltar </nuxt-link>
          </button>
        </div>
      </div>
    </div>
    <footer>
      © Copyright 2021. All Rights Reserved | Todos Os Direitos Reservados.
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: "",
      location: "",
      long: "",
      lat: "",
      api_key: "ca30dd476f544cb994eb81a755471b48",
      name: "",
      response: ""
    };
  },
  methods: {
    async fr() {
      const response = await fetch(
        "https://api.geoapify.com/v1/geocode/search?text=" +
          this.address +
          "&apiKey=" +
          this.api_key,
        {
          method: "GET",
        }
      );
      const response_data = await response.json();
      this.location = response_data;
      this.long = this.location.features[0].geometry.coordinates[1];
      this.lat = this.location.features[0].geometry.coordinates[0];
    },
    async submit() {
      try {
        this.$axios
          .$post("http://localhost:9000/locaisColeta/", {
            name: this.name,
            address: this.address,
            long: this.long,
            lat: this.lat,
          })
          .then((window.location.href = "/"))
          .catch((error) => {
            console.log(error);
          });
      } catch (erro) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.body {
  height: 100vh;
  width: 100%;
  background: #a9ff81;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.cont {
  width: 1350px;
  height: 95%;
  background: url("../components/bg_home.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  width: 500px;
  height: 120px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.title-text {
  font: 70;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-shadow: 0.3em 0.3em 0.4em black;
  font-style: normal;
  color: white;
}
.buttons {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 450px;
}
.button {
  width: 200px;
  margin: 2px;
  height: 50px;
  background: #1eff00;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 9px;
  text-decoration: none;
  box-shadow: 0 0.1em 0.1em 0 white;
  font-family: sans-serif;
  font-size: 30px;
  text-decoration-color: black;
  color: rgb(0, 0, 0);
  line-height: 50px;
}
.botao-voltar {
  color: white;
  background-color: #0000ff;
}
footer {
  background-color: rgb(201, 241, 201);
  font: 15px;
  text-decoration-color: black;
  width: 1350px;
  height: 5%;
  bottom: 0px;
  display: flex;
  justify-content: center;
}

.clear-decoration {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
.form {
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  padding: 20px;
  border-radius: 0px;
}
input {
  margin-bottom: 15px;
  height: 50px;
  width: 400px;
  color: #000000;
  font-size: 30px;
  border: 2px solid rgb(0, 0, 0);
  background-color: transparent;
}

.campos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.infos {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
label {
  font-size: 20px;
}
</style>