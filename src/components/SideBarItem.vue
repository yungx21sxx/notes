<template>
  <div class="sidebar__item"
       :class="{
          'active': currentNote.id === note.id
        }"
  >
    <div class="sidebar__hover-overlay">

      <div class="sidebar__title">{{optStr(note.title, 17)}}</div>
      <div class="sidebar__footer">
        <div class="sidebar__date">
          {{getDate(note.editDate)}}
        </div>
        <div class="sidebar__body">
          {{optStr(note.body, 26)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "SideBarItem",
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    optStr: (str, length = 14) => {
      if (str.length > length)
        return str.slice(0,length).concat('...')
      else
        return str
    },
    getDate(editDate) {
      const date = new Date(editDate)
      const today = new Date()
      const dateArr = [date.getDate(), date.getMonth(), date.getFullYear()]
      const todayArr = [today.getDate(), today.getMonth(), today.getFullYear()]

      if (JSON.stringify(dateArr) === JSON.stringify(todayArr)) {
        return [
          date.getHours(),
          date.getMinutes()
        ].map(i => (i < 10) ? '0' + i : i).join(':')
      }
      return dateArr.map(i => (i < 10) ? '0' + i : i).join('.')
    },
    ...mapMutations({
      setCurrentNote: 'setCurrentNote',
    }),

  },
  computed: {
    ...mapState({
      currentNote: state => state.currentNote
    }),
  }


}
</script>

<style scoped lang="sass">

@import "../assets/css/var"
.sidebar

  &__item
    margin-bottom: 6px
    cursor: pointer

  &__item.active

    .sidebar__hover-overlay
      background: $hover-bg
      border-radius: 7px

    .sidebar__footer
      border-bottom: 0


  &__hover-overlay
    padding: 10px 15px
    transition: .3s ease

  &__title
    font-size: 17px
    font-weight: bold
    letter-spacing: 1px
    color: white
    margin-bottom: 6px

  &__footer
    display: flex
    border-bottom: 1px solid $secondary-text-color
    align-items: flex-end
    padding-bottom: 7px
    transition: .3s ease


  &__date
    font-size: 14px
    color: white
    font-weight: 200
    margin-right: 5px

  &__body
    color: $secondary-text-color
    font-size: 10px
</style>