import axios from "axios"

import { useUserStore } from "../stores/userStore.js";


const AxiosInstance = axios.create({
    baseURL: "https://localhost:5500",
    timeout: 8000,
    headers: {
        Accept: 'application/json',
        // 'Authorization':token? 'Bearer '+token:''
    },
})

AxiosInstance.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.token // must be within the interceptor!
    // example of pulling an auth token from the store
    config.headers.Authorization = token ? 'Bearer ' + token : ''

    return config
})

const useNote = () => {

    async function getAllNotes() {
        //const resultat = await axios.get('https://localhost:5500/notes')
        //return resultat.data

        const result = await AxiosInstance.get(`/notes`);
        return result.data;
    }

    async function updateNote(id, updatedNote) {
        const resultat = await axios.put(`https://localhost:5500/notes/${id}`, updatedNote)
        return resultat

    }

    async function deleteNote(id) {
        const resultat = await axios.delete(`https://localhost:5500/notes/${id}`)
        return resultat

    }

    async function getNoteById(id) {
        const resultat = await axios.get(`https://localhost:5500/notes/${id}`)
        return resultat.data

    }

    async function getNoteByMatiereId(matiereid) {
        const resultat = await axios.get(`https://localhost:5500/notes/${matiereid}`)
        return resultat.data

    }

    async function getNoteByUserId(userid) {
        const resultat = await axios.get(`https://localhost:5500/notes/${userid}`)
        return resultat.data

    }

    return { getAllNotes, updateNote, deleteNote, getNoteById, getNoteByMatiereId, getNoteByUserId }

}

export default useNote