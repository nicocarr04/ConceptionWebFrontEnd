<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un user</h3>

            <form @submit.prevent="updateAUser">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input
                        v-model="user.nom"
                        type="text"
                        class="form-control"
                        id="nom"
                        placeholder="Entrer le nom"
                    />
                </div>
                <div class="mb-3">
                    <label for="prenom" class="form-label">Prenom</label>
                    <input
                        v-model="user.prenom"
                        type="text"
                        class="form-control"
                        id="prenom"
                        placeholder="Entrer le prenom"
                    />
                </div>
                <div class="mb-3">
                    <label for="naissance" class="form-label">Date de naissance</label>
                    <input
                        v-model="user.naissance"
                        type="date"
                        class="form-control"
                        id="naissance"
                        placeholder="Donner la date de naissance"
                    />
                </div>
                <div class="mb-3">
                    <label for="photo" class="form-label">Lien de la photo</label>
                    <input
                        v-model="user.photo"
                        type="url"
                        class="form-control"
                        id="photo"
                        placeholder="Entrer le lien de la photo"
                    />
                </div>
                <div class="mb-3">
                    <label for="telephone" class="form-label">Numéro de téléphone</label>
                    <input
                        v-model="user.telephone"
                        type="text"
                        class="form-control"
                        id="telephone"
                        placeholder="Entrer le numéro de téléphone"
                    />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                        v-model="user.email"
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Entrer l'email"
                    />
                </div>
                <div class="mb-3">
                    <label for="mot_de_passe" class="form-label">Mot de passe</label>
                    <input
                        v-model="user.mot_de_passe"
                        type="password"
                        class="form-control"
                        id="mot_de_passe"
                        placeholder="Entrer le mot de passe"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useUser from "../../services/userServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id de la note que l'on doit mettre a jour
const id = route.params.id;

const { updateUser, getUserById } = useUser();
let user = ref({
    nom: "",
    prenom: "",
    naissance: "",
    photo: "",
    telephone: "",
    email: "",
    mot_de_passe: ""
});

function updateAUser() {
    updateUser(user.value)
        .then((res) => {
            console.log("User mis a jour", res);
            router.push("/users") // Push dans le router de la liste des notes
        .catch((err) =>console.log("Erreur lors de la mise a jour du user", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
    if (id) {
        getUserById(id)
            .then((res) => {departement.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture du user", err))
    }
})
</script>

<style lang="scss" scoped>
</style>