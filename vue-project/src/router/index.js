import UserList from '../components/users/UserList.vue';
import AddUser from '../components/adds/AddUser.vue';
import UpdateUser from '../components/users/UpdateUser.vue';
import NoteList from '../components/notes/NoteList.vue';
import AddNote from '../components/adds/AddNote.vue';
import UpdateNote from '../components/notes/UpdateNote.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserList
    },
    // {
    //   path: '/profil',
    //   name: 'profil',
    //   component: Profil
    // },
    {
      path: '/nouveau-user',
      name: 'nouveauuser',
      component: AddUser
    },
    {
      path: '/mise-a-jour-user/:id',
      name: 'miseajouruser',
      component: UpdateUser
    },
    {
      path: '/notes',
      name: 'notes',
      component: NoteList
    },
    {
      path: '/nouvelle-note',
      name: 'nouvellenote',
      component: AddNote
    },
    {
      path: '/mise-a-jour-note/:id',
      name: 'miseajournote',
      component: UpdateNote
    }
  ]
})

export default router