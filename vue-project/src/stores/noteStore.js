import { defineStore } from "pinia";
import useNote from "../services/noteServices.js";
import useUser from "../services/userServices.js";

const { getAllNotes, getNoteById, updateNote, deleteNote } = useNote()
const { createUserNote } = useUser()

export const useNoteStore = defineStore('note', {
    state: () => ({
        note: {},
        notes: []
    }),

    getters: {
        noteList(state) {
            return state.notes
        },
        currentNote(state) {
            return state.note
        },

    },

    actions: {

        async getAllNotes() {
            try {
                const result = await getAllNotes()
                this.notes = result.data
                return result

            } catch (error) {
                console.log('Pas de notes', error)
            }

        },

        async getANote(id) {
            try {
                const result = await getNoteById(id)
                this.note = result.data;
                return result

            } catch (error) {
                console.log('Pas de ce note', error)
            }

        },

        async createANote(id, data) {
            try {
                const result = await createUserNote(id, data)
                return result

            } catch (error) {
                console.log('Erreur de creation de note', error)
            }


        },
        async updateANote(id, data) {
            try {
                const result = await updateNote(id, data)
                return result

            } catch (error) {
                console.log('Erreur de creation de note', error)
            }


        }

    }
})