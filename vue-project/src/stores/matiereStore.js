import { defineStore } from "pinia";
import useMatiere from "../services/matiereServices.js";
import useUser from "../services/userServices.js";

const { getAllMatieres, getMatiereById, updateMatiere, deleteMatiere } = useMatiere()
const { createUserMatiere } = useUser()

export const useMatiereStore = defineStore('matiere', {
    state: () => ({
        matiere: {},
        matieres: []
    }),

    getters: {
        matiereList(state) {
            return state.matieres
        },
        currentMatiere(state) {
            return state.matiere
        },

    },

    actions: {

        async getAllMatieres() {
            try {
                const result = await getAllMatieres()
                this.matieres = result.data
                return result

            } catch (error) {
                console.log('Pas de matieres', error)
            }

        },

        async getAMatiere(id) {
            try {
                const result = await getMatiereById(id)
                this.matiere = result.data;
                return result

            } catch (error) {
                console.log('Pas de ce matiere', error)
            }

        },

        async createAMatiere(id, data) {
            try {
                const result = await createUserMatiere(id, data)
                return result

            } catch (error) {
                console.log('Erreur de creation de matiere', error)
            }


        },
        async updateAMatiere(id, data) {
            try {
                const result = await updateMatiere(id, data)
                return result

            } catch (error) {
                console.log('Erreur de creation de matiere', error)
            }


        }

    }
})