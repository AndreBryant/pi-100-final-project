import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PI 100 Final Project",
  description: "A site about a particular aspect of Rizal's Life.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Rizal', link: '/subfolder/sub1' },
      { text: 'Jack the Ripper', link: '/subfolder/sub1' },
      { text: 'Hitler\'s Father', link: '/subfolder/sub1' },
      { text: 'Tallano Gold Conspiracy', link: '/subfolder/sub1' }
    ],

    sidebar: [
      {
        text: 'Who is Rizal?',
        items: [
          { text: 'Sub Folder Page 1', link: '/subfolder/sub1' },
          { text: 'Sub Folder Page 2', link: '/subfolder/sub2' }
        ]
      },
      {
        text: 'Jack the Ripper Conspiracy',
        items: [
          { text: 'Sub Folder Page 1', link: '/subfolder/sub1' },
          { text: 'Sub Folder Page 2', link: '/subfolder/sub2' }
        ]
      }, 
      {
        text: 'Hitler\'s Father',
        items: [
          { text: 'Sub Folder Page 1', link: '/subfolder/sub1' },
          { text: 'Sub Folder Page 2', link: '/subfolder/sub2' }
        ]
      }, 
      {
        text: 'Tallano Gold Conspiracy',
        items: [
          { text: 'Sub Folder Page 1', link: '/subfolder/sub1' },
          { text: 'Sub Folder Page 2', link: '/subfolder/sub2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
