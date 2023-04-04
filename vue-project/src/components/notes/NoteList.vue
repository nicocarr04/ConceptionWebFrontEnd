<template>
    <div>
        <!-- <div v-for="department in departments" :key="department.id">
            <Department :department="department" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Note</td>
                    <td>Date de création</td>
                    <td>userid</td>
                    <td>matiereid</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="note in notes" :key="note.id">
                    <td>{{ note.id }}</td>
                    <td>{{ note.note }}</td>
                    <td>{{ note.date }}</td>
                    <td>{{ note.userid }}</td>
                    <td>{{ note.matiereid }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeNote(note.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-note/${note.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouvelle-note')" class="btn btn-primary">
                Add new note
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Note from "./Note.vue";
import useNote from "../../services/noteServices";
import { useRouter } from "vue-router";

const { getAllNotes, deleteNote } = useNote();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let notes = ref([]);

const removeNote = (id) => {
    //Appel de la route de suppression d'un departement (depuis express)
    deleteNote(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
            console.log("Note supprimé");

            //Lecture de la liste complete depuis express
            getAllNotes()
                .then((res) => {
                    console.log("Les resultats", res);
                    notes.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des notes", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression de la note", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
    getAllNotes()
        .then((res) => {
            console.log("Les resultats", res);
            notes.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des notes", err))
});
</script>

<style lang="scss" scoped>
</style>