<template>
    <form @submit.prevent="submit">
        <div class="row justify-content-center mt-4">
            <div class="col-12 col-sm-8">
                <div class="row mb-2">
                    <label class="col-12 col-sm-6 form-label" for="email">Email de l'utilisateur</label>
                    <div class="col-12 col-sm-6">
                        <input class="form-control" :style="{ border: errorEmail ? '1px solid red' : '' }" type="text" v-model="user.email"/>
                        <div class="text-danger pb-2" v-if="errorEmail">{{ errorEmail }}</div>
                    </div>
                </div>
                <div class="row mb-2">
                    <label class="col-12 col-sm-6 form-label" for="description">Mot de passe</label>
                    <div class="col-12 col-sm-6">
                        <input class="form-control" :style="{border: errorPassword ? '1px solid red' : '', }" type="password" v-model="user.mot_de_passe"/>
                        <div class="text-danger pb-2" v-if="errorPassword">{{ errorPassword }}</div>
                    </div>
                </div>
                <div v-if="!store.token" class="row mt-4">
                    <button class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import {useRouter} from "vue-router";
import { reactive,ref, watchEffect } from "vue";
import { useUserStore } from "../../stores/userStore.js";
const store = useUserStore();
const router = useRouter();

const user = reactive({
    email: "",
    mot_de_passe: "",
});

const errorEmail = ref("");
const errorPassword = ref("");

function submit() {
    if (user.email == "" || user.email.length < 3) {
        errorEmail.value = "Le nom n'est pas valide";
        return;
    }

    if (user.mot_de_passe == "" || user.mot_de_passe.length < 3) {
        errorPassword.value = "Le mot pas n'est pas conforme";
        return;
    }

    resetErrors();

    store.loginUser({ email: user.email, mot_de_passe: user.mot_de_passe })
        .then((res) => {
            router.push("/profil");
        })
        .catch((err) =>console.log("Erreur en chargeant les users", err));
}

function resetErrors() {
    errorEmail.value = errorPassword.value = ""
}

watchEffect(()=>{
	
	if(user.email===""){
		errorEmail.value = ""
		return 
	}
	else if (user.email !== "" && user.email.length >= 3) {
        errorEmail.value = ""
		return 
    } else{
        errorEmail.value = "Le email n'est pas valide";
	}
	
	
	if (user.mot_de_passe===''){
		errorPassword.value = ""
		return
	}
	else if (user.mot_de_passe !== "" && user.mot_de_passe.length >= 3) {
        errorPassword.value = ""
		return
    } else{
		errorPassword.value = "Le mot passe n'est pas conforme";
	}
	
	

})
</script>

<style lang="scss" scoped>
</style>