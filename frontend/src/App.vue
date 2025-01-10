<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Bem-vindo ao seu Vue.js App"/>
  <div id="app" class="container mt-5">
    <h1>Projetos de Engenharia</h1>
    <ProjectForm @update-projects="fetchProjects" />
    <ProjectList :projects="projects" @update-projects="fetchProjects" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import ProjectList from './components/ProjectList.vue';
import ProjectForm from './components/ProjectForm.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  components: { ProjectList, ProjectForm },
    data() {
        return { projects: [] };
    },
    methods: {
        async fetchProjects() {
            const { data } = await axios.get('http://localhost:5000/api/projects');
            this.projects = data;
        }
    },
    mounted() {
        this.fetchProjects();
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
