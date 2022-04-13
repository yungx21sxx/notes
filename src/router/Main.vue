<template>
  <div class="main" v-if="notes.length > 0">

    <sidebar :notes="notes"></sidebar>
    <note-preview class="note-preview"></note-preview>
  </div>
  <div class="message" v-else>
    Создайте заметку..
  </div>
</template>

<script>
import sidebar from "@/components/Sidebar";
import notePreview from "@/components/NotePreview";
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: "Main",
  components: {sidebar, notePreview},
  methods: {
    ...mapMutations({
      setNotes: 'setNotes',
      setCurrentNote: 'setCurrentNote'
    }),

  },
  computed: {
    ...mapState({
      notes: state => state.notes,
      currentNote: state => state.currentNote
    }),

  },

  mounted() {

  }

}
</script>

<style scoped lang="sass">
  @import "../assets/css/var"
  .message
    text-align: center
    margin-top: calc(100vh / 3)
    font-size: 1.5em
    color: #ffffff

  .main
    display: flex

  .note-preview
    background: $block-bg
    border-radius: 7px
    width: 100%
    height: calc(100vh - 100px)
    padding: 10px 40px
    overflow: scroll
    margin-left: 8px









</style>