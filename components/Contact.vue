<template>
    <div id="navigation">
      <nav
        ref="circular-menu"
        class="circular-menu"
      >
        <div
          ref="circle"
          :class="isVisible ? 'circle' : 'open'"
        >
          <a
            ref="gmail"
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            @click="gmail"
          >
            <img
              id="gmail"
              alt="gmail"
              width="200"
              height="150"
              src="~assets/images/Gmail-BW.png"
            />
          </a>
          <a
            ref="linked"
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            @click="linked"
          >
            <img
              id="linked"
              alt="linked"
              width="65"
              height="65"
              src="~assets/images/LinkedIn.png"
            />
          </a>
          <a
            ref="github"
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            @click="github"
          >
            <img
              id="github"
              alt="github"
              width="50"
              height="50"
              src="~assets/images/GitHub.png"
            />
          </a>
          <a
            ref="ig"
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            @click="instagram"
          >
            <img
              id="ig"
              alt="ig"
              width="40"
              height="40"
              src="~assets/images/Instagram.png"
            />
          </a>
          <a
            ref="facebook"
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            @click="facebook"
          >
            <img
              id="facebook"
              alt="facebook"
              width="30"
              height="40"
              src="~assets/images/Facebook.png"
            />
          </a>
          <a
            ref="twitter"
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            @click="twitter"
          >
            <img
              id="twitter"
              alt="twitter"
              width="30"
              height="30"
              src="~assets/images/Twitter.png"
            />
          </a>
          <a
            ref="social"
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            @click="youtube"
          >
            <img
              alt="youtube"
              width="30"
              height="30"
              src="~assets/images/YouTuber.png"
            />
          </a>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'navigation',
    props: {
      isVisible: {
        required: true,
        type: Boolean
      }
    },
    methods: {
      handleChildClick (e) {
        return e.stopPropagation()
      },
  
      gmail () {
        window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=candacerogers114@gmail.com'
      },
  
      linked () {
        window.location.href = 'https://www.linkedin.com/in/candacerogue/'
      },
  
      github () {
        window.location.href = 'https://github.com/candacerogue'
      },
  
      instagram () {
        window.location.href = 'https://www.instagram.com/candacerogue/'
      },
  
      facebook () {
        window.location.href = 'https://www.facebook.com/iamcandacerogue'
      },
  
      twitter () {
        window.location.href = 'https://twitter.com/candacerogue'
      },
  
      youtube () {
        window.location.href = 'https://www.youtube.com/candacerogue'
      }
    }
  }
  </script>
  
  <style lang="scss">
  @import '~/stylesheets/components/_navigation.scss'
  </style>
  