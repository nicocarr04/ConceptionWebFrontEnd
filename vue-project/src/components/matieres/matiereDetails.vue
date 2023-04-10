<template>
    <div>
        <p>Titre</p>
    </div>
</template>

<script setup>
import { useMatiereStore } from "../../stores/matiereStore.js";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const store = useMatiereStore();
const matiere = computed(() => store.matiere);
const route = useRoute();

onBeforeMount(() => {
    if (route.params.id) {
        store
            .getAMatiere(route.params.id)
            .then((res) => console.log("Matiere choisi"))
            .catch((err) =>
                console.log("Erreur en lisant la matiere", err)
            );
    }
});
</script>

<style lang="scss" scoped>
</style>