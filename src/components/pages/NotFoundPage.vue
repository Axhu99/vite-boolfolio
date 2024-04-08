<script>
export default {
    name: 'NotFoundPage'
};
</script>

<template>
    <div class="vh-100 d-flex flex-column align-items-center justify-content-center">
        <h3>404 | Page not FOUND</h3>
        <button class="btn" @click="$router.back()">Torna indietro</button>
    </div>
</template>