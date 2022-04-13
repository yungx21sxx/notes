<template>
  <div>
    <router-link :to="route ? route : $router.currentRoute" class="link">
      <object type="image/svg+xml" :data="icon" class="icon">
      </object>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "MenuBtn",
  props: {
    icon: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: false
    }

  },
  data() {
    return {

    }

  },
  mounted() {
  }
}
</script>

<style scoped lang="sass">
  @import "../../assets/css/var"


  .icon
    width: 30px
    height: 30px
    transition: .3s ease
    fill: #387DE9







</style>