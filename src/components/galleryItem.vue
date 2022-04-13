<template>
  <div class="gallery__item">
    <div class="gallery__html" v-html="note.html"></div>
    <div class="gallery__footer">
      <div class="gallery__title">{{note.title}}</div>
      <div class="gallery__date">{{getDate(note.editDate)}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "galleryItem",
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
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
  }

}
</script>

<style scoped lang="sass">
  @import "../assets/css/var"
  .gallery
    &__item



    &__html
      background: $block-bg
      border-radius: 7px
      padding: 14px 17px
      height: 188px
      color: white
      overflow: hidden
      border: 1px solid $block-bg
      transition: .3s ease
      font-size: 12px
      margin-bottom: 5px
      &:hover
        border: 1px solid $secondary-text-color
        h1
          padding: 0

    &__footer
      text-align: center
      color: $text-color

    &__title
      font-size: 16px
      font-weight: 500

      margin-bottom: 2px

    &__date
      font-size: 14px
      font-weight: 300





</style>