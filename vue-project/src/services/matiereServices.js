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

const useMatiere = () => {

    async function getAllMatieres() {
        //const resultat = await axios.get('https://localhost:5500/notes')
        //return resultat.data

        const result = await AxiosInstance.get(`/matieres`);
        return result.data;
    }

    async function updateMatiere(id, updatedMatiere) {
        const resultat = await axios.put(`https://localhost:5500/matieres/${id}`, updatedMatiere)
        return resultat

    }

    async function deleteMatiere(id) {
        const resultat = await axios.delete(`https://localhost:5500/matieres/${id}`)
        return resultat

    }

    async function getMatiereById(id) {
        const resultat = await axios.get(`https://localhost:5500/matieres/${id}`)
        return resultat.data

    }

    async function getMatiereByUserId(userid) {
        const resultat = await axios.get(`https://localhost:5500/matieres/${userid}`)
        return resultat.data

    }

    return { getAllMatieres, updateMatiere, deleteMatiere, getMatiereById, getMatiereByUserId }

}

export default useMatiere