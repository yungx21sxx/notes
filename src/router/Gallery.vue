<template>
  <div class="gallery" v-if="searchedNotes.length > 0">
    <transition-group name="note-list">


      <gallery-item
          v-for="note in searchedNotes"
          :key="note.id"
          :note="note"
          class="gallery__item note-list-item"
          @click="openNote(note)"
      ></gallery-item>
    </transition-group>
  </div>
</template>

<script>
import GalleryItem from "@/components/galleryItem";
import {mapGetters, mapMutations} from "vuex";
export default {

  name: "Gallery",
  components: {GalleryItem},
  computed: {
    ...mapGetters({
      searchedNotes: 'searchedNotes'
    })
  },
  methods: {

    openNote(note) {
      this.setCurrentNote(note)
      this.$router.push('/note/' + note.id)
    },
    ...mapMutations({
      setCurrentNote: 'setCurrentNote'
    })
  },


}
</script>

<style scoped lang="sass">
  .gallery
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 1em

  .note-list-item
    transition: transform .3s ease


  .note-list-enter-from,
  .note-list-leave-to
    opacity: 0
    transform: translateX(30px)

  .note-list-leave-active
    position: absolute




</style>