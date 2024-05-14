import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PI 100 Final Project",
  description: "A site about a particular aspect of Rizal's Life.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Sub pages', link: '/subfolder/sub1' }
    ],

    sidebar: [
      {
        text: 'Examples Pages',
        items: [
          { text: 'Sub Folder Page 1', link: '/subfolder/sub1' },
          { text: 'Sub Folder Page 2', link: '/subfolder/sub2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
