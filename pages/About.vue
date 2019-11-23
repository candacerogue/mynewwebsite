<template>
  <div
    id="about"
    class="about"
  >
    <div class="about__identities">
      <div id="open">
        I am a
      </div>
      <img
        class="unicorn"
        alt="unicorn"
        src="~assets/images/Unicorn.png"
        width="100px"
      />
      <div id="identities">
        {{ identities[0] }}
      </div>
      <div class="about-me">
        <p>In my short life, I have experienced so much.</p>
        <p>I've managed a $6 million territory for an international fashion brand.</p>
        <p>I've lived in open gazebos and showered with tarantulas in Nicaragua.</p>
        <p>I now help program all the brand websites for an online media publication reaching as many black millenials as we can.</p>
        <p>There is no paragraph that would dare summarize my entire life and professional experience, but if you're inspired by my work please contact me to learn more or to book services!</p>
        <p id="special">
          Design | Development | Multimedia Artist | Stylist
        </p>
      </div>
      <img
        class="signature"
        alt="signature"
        src="~assets/images/Signature.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      identities: [
        'multimedia artist',
        'graphic designer',
        'ui/ux designer',
        'software engineer',
        'stylist',
        'shower singer',
        'queen of dragon-breath'
      ]
    }
  },
  mounted () {
    window.setInterval(() => {
      this.changeIdentity()
    }, 1000)
  },
  methods: {
    changeIdentity () {
      const first = this.identities.shift()
      this.identities = this.identities.concat(first)
    }
  }
}
</script>

<style lang="scss">
@import '~/stylesheets/pages/_about.scss'
</style>
