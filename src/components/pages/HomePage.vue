<script>
import ProjectsList from '../projects/ProjectsList.vue';
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
export default {
    name: 'HomePage',
    components: { ProjectsList },
    data: () => ({ projects: [], isLoading: false }),
    methods: {
        fetchProjects() {
            this.isLoading = true;
            axios.get(endpoint).then(res => {
                console.log(res.data);
                this.projects = res.data;
            }).catch(err => {
                console.error(err);
            }).then(() => {
                this.isLoading = false;
            })
        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <h1>Boolfolio</h1>
    <AppLoader v-if="isLoading" />
    <ProjectsList v-else :projects="projects" />

</template>

<style></style>