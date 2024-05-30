import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/pi-100-final-project/",
  title: "PI 100 Final Project",
  description: "A site about a particular aspect of Rizal's Life.",
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/rizal-bg-removed.png',
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Debunks', 
        items: [
          { text: 'Jack the Ripper Consipracy', link: '/jack-the-ripper-conspiracy/tldr' }, 
          { text: 'Jose Rizal as Hitler\'s Father', link: '/rizal-as-hitlers-father/background' }
        ]
      },
    ],

    sidebar: [
      {
        text: 'Jack the Ripper Conspiracy', collapsed: false,
        items: [
          { text: 'Overview', link: '/jack-the-ripper-conspiracy/tldr' },
          { text: 'Background', link: '/jack-the-ripper-conspiracy/background' },
          { text: 'Evidence', link: '/jack-the-ripper-conspiracy/evidence'},
          { text: 'Debunking', link: '/jack-the-ripper-conspiracy/debunking' },
          { text: 'Conclusion', link: '/jack-the-ripper-conspiracy/conclusion' },
        ]
      }, 
      {
        text: 'Jose Rizal as Hitler\'s Father', collapsed: false,
        items: [
          { text: 'Background', link: '/rizal-as-hitlers-father/background' },
          { text: 'Evidence', link: '/rizal-as-hitlers-father/evidences'},
          { text: 'Debunking', link: '/rizal-as-hitlers-father/debunking' },
          { text: 'Conclusion', link: '/rizal-as-hitlers-father/conclusion' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AndreBryant/pi-100-final-project' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Submitted by Andre Bryant Bagalso and Zedrick De Guzman',
      copyright: 'PI-100 Final Project'
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css' }]
  ],
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
})