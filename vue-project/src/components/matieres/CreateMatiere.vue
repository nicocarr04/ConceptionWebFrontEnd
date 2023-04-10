<template>
  <form @submit.prevent="submit">
    <div class="row justify-content-center mt-4">
      <div class="col-12 col-sm-8">
        <div class="row mb-2">
          <label class="col-12 col-sm-6 form-label" for="note">Sélection de l'étudiant (son id)</label>
          <div class="col-12 col-sm-6">
            <input class="form-control" type="number" v-model="user.id"/>
          </div>
        </div>
        <div class="row mb-2">
          <label class="col-12 col-sm-6 form-label" for="note">Titre de la matiere</label>
          <div class="col-12 col-sm-6">
            <input class="form-control" :style="{ border: errorTitre ? '1px solid red' : '' }"  type="text" v-model="matiere.titre"/>
            <div class="text-danger pb-2" v-if="errorTitre">{{ errorTitre }}</div>
          </div>
        </div>
        <div class="row mt-4"> <button type="submit" class="btn btn-primary">{{id?'Update':'Ajouter'}}</button> </div>
      </div>
    </div>
  </form>
</template>
<script setup>
  import { storeToRefs } from 'pinia';
  import { onMounted, reactive, ref, watchEffect, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router';
  import { useMatiereStore } from '../../stores/matiereStore.js'
  const store = useMatiereStore()
  const route = useRoute()
  const router = useRouter()

  const selectedItem = null;

  const id = route.params.id

  let matiere = ref({
      titre: "",
  })

  let user = ref({
      id: "",
  })

  const errorTitre = ref('')

  function submit(){
      if (matiere.value.titre == "" || matiere.value.titre.length < 1) {
        errorTitre.value = "Le titre n'est pas valide"
        return
      }

      resetErrors()
      store.createAMatiere(user.value.id, {...matiere.value})
        .then(res=>{
              console.log('Matiere cree avec succes', res)
              router.push('/matieres')
      })
        .catch(err=>console.log('Erreur lors de la creation de la matiere', err))
  }

  const {currentMatiere} = storeToRefs(store)
  if(id) matiere = currentMatiere
  onMounted(()=>{
    
    if(id){
      store
            .getAMatiere(id)
            .then((res) => {
              console.log("Matiere choisi", res)
          })
            .catch((err) =>
                console.log("Erreur en lisant la matiere", err)
            );
    }

  })

  function resetErrors(){
    errorTitre.value = "";
  }

  watchEffect(()=>{
    
    if (matiere.value.titre !== "" && matiere.value.titre?.length >= 1) {
        errorTitre.value = ""
		return 
    } 
  })
</script>

<style lang="scss" scoped>
</style>