<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contact-message';
export default {
    name: 'ContactUsPage',
    data: () => ({
        form: {
            email: '',
            subject: '',
            content: ''
        }
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form)
                .then(() => { })
                .catch(err => { console.error(err) })
                .then(() => { });
        }
    }
};
</script>

<template>
    <h1 class="my-5">Contattaci</h1>

    <!-- Form contatti -->
    <form @submit.prevent="sendForm" novalidate>
        <!-- mail -->
        <div class="mb-3">
            <label for="email" class="form-label">Email address <sup class="text-danger">*</sup></label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model.trim="form.email"
                required>
            <small class="form-text text-muted">La tua mail, ti ricontatteremo a questo indirizzo</small>
        </div>

        <div class="mb-3">
            <label for="subject" class="form-label">subject<sup class="text-danger">*</sup></label>
            <input type="text" class="form-control" id="subject" v-model.trim="form.subject" required>
        </div>

        <div class="mb-3">
            <label for="content" class="form-label">contenuto della mail<sup class="text-danger">*</sup></label>
            <textarea class="form-control" id="content" cols="30" rows="10" v-model.trim="form.content"></textarea>
        </div>

        <div class="d-flex justify-content-end">
            <button class="btn btn-primary">Invia</button>
        </div>
    </form>

</template>

<script>
</script>