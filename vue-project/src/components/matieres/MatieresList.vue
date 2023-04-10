<template>
     <div>
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>Titre</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="matiere in store.matiereList" :key="matiere.id">
                    <td>{{ matiere.titre }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeMatiere(matiere.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-matiere/${matiere.id}` )">
                            Update
                        </button>
                    </td>
                    </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/matiere')" class="btn btn-primary">
                Ajouter nouvelle matiere à un élève/professeur
            </button>
        </div>
    </div>
</template>

<script setup>
import Matiere from "./Matiere.vue";
import { useMatiereStore } from "../../stores/matiereStore.js";
import { useUserStore } from "../../stores/userStore.js";
import { onBeforeMount, watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import useMatiere from "../../services/matiereServices";
const { getAllMatieres, deleteMatiere } = useMatiere()
const router = useRouter();

const store = useMatiereStore();
const userStore = useUserStore()

let matieres = store.noteList;

const removeMatiere = (id) => {
    deleteMatiere(id)
        .then((res) => {
            console.log("Matiere supprime");
            
            //Lecture de la liste complete depuis express
            getAllMatieres()
                .then((res) => {
                    console.log("Les resultats", res);
                    matieres.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des matieres", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du matiere", err)
        );
};

const goToDetails=(val)=>{
    router.push(`/matiere/${val}`)

}
onBeforeMount(() => {
    store
        .getAllMatieres()
        .then((res) => console.log("Liste des matieres"))
        .catch((err) => {
            console.log("No matieres", err);
            router.push("/login");
        });
});

watchEffect(() => {
    if (!userStore.getToken) {
        store.matieres = [];
    }
});

</script>

<style lang="scss" scoped>
</style>