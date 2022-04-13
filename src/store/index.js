import { createStore } from 'vuex'
import Vue from "core-js/internals/task";

export default createStore({
  state() {
    return {
      notes: [],
      currentNote: {},
      searchQuery: '',
    }
  },
  getters: {

    searchedNotes(state, getters) {
      return getters.sortedByDateNotes.filter(note => {
        for (let str of note.text) {
          if (str.toLowerCase().includes(state.searchQuery.toLowerCase())) {
            return note
          }
        }
      })
    },
    sortedByDateNotes(state, getters) {
      return [...state.notes].sort((note1, note2) => {
        return (new Date(note2.editDate).valueOf()) - (new Date(note1.editDate).valueOf())
      })
    }

  },
  mutations: {
    setNotes(state, val) {
      state.notes = val
    },
    setSearchQuery(state, val) {
      state.searchQuery = val
    },
    setCurrentNote(state, val) {
      Object.assign(state.currentNote, val);

    },



  },
  actions: {
    setLocalStorage({state}) {
      localStorage.setItem('notes', JSON.stringify({
        notes: state.notes,
        currentNote: state.currentNote
      }))

    },
    getLocalStorage({state, commit}) {
      const data = localStorage.getItem('notes')
      if (data) {
        const {notes, currentNote} = JSON.parse(data)
        commit('setNotes', notes)
        commit('setCurrentNote', currentNote)
      }
    }
  },
  modules: {
  }
})
