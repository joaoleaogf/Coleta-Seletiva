<template>
  <div>
    <div class="body">
      <div class="cont">
        <div class="sr">
          <input type="text" placeholder="   ex: Bernardo" v-model="search" />
          <div class="cbo">
            <button @click="fr()" class="bo">filtrar</button>
          </div>
        </div>
        <div class="tab">
        <div class="card">
          <table v-if="filtered">
            <tr>
              <td>
                NOME:
              </td>
              <td>
                ENDEREÇO:
              </td>
              <td>
                LONGITUDE:
              </td>
              <td>
                LATITUDE:
              </td>
            </tr>
            <tr :key="index" v-for="(user, index) in users">
              <td>
                {{ user.name }}
              </td>
              <td>
                {{ user.address }}
              </td>
              <td>
                {{ user.long }}
              </td>
              <td>
                {{ user.lat }}
              </td>
              <td >
                <img src="../components/delete.png" @click="dl(user._id)" >
              </td>
            </tr>
          </table>
          <table v-else>
                        <tr>
              <td>
                NOME:
              </td>
              <td>
                ENDEREÇO:
              </td>
              <td>
                LONGITUDE:
              </td>
              <td>
                LATITUDE:
              </td>
            </tr>
            <tr :key="index" v-for="(user, index) in users">
              <td>
                {{ user.name }}
              </td>
              <td>
                {{ user.address }}
              </td>
              <td>
                {{ user.long }}
              </td>
              <td>
                {{ user.lat }}
              </td>
              <td @click="dl( user._id )">
                <img src="../components/delete.png"  >
              </td>
            </tr>
          </table>
          <h1 v-if="submited === true && filtered.length === 0">
            {{ msgerror }}
          </h1>
        </div>
        </div>
      </div>
      <footer>
        © Copyright 2021. All Rights Reserved | Todos Os Direitos Reservados.
        <button class="button botao-voltar">
          <nuxt-link class="clear-decoration" to="/"> home-page </nuxt-link>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: "",
      search: "",
      filtered: "",
      msgerror: "local não cadastrado!",
      submited: false,
    };
  },
  mounted() {
    this.fr();
  },

  methods: {
    async fr() {
      this.$axios.$get('http://localhost:9000/locaisColeta/' + this.search
      ).then( response =>(this.users = response)
      ).catch(err => {
        console.log(err.response);
      });
    },
    async dl(args){
      this.$axios.$delete('http://localhost:9000/locaisColeta/'+ args
      ).then( response =>(console.log(response),
        this.fr()
        )
      )
    }
  },
};
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background: #a9ff81;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
footer {
  background-color: rgb(201, 241, 201);
  font: 15px;
  text-decoration-color: black;
  width: 1350px;
  height: 5%;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.card {
  background-color: #ccc;
  width: 100%;
  border-radius: 10px;
  border: solid white 2px;
  display: grid;
  align-content: center;
}
.tab {
  width: 55%;
  height: 80%;
}
table {
  width: 100%;

}
td {
  border: 1px solid black;
  line-height: 25px;
  font-size: 18px;
  text-align: center;
}
.sr {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.cbo {
  height: 100px;
  display: flex;
  align-items: center;
}
input {
  height: 40px;
  line-height: 40px;
  font-size: 25px;
  border-radius: 15px;
  justify-content: center;
}
.bo {
  height: 30px;
  background-color: #1eff00;
  width: 75px;
  margin-left: 15px;
  border-radius: 30px;
  line-height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  color: white;
  background-color: #0000ff;
  width: 170px;
  height: 40px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 9px;
  text-decoration: none;
  box-shadow: 0 0.1em 0.1em 0 rgb(143, 142, 142);
  font-family: sans-serif;
  font-size: 25px;
  text-decoration-color: black;
  color: rgb(0, 0, 0);
  line-height: 40pxc\;;
}
.clear-decoration {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
img {
  height: 20px;
}
</style>
