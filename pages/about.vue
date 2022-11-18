<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="About Us"
      subtitle="Crypto and Blockchain industry developments for investment advisors."
      lead="Blog for research in Compliance, Crypto, Custody, and more"
      image="/uploads/home-hero.jpg"
    >
      <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Sign Up for Newsletter
      </button>
    </site-hero>
    <news-letter-form-modal />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h2>What We Do</h2>
          <p>
            According to a 2022 Cerulli Associates study, about 45% of advisors
            say they expect to use cryptocurrencies in the future based on
            client requests, but just 7% of advisors say they are currently
            using these assets based on their own recommendations, and 10% are
            using it because of client requests – and others remain on the
            sidelines due to lack of regulation prevents further involvement.
          </p>
          <br />
          <quote-card />
          <br />
          <p>
            With the support of partners,
            <a href="fincompliance.io">FIN Compliance</a> and
            <a href="finlancer.io">FIN Lancer</a>, we provide our network of
            advisors with resources to address regulatory challenges of
            integrating blockchain technology and cryptocurrency assets its
            business model for future growth.
          </p>
        </div>
        <div class="content">
          <h3>Partners</h3>
        </div>
        <div class="columns is-ancestor is-vcentered">
          <div class="column is-half is-parent h-100">
            <article class="tile is-child box">
              <p class="title">
                Compliance
              </p>
              <p class="subtitle">
                For compliance and suitability solutions.
              </p>
              <figure class="image">
                <opti-image
                  :src="require('~/assets/uploads/fincompliance.jpg').src"
                  :srcset="require('~/assets/uploads/fincompliance.jpg').srcSet"
                />
              </figure>
            </article>
          </div>
          <div class="column is-half is-parent h-100">
            <article class="tile is-child box">
              <p class="title">
                Technology/Integrations
              </p>
              <p class="subtitle">
                For integration and implementation support.
              </p>
              <figure class="image">
                <opti-image
                  :src="require('~/assets/uploads/finlancer.jpg').src"
                  :srcset="require('~/assets/uploads/finlancer.jpg').srcSet"
                />
              </figure>
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h4 class="subtitle is-4">
          Latest Posts
        </h4>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import NewsLetterFormModal from '~/components/NewsLetterFormModal'
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    QuoteCard,
    NewsLetterFormModal
  }
}
</script>

<style>
.card-footer {
  display: none;
}
h4 {
  font-size: large;
}
.image {
  width: 100%;
  height: auto;
}
.columns.is-ancestor {
  height: auto;
}
.is-parent {
  height: 100%;
}
.about-page .under-subtitle {
  border-top: none;
}
</style>
