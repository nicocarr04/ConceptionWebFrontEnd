import axios from 'axios'
const useUser = () => {

    async function register(data) {
        const result = await axios.post('https://localhost:5500/users', data);
        return result.data;
    }

    async function login(data) {
        const result = await axios.post('https://localhost:5500/users/login', data);
        return result.data;
    }

    async function getAllUsers() {
        const resultat = await axios.get('https://localhost:5500/users')
        return resultat.data

    }

    async function addUser(user) {
        const resultat = await axios.post('https://localhost:5500/users', user)
        return resultat

    }

    async function updateUser(id, updatedUser) {
        const resultat = await axios.put(`https://localhost:5500/users/${id}`, updatedUser)
        return resultat

    }

    async function deleteUser(id) {
        const resultat = await axios.delete(`https://localhost:5500/users/${id}`)
        return resultat

    }

    async function getUserById(id) {
        const resultat = await axios.get(`https://localhost:5500/users/${id}`)
        return resultat.data

    }

    async function getUserRoles(id) {
        const resultat = await axios.get(`https://localhost:5500/users/${id}/roles`)
        return resultat.data

    }

    async function getUserNotes(id) {
        const resultat = await axios.get(`https://localhost:5500/users/${id}/notes`)
        return resultat.data

    }

    async function getUserMatieres(id) {
        const resultat = await axios.get(`https://localhost:5500/users/${id}/matieres`)
        return resultat.data

    }

    async function createUserNote(id, data) {
        const result = await axios.post(`https://localhost:5500/users/${id}/notes`, data);
        return result.data;
    }

    async function createUserMatiere(id, data) {
        const result = await axios.post(`https://localhost:5500/users/${id}/matieres`, data);
        return result.data;
    }

    return { getAllUsers, createUserNote, createUserMatiere, addUser, updateUser, deleteUser, getUserById, getUserRoles, getUserNotes, getUserMatieres, register, login }

}

export default useUser