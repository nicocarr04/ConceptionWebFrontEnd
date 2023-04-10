<template>
    <div>
        <p>Note: {{ note?.note }}</p>
        <p>Date de création: {{ note?.date }}</p>
    </div>
</template>

<script setup>
import { useNoteStore } from "../../stores/noteStore.js";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const store = useNoteStore();
const note = computed(() => store.note);
const route = useRoute();

onBeforeMount(() => {
    if (route.params.id) {
        store
            .getANote(route.params.id)
            .then((res) => console.log("Note choisi"))
            .catch((err) =>
                console.log("Erreur en lisant la note", err)
            );
    }
});
</script>

<style lang="scss" scoped>
</style>