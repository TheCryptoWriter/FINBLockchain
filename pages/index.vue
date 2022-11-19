<template>
  <div id="home-page" class="page-wrapper home-page has-navbar-fixed-top">
    <site-hero
      :title="title"
      :lead="lead"
      :subtitle="subtitle"
      :image="featureImage"
    >
      <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Sign Up for Newsletter
      </button>
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        <section class="section">
          <div class="headings">
            <p class="title">
              News
            </p>
          </div>
        </section>
        <posts-grid />
        <section class="section">
          <div class="headings">
            <p class="title">
              Research
            </p>
          </div>
        </section>
        <categoriesGrid />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import CategoriesGrid from '../components/grids/CategoriesGrid.vue'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    NewsLetterFormModal,
    CategoriesGrid
  },
  computed: {
    ...mapState(['title', 'lead', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
.headings {
  text-align: center;
}
</style>
