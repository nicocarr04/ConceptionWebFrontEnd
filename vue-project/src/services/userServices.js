import axios from 'axios'
const useUser = () => {

    async function getAllUsers() {
        const resultat = await axios.get('http://localhost:5500/users')
        return resultat.data

    }

    async function addUser(user) {
        const resultat = await axios.post('http://localhost:5500/users', user)
        return resultat

    }

    async function updateUser(id, updatedUser) {
        const resultat = await axios.put(`http://localhost:5500/users/${id}`, updatedUser)
        return resultat

    }

    async function deleteUser(id) {
        const resultat = await axios.delete(`http://localhost:5500/users/${id}`)
        return resultat

    }

    async function getUserById(id) {
        const resultat = await axios.get(`http://localhost:5500/users/${id}`)
        return resultat.data

    }

    async function getUserRoles(id) {
        const resultat = await axios.get(`http://localhost:5500/users/${id}/roles`)
        return resultat.data

    }

    async function getUserNotes(id) {
        const resultat = await axios.get(`http://localhost:5500/users/${id}/notes`)
        return resultat.data

    }

    async function getUserMatieres(id) {
        const resultat = await axios.get(`http://localhost:5500/users/${id}/matieres`)
        return resultat.data

    }

    return { getAllUsers, addUser, updateUser, deleteUser, getUserById, getUserRoles, getUserNotes, getUserMatieres }

}

export default useUser