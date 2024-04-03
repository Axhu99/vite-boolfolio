<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectsList },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        console.log(res.data);

        this.projects = res.data;
      })
    }
  },
  created() {
    this.fetchProjects();
  }
};
</script>

<template>
  <AppHeader />
  <main class="container pt-3">
    <h1>Boolfolio</h1>
    <ProjectsList :projects="projects" />
  </main>
</template>

<style></style>