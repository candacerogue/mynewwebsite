<template>
  <div class="portfolio">
    <div
      class="portfolio__title"
      data-text="Portfolio"
    >
      Portfolio
    </div>
    <div class="portfolio__tag"> This is what you came for, right?</div>
    <div class="portfolio__tiles">
      <div
        id="design"
        class="portfolio__tiles__tile"
      >
        <div
          class="design"
          data-text="[ Design ]"
        >
          [ Design ]
        </div>
      </div>
      <div class="portfolio__tiles__tile">
        <div
          class="development"
          data-text="[ Development ]"
        >
          [ Development ]
        </div>
      </div>
      <div class="portfolio__tiles__tile">
        <div
          class="presentations"
          data-text="[ Presentations ]"
        >
          [ Presentations ]
        </div>
      </div>
      <div class="portfolio__tiles__tile">
        <div
          class="art"
          data-text="[ Art ]"
        >
          [ Art ]
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '~/stylesheets/pages/_portfolio.scss'
</style>
