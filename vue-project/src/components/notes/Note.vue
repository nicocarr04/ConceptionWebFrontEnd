<template>
    <div>
        <p>Note: {{ note.note }}</p>
        <p>Date de creation: {{ note.date }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    note: {
        type: Object,
        default: () => ({
            note: "",
            date: "",
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>