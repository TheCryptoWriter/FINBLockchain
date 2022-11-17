<template>
  <article
    :class="
      `subscribe-form-wrapper message is-dark subtle-box-shadow ${
        active ? 'active' : ''
      }`
    "
  >
    <div class="message-header">
      <font-awesome-icon
        :icon="active ? 'times' : 'envelope'"
        :aria-label="active ? 'close' : 'open'"
        class="close"
        @click="toggle()"
      />
      <p>{{ header }}</p>
    </div>
    <div class="message-body">
      <iframe
        width="550"
        height="540"
        src="https://9f53a99c.sibforms.com/serve/MUIEAGkZtd4jirlW0oLOKnPl6vR6_ugb-gRMLqZgv_hoCTie7dwlHzsQEahDbjWToXCJjgoDkyTyA7kOl5DflMTKc6fHuhf_-UKJCnnDbbkow8U0XTK__6Mk2pSeMEhvk36Hf4qm-XEg1aUnUssB2urhKC57muaqik1vP1YJMjjypA5oFapRRYFQAZy1tvlDuX-7W-aS_qbQk-OV"
        frameborder="0"
        scrolling="none"
        allowfullscreen
        style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
      ></iframe>
    </div>
  </article>
</template>
<script>
export default {
  name: 'NewsLetterSlideOut',
  components: {},
  data() {
    return {
      active: false
    }
  },
  computed: {
    header() {
      return this.$siteConfig.newsletter.heading || 'Sign Up for Newsletter'
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  }
}
</script>
<style lang="scss" scoped>
iframe {
  width: 550pt;
  height: 540pt;
}
.subscribe-form-wrapper {
  z-index: 3;
  @media (min-width: 500px) {
    position: fixed;
    bottom: 20px;
    right: 0;
    width: 550px;
    transform: translateX(calc(100% - 42px));
    transition: 0.6s ease all;
  }
  @media (max-width: 500px) {
    margin-bottom: 0;
    box-shadow: none;
  }
  .message-header {
    justify-content: start;
    .close {
      margin-right: 16px;
      cursor: pointer;
    }
    @media (max-width: 500px) {
      border-radius: 0;
      .close {
        display: none;
      }
    }
  }

  .message-body {
    height: 0;
    transition: 0.4s ease all;
    transition-delay: 0.6s;
    overflow: hidden;
    padding: 0;
  }
  &.active {
    transform: translateX(0);
    .message-body {
      height: 640px;
      padding: 0px;
    }
  }
}
</style>
