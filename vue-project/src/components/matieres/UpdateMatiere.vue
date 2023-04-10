<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'une matière</h3>

            <form @submit.prevent="updateAMatiere">
                <div class="mb-3">
                    <label for="titre" class="form-label">Titre de la matière</label>
                    <input
                        v-model="matiere.titre"
                        type="text"
                        class="form-control"
                        id="titre"
                        placeholder="Entrer le titre"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useMatiere from "../../services/matiereServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id de la matiere que l'on doit mettre a jour
const id = route.params.id;

const { updateMatiere, getMatiereById } = useMatiere();
let matiere = ref({
    titre: "",
});

function updateAMatiere() {
    updateMatiere(matiere.value)
        .then((res) => {
            console.log("Matière mis a jour", res);
            router.push("/")
        .catch((err) =>console.log("Erreur lors de la mise a jour de la matière", err));
        })
}

onBeforeMount(() => {
    if (id) {
        getMatiereById(id)
            .then((res) => {matiere.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture de la matière", err))
    }
})
</script>

<style lang="scss" scoped>
</style>