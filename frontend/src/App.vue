<template>
  <!-- <div id="logo">
    <img alt="wmf logo" src="./assets/logow.png" />
  </div> -->
  
  <HelloWorld v-if="showHelloWorld" msg="Bem-vindo ao seu Vue.js App" />
  <div class="container mt-5">
    <AppHeader  />
    <h1>Projetos de Engenharia</h1>
    <ProjectForm @update-projects="fetchProjects" /><br />
    <ProjectList :projects="projects" @update-projects="fetchProjects" />
    <AppFooter  />
  </div>
</template>

<script>
  import axios        from 'axios';
  import AppHeader    from './components/AppHeader.vue';
  import ProjectList  from './components/ProjectList.vue';
  import ProjectForm  from './components/ProjectForm.vue';
  import AppFooter    from './components/AppFooter.vue';

  export default {
    name: 'App',
    components: {
      AppHeader,
      ProjectList,
      ProjectForm,
      AppFooter
    },
    data() {
      return { projects: [] };
    },
    methods: {
      async fetchProjects() {
        try {
          const { data } = await axios.get('http://localhost:5000/api/projects');
          this.projects = data;
        } catch (error) {
          console.error('Erro ao buscar os projetos:', error);
          alert('Erro ao carregar os projetos!');
        }
      }
    }
  }
</script>

<style>

body {
    background-color: #a5a4a4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

