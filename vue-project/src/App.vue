<template>
  <div class="wrapper">
      <header class="d-flex justify-content-center align-items-center" :class="userStore.token && 'justify-content-between'">
          <nav>
              <RouterLink v-if="!userStore.token" class="mr-8" to="/">Acceuil</RouterLink>
              <RouterLink v-if="userStore.token" class="mr-8" to="/profil">Profil</RouterLink>
              <RouterLink v-if="userStore.token" class="mr-8" to="/notes">Liste des notes</RouterLink>
              <RouterLink v-if="userStore.token" class="mr-8" to="/matieres" >Liste des matieres</RouterLink>
              <RouterLink v-if="!userStore.token" class="mr-8" to="/login">Se connecter</RouterLink>
              <RouterLink v-if="!userStore.token" to="/register">S'enregistrer</RouterLink>
          </nav>
          <div class="d-flex justify-content-end align-items-center" v-if="userStore.token">
             <div class="m-4">Bienvenu(e) {{ userStore.authUser.email }}</div>
             <div class="btn btn-warning" @click="logout">Se déconnecter</div>

          </div>
         
      </header>
      <RouterView/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "./stores/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

function logout() {
  userStore
      .logout()
      .then((res) => {
          console.log(res);
          router.push("/");
      })
      .catch((err) => console.log(err));
}

</script>

<style scoped>
nav a{
  text-decoration: none;
}
</style>
