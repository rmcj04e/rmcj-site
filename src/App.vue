<template>
  <div id="app">
    
     <b-navbar toggleable="sm" fixed="top" variant="dark" type="dark">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
       <b-navbar-brand href="#">{{title}}</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav>
        <b-nav-item to="/links">Ссылки</b-nav-item>
        <b-nav-item to="/about">Обо мне</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
       </b-navbar>
       <b-jumbotron id="mainjumbo">
        <b-container fluid="sm">
      <p>Евгений Горюнов ака rmcj</p>
      <p>{{date}}</p>
     <transition name="fade"> <router-view></router-view> </transition>
        </b-container>
       </b-jumbotron>
  
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      title : "rmcj.ru",
      date: new Date(),
      msg: "Моё первое приложение на vue"
    }
  },
  methods:{
    updDate(){
      this.date = new Date()
    }
  },
  mounted(){
    setInterval(() => { this.updDate();},500)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
#mainjumbo{
  background:rgba(255,255,255,0.8)
}
#wrapper{
  padding-top: 1rem;
}
</style>
