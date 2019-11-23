
<template>
  <div id="navigation">
    <nav>
      <div
        id="btnMenu"
        class="btnMenu"
        @click="menu"
      >
        <span
          class="icon_open"
        >
          &equiv;
        </span>
        <span
          class="icon_close"
        >
          &times;
        </span>
      </div>
      <ul
        id="PopUp"
        class="hide"
      >
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            <span class="title">
              About
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            <span class="title">
              Advice
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            <span class="title">
              Resume
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            <span class="title">
              Contact
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            <span class="title">
              Portfolio
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            <span class="title">
              Consultation
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            <span class="title">
              Book Service
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            <span class="title">
              Shop
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'navigation',
  props: {
    isClicked: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    handleChildClick (e) {
      return e.stopPropagation()
    },
    menu () {
      console.log('triggered')
      document.getElementById('btnMenu').getElementsByTagName('span')[0].classList.toggle('i_open')
      document.getElementById('btnMenu').getElementsByTagName('span')[1].classList.toggle('i_close')
      document.getElementById('PopUp').classList.toggle('show')
    }
  }
}
</script>

<style lang="scss">
@import '~/stylesheets/components/_navigation.scss'
</style>
