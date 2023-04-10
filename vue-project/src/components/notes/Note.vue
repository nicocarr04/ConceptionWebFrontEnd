<template>
    <div>
        <p>Note: {{ note?.note }}</p>
        <p>Date de création: {{ note?.date }}</p>
    </div>
</template>

<script setup>
// const emit = defineEmits(["goToDetails"]);
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