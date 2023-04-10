<template>
    <form @submit.prevent="submit">
      <div class="row justify-content-center mt-4">
        <div class="col-12 col-sm-8">
          <div class="row mb-2">
            <label class="col-12 col-sm-6 form-label" for="nom">Nom d'utilisateur</label>
            <div class="col-12 col-sm-6">
              <input class="form-control" :style="{ border: errorNom ? '1px solid red' : '' }"  type="text" v-model="user.nom"/>
              <div class="text-danger pb-2" v-if="errorNom">{{ errorNom }}</div>
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-12 col-sm-6 form-label" for="prenom">Prenom de l'utilisateur</label>
            <div class="col-12 col-sm-6">
              <input class="form-control" :style="{ border: errorPreNom ? '1px solid red' : '' }"  type="text" v-model="user.prenom"/>
              <div class="text-danger pb-2" v-if="errorPreNom">{{ errorPreNom }}</div>
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-12 col-sm-6 form-label" for="naissance">Date de naissance de l'utilisateur</label>
            <div class="col-12 col-sm-6">
              <input class="form-control" type="date" v-model="user.naissance"/>
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-12 col-sm-6 form-label" for="photo">Photo de l'utilisateur</label>
            <div class="col-12 col-sm-6">
              <input class="form-control" type="url" v-model="user.photo"/>
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-12 col-sm-6 form-label" for="telephone">Telephone de l'utilisateur</label>
            <div class="col-12 col-sm-6">
              <input class="form-control" type="text" v-model="user.telephone"/>
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-12 col-sm-6 form-label" for="email">Email de connexion</label>
            <div class="col-12 col-sm-6">
              <input class="form-control" :style="{ border: errorEmail ? '1px solid red' : '' }"  type="email" v-model="user.email"/>
              <div class="text-danger pb-2" v-if="errorEmail">{{ errorEmail }}</div>
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-12 col-sm-6 form-label" for="mot_de_passe">Mot de passe</label>
            <div class="col-12 col-sm-6">
              <input class="form-control" :style="{ border: errorPassword ? '1px solid red' : '' }" type="password" v-model="user.mot_de_passe"/>
              <div class="text-danger pb-2" v-if="errorPassword">{{ errorPassword }}</div>
            </div>
          </div>
          <div class="row mt-4"> <button class="btn btn-primary">Enregistrer</button> </div>
        </div>
      </div>
    </form>
  </template>
  
  <script setup>
  import { reactive, ref, watchEffect } from 'vue'
  import { useUserStore } from '../../stores/userStore'
  const user = reactive({
    nom: "",
    prenom: "",
    naissance: "",
    photo: "",
    telephone: "",
    email: "",
    mot_de_passe: "",
  })
  
  const errorNom = ref("")
  const errorPassword = ref("")
  const errorEmail = ref("")
  const errorPreNom = ref("")

  
  
  const store = useUserStore()
  
  const submit = function(){
    if(user.nom === "" ||user.nom.length <3){
      errorNom.value = "Le nom n'est pas valide"
      return
    }
  
    if(user.prenom === "" ||user.prenom.length <3){
      errorPreNom.value = "Le prenom n'est pas valide"
      return
    }
  
    if(user.email === "" ||user.email.length <3){
      errorEmail.value = "Le email n'est pas valide"
      return
    }
  
    if(user.mot_de_passe === "" ||user.mot_de_passe.length< 3){
      errorPassword.value = "Le password n'est pas valide"
      return
    }
  
    resetErrors()
  
    store.registerAUser({nom:user.nom, prenom:user.prenom,  naissance:user.naissance, photo:user.photo, telephone:user.telephone, email:user.email, mot_de_passe:user.mot_de_passe})
    .then(res=>{})
    .catch(err=>console.log('Erreur', err))
  
  }
  
  const resetErrors = function(){
    errorNom.value = errorPassword.value = errorPreNom.value = errorEmail.value = ""
  }
  
  watchEffect(()=>{
  
    if (user.nom !== "" && user.nom.length >= 3) {
          errorNom.value = ""
          return 
      } 
      // errorNom.value = "Le nom n'est pas valide";
      
      if (user.mot_de_passe !== "" && user.mot_de_passe.length >= 3) {
          errorPassword.value = ""
          return
      } 
      // errorPassword.value = "Le mot passe n'est pas conforme";
  
    if (user.prenom !== "" && user.prenom.length >= 3) {
          errorPreNom.value = ""
          return
      } 
      // errorPreNom.value = "Le prenom n'est pas conforme";
  
    if (user.email !== "" && user.email.length >= 3) {
          errorEmail.value = ""
          return
      } 
      // errorUserName.value = "Le nom de connexion n'est pas conforme";
  })
  
  </script>
  
  
  
  <style lang="scss" scoped>
  </style>