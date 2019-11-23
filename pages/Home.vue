<template>
  <div class="home">
    <div class="card landing">
      <landing />
    </div>
    <div class="card about">
      <about />
    </div>
    <div
      class="card resume"
    />
    <div class="card">
      <h2>Card</h2>
    </div>
    <div class="card">
      <h2>Card</h2>
    </div>
    <div class="card">
      <h2>Card</h2>
    </div>
    <div class="card">
      <h2>Card</h2>
    </div>
    <div class="card">
      <h2>Card</h2>
    </div>
    <div class="card">
      <h2>Card</h2>
    </div>
  </div>
</template>

<script>
import Landing from '~/components/Landing.vue'
import About from '~/pages/About.vue'

export default {
  name: 'home',
  components: {
    Landing,
    About
  }
}
</script>

<style lang="scss">
@import '~/stylesheets/pages/_home.scss'
</style>
