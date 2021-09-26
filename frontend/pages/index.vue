<template>
  <div class="body">
    <div class="cont">
      <div class="title">
        <h1 class="title-text">COLETA SELETIVA</h1>
      </div> 
      <div class="card">
        <p>
          is simply dummy text of the printing and typesetting industry. br
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus 
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div class="buttons">
      <button class="button">
        <nuxt-link to="/form" class="clear-decoration"> cadastrar local </nuxt-link>
      </button>

      <button class="button">
        <nuxt-link to="/table" class="clear-decoration"> ver locais </nuxt-link>
      </button>
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
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
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
  justify-content: space-between;
  margin-top: 50px;
  width: 520px;
}
.button {
  width: 250px;
  height: 50px;
  background: #0f6faf;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 9px;
  text-decoration: none;
  box-shadow: 0 0.1em 0.1em 0 white;
  font-family: sans-serif;
  font-size: 12px;
  text-decoration-color: black;
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
  line-height: 50px;
  font-size: 30px;
}
p {
  color: white;
  line-height: 30px;
  font-size: 20px;
  text-shadow:  0.2em 0.2em 1px rgb(0, 0, 0);
  margin: 20px;
  opacity: 1;

}
.card {
  color: rgb(172, 172, 172);
  display: line;
  justify-content: center;
  align-items: center;
  width: 700px;
  border-radius: 10px;

}

</style>