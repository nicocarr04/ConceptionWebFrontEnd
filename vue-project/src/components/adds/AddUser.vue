<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau user</h3>

            <form @submit.prevent="addNewUser">
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
import { ref } from "vue";
import useUser from "../../services/noteServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addUser } = useUser();
let user = ref({
    nom: "",
    prenom: "",
    naissance: "",
    photo: "",
    telephone: "",
    email: "",
    mot_de_passe: "",
});
function addNewUser() {
    //Appel de notre route dans le backend (express) pour ajouter un departement
    addUser(user.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau user", res);
            //On va etre redirige vers la table des departements
            router.push("/users");
        })
        .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>