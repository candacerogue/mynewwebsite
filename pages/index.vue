<template>
  <div class="page-content">
    <div
      v-if="!isClicked"
      @click="isClicked = true"
    >
      <entrance />
    </div>
    <div
      v-else
    >
      <home />
    </div>
  </div>
</template>

<script>
import Entrance from '~/components/Entrance.vue'
import Home from '~/pages/Home.vue'

export default {
  components: {
    Entrance,
    Home
  },

  data () {
    return {
      isClicked: false
    }
  }

  // computed: {
  //   isClicked () {
  //     console.log('clicked!')
  //     return (this.clicked === true || this.clicked === false)
  //   }
  // }
}
</script>

<style lang="scss">
</style>
