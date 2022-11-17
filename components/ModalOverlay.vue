<template>
  <div
    :class="{
      modal: true,
      'is-active': active,
      'is-closing': closing
    }"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header v-if="title" class="modal-card-head">
        <p class="modal-card-title">
          {{ title }}
        </p>
        <button class="delete" aria-label="close" @click="close()"></button>
      </header>
      <section class="modal-card-body">
        <iframe
          width="540"
          height="305"
          src="https://9f53a99c.sibforms.com/serve/MUIEAGkZtd4jirlW0oLOKnPl6vR6_ugb-gRMLqZgv_hoCTie7dwlHzsQEahDbjWToXCJjgoDkyTyA7kOl5DflMTKc6fHuhf_-UKJCnnDbbkow8U0XTK__6Mk2pSeMEhvk36Hf4qm-XEg1aUnUssB2urhKC57muaqik1vP1YJMjjypA5oFapRRYFQAZy1tvlDuX-7W-aS_qbQk-OV"
          frameborder="0"
          scrolling="auto"
          allowfullscreen
          style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
        >
        </iframe>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
    triggerText: { type: String, default: '' },
    confirmText: { type: String, default: 'Save' },
    footer: { type: Boolean, default: false },
    id: { type: String, required: true }
  },
  data() {
    return {
      active: false,
      closing: false
    }
  },
  created() {
    this.$eventBus.$on(`modal-triggered`, (id) => {
      if (id === this.id) this.active = true
    })
  },
  methods: {
    close() {
      this.closing = true
      setTimeout(() => {
        this.active = false
        this.closing = false
      }, 300)
    }
  }
}
</script>
<style lang="scss" scoped>
iframe {
  height: 305pt;
  width: 540pt;
}
.modal {
  &.is-active {
    .modal-card {
      animation: fadeInDown 0.3s ease;
    }
    .modal-background {
      animation: fadeIn 0.6s ease;
    }
  }
  &.is-closing {
    .modal-card {
      animation: fadeOutUp 0.3s ease;
    }
    .modal-background {
      animation: fadeOut 0.3s ease;
    }
  }
}
</style>
