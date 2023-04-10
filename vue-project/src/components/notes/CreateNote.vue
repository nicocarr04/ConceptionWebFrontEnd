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
          <label class="col-12 col-sm-6 form-label" for="note">Pourcentage de la note</label>
          <div class="col-12 col-sm-6">
            <input class="form-control" :style="{ border: errorNote ? '1px solid red' : '' }"  type="text" v-model="note.note"/>
            <div class="text-danger pb-2" v-if="errorNote">{{ errorNote }}</div>
          </div>
        </div>
        <div class="row">
          <label class="col-12 col-sm-6 form-label" for="date" >Date de creation de la note</label>
          <div class="col-12 col-sm-6">
            <input class="form-control" :style="{ border: errorCreation ? '1px solid red' : '' }" type="date" v-model="note.date"/>
            <div class="text-danger pb-2" v-if="errorCreation">{{ errorCreation }}</div>
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
  import { useNoteStore } from '../../stores/noteStore.js'
  const store = useNoteStore()
  const route = useRoute()
  const router = useRouter()

  const selectedItem = null;

  const id = route.params.id

  let note = ref({
      note: "",
      date: "",
  })

  let user = ref({
      id: "",
  })

  const errorNote = ref('')
  const errorCreation = ref('')

  function submit(){
      if (note.value.note == "" || note.value.note.length < 1) {
        errorNote.value = "La note n'est pas valide"
        return
      }
      if (note.value.date == "" || note.value.date.length < 3) {
        errorCreation.value = "La date de creation n'est pas valide"
        return
      }

      resetErrors()
      store.createANote(user.value.id, {...note.value})
        .then(res=>{
              console.log('Note cree avec succes', res)
              router.push('/notes')
      })
        .catch(err=>console.log('Erreur lors de la creation de la note', err))
  }

  // department.value=computed(()=>store.currentDepartment)
  // department = storeToRefs(store).currentDepartment

  const {currentNote} = storeToRefs(store)
  if(id) note = currentNote
  onMounted(()=>{
    
    if(id){
      store
            .getANote(id)
            .then((res) => {
              console.log("Note choisi", res)
              // department.value=res.data
          })
            .catch((err) =>
                console.log("Erreur en lisant la note", err)
            );
    }

  })

  function resetErrors(){
    errorNote.value = errorCreation.value = "";
  }

  watchEffect(()=>{
    
    if (note.value.note !== "" && note.value.note?.length >= 1) {
        errorNote.value = ""
		return 
    } 
  
    if (note.value.date !== "" && note.value.date?.length >= 3) {
        errorCreation.value = ""
	  	return
    } 
  })
</script>

<style lang="scss" scoped>
</style>