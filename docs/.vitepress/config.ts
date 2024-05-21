import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/pi-100-final-project/",
  title: "PI 100 Final Project",
  description: "A site about a particular aspect of Rizal's Life.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Rizal', link: '/subfolder/sub1' },
    ],

    sidebar: [
      {
        text: 'Who is Rizal?',
        items: [
          { text: 'Jose Rizal', link: '/rizal/introduction' },
        ]
      },
      {
        text: 'Jack the Ripper Conspiracy',
        items: [
          { text: 'Jack the Ripper Consipracy tl;dr', link: '/jack-the-ripper-conspiracy/tldr' },
          { text: 'Background', link: '/jack-the-ripper-conspiracy/background' },
          { text: 'Evidences Provided', link: '/jack-the-ripper-conspiracy/evidences'},
          { text: 'Debunking', link: '/jack-the-ripper-conspiracy/debunking' },
          { text: 'Conclusion', link: '/jack-the-ripper-conspiracy/conclusion' },
        ]
      }, 
      {
        text: 'Jose Rizal as Hitler\'s Father',
        items: [
          { text: 'Jose Rizal as Hitler\'s father tl;dr', link: '/rizal-as-hitlers-father/tldr' },
          { text: 'Change these in config.ts', link: '/rizal-as-hitlers-father/background' },
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
  }
})
