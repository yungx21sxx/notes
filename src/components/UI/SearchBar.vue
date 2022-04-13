
<template>
  <div class="search-bar">
    <img src="@/assets/icons/search.svg" alt="" class="search-bar__img">
    <input class="search-bar__input" @input="search" :value="searchQuery">
  </div>
</template>

<script>

import {mapMutations, mapState} from "vuex";

export default {

  name: "SearchBar",
  methods: {
    search(event) {
      this.setSearchQuery(event.target.value)
    },
    ...mapMutations({
      setSearchQuery: 'setSearchQuery'
    })
  },
  computed: {
    ...mapState({
      searchQuery: state => state.searchQuery
    })
  }


}
</script>

<style scoped lang="sass">
@import "../../assets/css/var"

.search-bar
  width: 340px
  background: $hover-bg
  border-radius: 15px
  height: 30px
  display: flex
  align-items: center
  justify-content: space-between

  padding: 8px 13px
  border: 1px solid $secondary-text-color

  &__input
    background: none
    outline: none
    border: none
    color: white
    width: 100%

    padding-left: 8px


</style>