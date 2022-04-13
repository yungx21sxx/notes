<template>
  <div class="nav">
    <div class="nav__body wrapper">
      <div class="nav__left-block nav__block left-block" >
        <div class="nav__icon-group">

          <router-link to="/">
            <img src="@/assets/icons/menu.svg" alt="" class="nav__btn">
          </router-link>

          <router-link to="/gallery">
            <img src="@/assets/icons/gallery.svg" alt="" class="nav__btn">
          </router-link>
        </div>
        <img src="@/assets/icons/trash.svg" alt="" class="nav__btn"
             @click="removeNote"
        >
      </div>
      <div class="nav__right-block nav__block">
        <div class="nav__icon-group">
          <img src="@/assets/icons/edit.svg" alt="" class="nav__btn"
               @click="createNewNote"
          >
          <img src="@/assets/icons/check_list.svg" alt="" class="nav__btn"
            @click="listMode"
          >
        </div>
        <search-bar></search-bar>
      </div>
    </div>
  </div>

</template>

<script>
import SearchBar from "@/components/UI/SearchBar";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "NavBar",
  components: {SearchBar},
  data() {
    return {
      menuSvg: require('@/assets/icons/menu.svg')
    }
  },
  methods: {
    ...mapMutations({
      setCurrentNote: 'setCurrentNote',
      setNotes: 'setNotes',
      clearCurrentNote: 'setCurrentNote'
    }),
    ...mapActions({
      setLocalStorage: 'setLocalStorage'
    }),

    removeNote() {
      this.setNotes([...this.notes].filter(i => i.id !== this.currentNote.id))
      this.setCurrentNote(
          this.notes[this.notes.length - 1]
      )
      this.setLocalStorage()
    },

    listMode() {
      if (Object.keys(this.currentNote).length !== 0)
        this.emitter.emit('toggle-list')
    },
    createNewNote() {
      const note = {
        id: (~~(Math.random()*1e8)).toString(16),
        title: 'Новая заметка',
        body: 'Нет дополнительного текста',
        createDate: new Date(),
        editDate: new Date(),
        html: '',
        text: ['']
      }
      this.setCurrentNote(note)
      this.setNotes([...this.notes, note])
      this.setLocalStorage()

    },

  },
  computed: {
    ...mapState({
      notes: state => state.notes,
      currentNote: state => state.currentNote
    }),
  }

}
</script>

<style scoped lang="sass">
  @import "../assets/css/var"
  .nav
    height: 60px
    display: flex
    align-items: center
    background: $block-bg

    margin-bottom: 17px

    &__body
      display: flex

      height: 100%


    &__left-block


      border-right: 1px solid $secondary-text-color
      padding-right: 19px

    &__right-block
      padding-left: 19px
      width: 100%

    &__block
      height: 100%
      align-items: center
      display: flex
      justify-content: space-between

    &__icon-group > * + *
      margin-left: 19px

    &__btn

      fill: violet
      transition: .3s ease
      cursor: pointer















</style>