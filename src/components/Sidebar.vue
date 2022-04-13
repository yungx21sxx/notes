<template>
  <div class="sidebar left-block">
    <transition-group name="note-list">
      <side-bar-item
          class="sidebar__item note-list-item"
          v-for="note in searchedNotes"
          :key="note.id"
          :note="note"
          @click="setCurrentNote(note)"
      ></side-bar-item>
    </transition-group>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";
import SideBarItem from "@/components/SideBarItem";

export default {
  name: "Sidebar",
  components: {SideBarItem},
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      setCurrentNote: 'setCurrentNote',
    }),
  },
  computed: {
    ...mapGetters({
      searchedNotes: 'searchedNotes'
    })
  }
}
</script>

<style scoped lang="sass">
  @import "../assets/css/var"

  .sidebar

    height: calc(100vh - 100px)
    overflow: scroll

  .note-list-item
    transition: transform .3s ease


  .note-list-enter-from,
  .note-list-leave-to
    opacity: 0
    transform: translateX(30px)

  .note-list-leave-active
    position: absolute



</style>