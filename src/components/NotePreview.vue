<template>

  <div class="note-preview" v-if="Object.keys(currentNote).length !== 0">
    <div class="note-preview__date">{{getDate}}</div>
    <editor
        :value="currentNote.html"
        @update="saveChanges"

        :key="currentNote.id"
        class="note-preview__editor"
    ></editor>
  </div>
  <div class="note-preview_empty" v-else>
    <p>Выберите заметку</p>
  </div>


</template>

<script>
import editor from "@/components/Editor";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "NotePreview",
  components: {editor},
  methods: {
    ...mapMutations({
      setCurrentNote: 'setCurrentNote',
      setNotes: 'setNotes'
    }),
    ...mapActions({
      setLocalStorage: 'setLocalStorage'
    }),
    saveChanges(noteHTML, noteText) {
      const text = noteText.split('\n').filter(i => i !== '')
      this.setCurrentNote({
        html: noteHTML,
        title: text[0] ? text[0] : 'Новая заметка',
        body: text[1] ? text[1] : 'Нет дополнительного текста',
        text: text.length === 0 ? [''] : text,
        editDate: new Date()
      })

      let notesCopy = [...this.notes]
      notesCopy.forEach(note => {
        if (note.id === this.currentNote.id) {
          note.title = this.currentNote.title
          note.body = this.currentNote.body
          note.text = this.currentNote.text
          note.html = noteHTML
          note.editDate = new Date()
        }
      })
      this.setNotes(notesCopy)
      this.setLocalStorage()
    },


  },
  computed: {
    ...mapState({
      currentNote: state => state.currentNote,
      notes: state => state.notes
    }),
    getDate() {
      let createDate = new Date(this.currentNote.createDate)
      let editDate = new Date(this.currentNote.editDate)
      let date = null
      let edited = false
      if (createDate.valueOf() < editDate.valueOf()) {
        date = new Date(editDate)
        edited = true
      } else {
        date = new Date(createDate)
      }

      const fullDate = [
          date.getDate(), date.getMonth(), date.getFullYear()
      ].map(i => (i < 10) ? '0' + i : i).join('.')

      const time = [
          date.getHours(), date.getMinutes()
      ].map(i => (i < 10) ? '0' + i : i).join(':')

      if (edited)
        return 'Изменено: ' + fullDate + ' в ' + time
      else
        return 'Создано: ' + fullDate + ' в ' + time
    }

  },

}
</script>

<style scoped lang="sass">
  @import "../assets/css/var"
  .note-preview
    &_empty p
      text-align: center
      font-size: 1.4em
      color: #ffffff
      margin-top: calc(100vh / 4)
    &__date
      text-align: center
      font-size: 14px
      font-weight: 200
      color: $secondary-text-color
      margin-bottom: 14px

    &__editor
      color: white
      overflow: scroll





</style>