<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'une nouveau user</h3>

            <form @submit.prevent="addNewNote">
                <div class="mb-3">
                    <label for="note" class="form-label">Note</label>
                    <input
                        v-model="note.note"
                        type="text"
                        class="form-control"
                        id="note"
                        placeholder="Entrer la note"
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
import { ref } from "vue";
import useNote from "../../services/noteServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addNote } = useNote();
let note = ref({
    nom: "",
    date: ""
});
function addNewNote() {
    //Appel de notre route dans le backend (express) pour ajouter un departement
    addNote(note.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouvelle note", res);
            //On va etre redirige vers la table des departements
            router.push("/notes");
        })
        .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>