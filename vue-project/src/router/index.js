import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../components/users/Profil.vue')
    },

    {
      path: '/notes',
      name: 'notes',
      component: () => import('../components/notes/NotesList.vue')
    },
    
    {
      path: '/note/:id',
      name: 'note',
      component: () => import('../components/notes/NoteDetails.vue')
    },

    {
      path: '/mise-a-jour-note/:id',
      name: 'mise-a-jour-note',
      component: () => import('../components/notes/UpdateNote.vue')
    },

    {
      path: '/note/:id?',
      name: 'newNote',
      component: () => import('../components/notes/CreateNote.vue')
    },

    {
      path: '/matieres',
      name: 'matieres',
      component: () => import('../components/matieres/MatieresList.vue')
    },
    
    {
      path: '/matiere/:id',
      name: 'matiere',
      component: () => import('../components/matieres/MatiereDetails.vue')
    },

    {
      path: '/mise-a-jour-matiere/:id',
      name: 'mise-a-jour-matiere',
      component: () => import('../components/matieres/UpdateMatiere.vue')
    },


    {
      path: '/matiere/:id?',
      name: 'newMatiere',
      component: () => import('../components/matieres/CreateMatiere.vue')
    },
  
    {
      path: '/login',
      name:'login',
      component: () => import('../components/users/Login.vue')
    },

    {
      path: '/register',
      name:'register',
      component: () => import('../components/users/Register.vue')
    },
  ]
})

export default router
