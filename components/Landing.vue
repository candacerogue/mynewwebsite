<template>
  <div class="landing">
    <div class="landing__logo" />
    <div
      class="landing__menu-button"
      @click="toggleNav()"
    >
      <div :id="idName1" />
      <div :id="idName2" />
      <div :id="idName3" />
    </div>
    <div
      v-if="!isViewportMobile"
      v-show="isClicked"
      class="landing__nav"
    >
      <ul class="landing__nav__menu-items left">
        <a href="#about">
          <li>About</li>
        </a>
        <a
          href="/Resume2019.pdf"
          download
        >
          <li>Resume</li>
        </a>
        <li>Need Advice?</li>
        <li>Contact Me</li>
      </ul>
      <ul class="landing__nav__menu-items right">
        <li>Portfolio</li>
        <li>Need Consultation?</li>
        <li>Book Service</li>
        <li>Shop My Shit</li>
      </ul>
    </div>
    <div
      v-else
      class="landing__navigation"
    >
      <ul class="landing__navigation__menu-items center ">
        <li>About</li>
        <li>Resume</li>
        <li>Advice?</li>
        <li>Contact Me</li>
        <li>Portfolio</li>
        <li>Consultation?</li>
        <li>Services</li>
        <li>Shop</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
      isClicked: false,
      idName1: 'bar1',
      idName2: 'bar2',
      idName3: 'bar3'
    }
  },

  computed: {
    isViewportMobile () {
      return (this.$mq === 'mobile')
    }
  },

  methods: {
    toggleNav () {
      if (this.isClicked === false) {
        this.isClicked = true
        this.idName1 = 'change-bar1'
        this.idName2 = 'change-bar2'
        this.idName3 = 'change-bar3'
      } else {
        this.isClicked = false
        this.idName1 = 'bar1'
        this.idName2 = 'bar2'
        this.idName3 = 'bar3'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/stylesheets/components/_landing.scss'
</style>
