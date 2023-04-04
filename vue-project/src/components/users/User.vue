<template>
    <div>
        <p>Nom: {{ user.nom }}</p>
        <p>Prenom: {{ user.prenom }}</p>
        <p>Naissance: {{ user.naissance }}</p>
        <p>Photo: {{ user.photo }}</p>
        <p>Telephone: {{ user.telephone }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Mot de passe: {{ user.mot_de_passe }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    user: {
        type: Object,
        default: () => ({
            nom: "",
            prenom: "",
            naissance: "",
            photo: "",
            telephone: "",
            email: "",
            mot_de_passe: "",
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>