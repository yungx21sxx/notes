<template>
  <note-preview class="note-preview"></note-preview>
</template>

<script>
import notePreview from "@/components/NotePreview";
export default {
  components: {notePreview},
  name: "NotePage"
}
</script>

<style scoped lang="sass">
  @import "../assets/css/var"
  .note-preview
    background: $block-bg
    border-radius: 7px

    height: calc(100vh - 100px)
    padding: 10px 30px
    overflow: scroll

</style>