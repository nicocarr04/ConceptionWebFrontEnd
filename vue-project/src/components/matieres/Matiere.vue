<template>
    <div>
        <p>Titre: {{ matiere?.titre }}</p>
    </div>
</template>

<script setup>
// const emit = defineEmits(["goToDetails"]);
const props = defineProps({
    matiere: {
        type: Object,
        default: () => ({
            titre: "",
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>