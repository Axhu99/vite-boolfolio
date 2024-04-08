<script>
import axios from 'axios';
import AppLoader from '../AppLoader.vue';
import ProjectCard from '../projects/ProjectCard.vue';
const defaultEndpoint = 'http://127.0.0.1:8000/api/projects/';
export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard, AppLoader },
    data: () => ({
        project: null,
        isLoading: false
    }),
    methods: {
        getPost() {
            this.isLoading = true;
            axios.get(defaultEndpoint + this.$route.params.id)
                .then(res => {
                    this.project = res.data;
                })
                .catch(err => { console.error(err) })
                .then(() => {
                    this.isLoading = false;
                })
        }
    },
    created() {
        this.getPost();
    }
}
</script>

<template>
    <AppLoader v-if="isLoading && !project" />
    <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true" />
</template>