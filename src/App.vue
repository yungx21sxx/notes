<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="wrapper">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

  </div>

</template>

<script>
import NavBar from "@/components/NavBar";
import {mapActions} from "vuex";
export default {

  components: {NavBar},
  methods: {
    ...mapActions({
      getLocalStorage: 'getLocalStorage'
    })
  },
  mounted() {
    this.getLocalStorage()
  }

}
</script>

<style lang="sass">

@import "assets/css/var"
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')

body
  background: $main-bg
  font-family: 'Roboto', sans-serif

.left-block
  width: 320px
.wrapper
  width: 1100px
  margin: 0 auto
  min-width: 700px
  @media (max-width: 700px)
    margin: 0 20px

*
  margin: 0
  padding: 0
  box-sizing: border-box

.scale-enter-active,
.scale-leave-active
  transition: all 0.2s ease



.scale-enter-from,
.scale-leave-to
  opacity: 0
  transform: scale(0.9)



</style>
