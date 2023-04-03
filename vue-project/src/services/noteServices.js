import axios from 'axios'
const useNote = () => {

    async function getAllNotes() {
        const resultat = await axios.get('http://localhost:5000/notes')
        return resultat.data

    }

    async function updateNote(id, updatedNote) {
        const resultat = await axios.put(`http://localhost:5000/notes/${id}`, updatedNote)
        return resultat

    }

    async function deleteNote(id) {
        const resultat = await axios.delete(`http://localhost:5000/notes/${id}`)
        return resultat

    }

    async function getNoteById(id) {
        const resultat = await axios.get(`http://localhost:5000/notes/${id}`)
        return resultat.data

    }

    async function getNoteByMatiereId(matiereid) {
        const resultat = await axios.get(`http://localhost:5000/notes/${matiereid}`)
        return resultat.data

    }

    async function getNoteByUserId(userid) {
        const resultat = await axios.get(`http://localhost:5000/notes/${userid}`)
        return resultat.data

    }

    return { getAllNotes, updateNote, deleteNote, getNoteById, getNoteByMatiereId, getNoteByUserId }

}

export default useNote