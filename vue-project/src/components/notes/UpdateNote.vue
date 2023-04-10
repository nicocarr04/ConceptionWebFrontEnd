<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'une note</h3>

            <form @submit.prevent="updateANote">
                <div class="mb-3">
                    <label for="note" class="form-label">Pourcentage</label>
                    <input
                        v-model="note.note"
                        type="text"
                        class="form-control"
                        id="note"
                        placeholder="Entrer le pourcentage"
                    />
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label"
                        >Date de création</label
                    >
                    <input
                        v-model="note.date"
                        type="date"
                        class="form-control"
                        id="date"
                        placeholder="Donner la date de création"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useNote from "../../services/noteServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateNote, getNoteById } = useNote();
let note = ref({
    note: "",
    date: "",
});

function updateANote() {
    updateNote(note.value)
        .then((res) => {
            console.log("Note mis a jour", res);
            router.push("/")
        .catch((err) =>console.log("Erreur lors de la mise a jour de la Note", err));
        })
}

onBeforeMount(() => {
    if (id) {
        getNoteById(id)
            .then((res) => {note.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture de la note", err))
    }
})
</script>

<style lang="scss" scoped>
</style>