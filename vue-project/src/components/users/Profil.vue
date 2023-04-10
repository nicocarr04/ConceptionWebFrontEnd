<template>
<div class="container">
  <div class="row justify-content-center mt-4">
    <div class="col-md-6">
        <img :src="(`${photoUrl}`)" alt="Photo de profil">
    </div>
    <div class="col-md-6 col-md-push-6">
        <h2>Information</h2>
        <p>Prenom : {{ user.prenom }}</p>
        <p>Nom : {{ user.nom }}</p>
        <p>Date de naissance : {{ user.naissance }}</p>
        <p>Téléphone : {{ user.telephone }}</p>
        <p>Email : {{ user.email }}</p>
    </div >
  </div>
</div>
</template>

<script setup>
import { useUserStore } from "../../stores/userStore.js";
import { onBeforeMount, watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
const router = useRouter();

const store = useUserStore();
const user = store.authUser
const photoUrl = user.photo


watchEffect(() => {
    if (!store.getToken) {
        store.users = [];
    }
});

</script>

<style lang="scss" scoped>
</style>