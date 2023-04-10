<template>
     <div>
        <!-- <div v-for="department in departments" :key="department.id">
            <Department :department="department" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>Pourcentage</td>
                    <td>Date de creation</td>
                    <td>UserId</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="note in store.noteList" :key="note.userid">
                    <td>{{ note.note }}</td>
                    <td>{{ note.date }}</td>
                    <td>{{ note.userId }}</td>
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
            <button @click="router.push('/note')" class="btn btn-primary">
                Ajouter nouvelle note à un élève/professeur
            </button>
        </div>
    </div>
</template>

<script setup>
import Note from "./Note.vue";
import { useNoteStore } from "../../stores/noteStore.js";
import { useUserStore } from "../../stores/userStore.js";
import useNote from "../../services/noteServices";
import { onBeforeMount, watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
const router = useRouter();
const { getAllNotes, deleteNote } = useNote()

const store = useNoteStore();
const userStore = useUserStore();

let notes = store.noteList

const removeNote = (id) => {
    deleteNote(id)
        .then((res) => {
            console.log("Note supprime");
            
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

const goToDetails=(val)=>{
    router.push(`/note/${val}`)

}
onBeforeMount(() => {
    store
        .getAllNotes()
        .then((res) => console.log("Liste des notes"))
        .catch((err) => {
            console.log("No notes", err);
            router.push("/login");
        });
});

watchEffect(() => {
    if (!userStore.getToken) {
        store.notes = [];
    }
});

</script>

<style lang="scss" scoped>
</style>