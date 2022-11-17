/**
 * CMS Configuration
 * Alter 'netlify' in the import statment below to one of the following:
 * netlify
 */
import theCMS from '../cms/netlify/cms'

/**
 * General Site configurations
 */
export default {
  siteName: 'FINBLockchain Blog',
  tagline: ' Crypto and Blockchain developments for investment advisors. ',
  siteLead: 'Blog for research in Compliance, Crypto, Custody, and more',
  featureImage: '/uploads/home-hero.jpg',
  logo: '/logo.png', // 'logo-component', // or '/logo.svg' for regular image
  googleAnalytics: {
    on: true,
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  mainMenu: [
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
    {
      name: 'Categories',
      link: '/categories'
    }
  ],
  hero: {
    theme: 'dark' // options: mist, light, dark
  },

  // Main Layout/Style
  layout: {
    width: 'contained', // Options: contained, full
    theme: 'one-column' // Options: one-column, sidebar-right, sidebar-left
  },

  // Card Layout
  cards: {
    imageDimensions: '2x1', // Options: 1x1, 5x4, 4x3, 3x2, 5x3, 16x9, 2x1, 3x1, 4x5, 3x4, 2x3, 3x5, 9x16
    theme: 'boxes' // Options: boxes, grid, image-grid
  },

  // Disqus
  disqus: {
    on: true,
    loadingStrategy: 'button', // Options: onload, lazy, button
    siteShortName: '' // 'blog-danielkelly-io'
  },

  // Newsletter Subscribe
  newsletter: {
    on: true,
    heading: 'Sign Up for Newsletter',
    btnText: 'Subscribe',
    // Can be the form action on a mail chimp form, a hubspot form,
    // or any other url you want to post the form data to
    mailchimp: {
      on: false,
      formAction: ''
    },
    custom: {
      on: true,
      formAction:
        'https://9f53a99c.sibforms.com/serve/MUIEAGkZtd4jirlW0oLOKnPl6vR6_ugb-gRMLqZgv_hoCTie7dwlHzsQEahDbjWToXCJjgoDkyTyA7kOl5DflMTKc6fHuhf_-UKJCnnDbbkow8U0XTK__6Mk2pSeMEhvk36Hf4qm-XEg1aUnUssB2urhKC57muaqik1vP1YJMjjypA5oFapRRYFQAZy1tvlDuX-7W-aS_qbQk-OV'
    }
  },

  // Categories
  categories: {
    on: true,
    perPage: 6,
    imageDimensions: null, // See card.imageDimensions (can be unique for categories if set here)
    theme: null // See card.theme (can be unique for categories if set here)
  },

  // Posts
  posts: {
    on: true,
    theme: null, // See card.theme (can be unique for posts if set here)
    imageDimensions: null, // See card.imageDimensions (can be unique for posts if set here)
    displayAuthor: true,
    date: {
      display: true
    },
    perRow: 3,
    perPage: 6
  }
}

export const CMS = theCMS
