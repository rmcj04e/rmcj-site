<template>
  <div id="app">
    <b-container fluid="sm">
           <b-row>
     <b-col><router-link to="/"><v-icon scale="2" name="home"></v-icon></router-link> <p>Главная</p></b-col>
      <b-col><router-link to="/about"><v-icon scale="2" name="book-open"></v-icon> </router-link> <p>Эбаут ми</p> </b-col>
    </b-row>
    </b-container>
<router-view></router-view>
  <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      title : "rmcj.ru",
      msg: "Моё первое приложение на vue"
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
#app {
   font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color:#fff;
}
body{
}
.bg{
  background: url("https://i.pinimg.com/originals/fd/2f/a1/fd2fa10e71e4629dc754bd6b731aa1cf.gif") no-repeat center center fixed;
  background-size:cover;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  -webkit-filter: blur(7px);
  -moz-filter: blur(7px);
  -o-filter: blur(7px);
  -ms-filter: blur(7px);
  filter: blur(7px);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
#icons-home>a>.fa-icon{
  margin-inline-end: 1rem;
}
#icons-home>a>.fa-icon:hover {
  transform: scale(2);
}
a{
  color:#fff !important;
}
#links-foot {
  padding-top: 1rem;
}

</style>
