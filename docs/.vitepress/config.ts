import { defineConfig } from 'vitepress'

const guidesSidebar = [
  { 
    text: 'Vue', 
    items: [
      { text: 'Installing Vue', link: '/guides/vue/installation' }
    ]
  },
  { 
    text: 'Nuxt', 
    items: [
      { text: 'Installing Nuxt', link: '/guides/nuxt/installation' }
    ]
  },
  { 
    text: 'Tailwind CSS', 
    items: [
      { text: 'Installing Tailwind CSS', link: '/guides/tailwind-css/installation' },
    ]
  },
  { 
    text: 'CSS', 
    items: [
      { text: 'Media queries', link: '/guides/css/media-queries' }
    ]
  },
  { 
    text: 'JavaScript', 
    items: [
      { text: '', link: '' }
    ]
  },
  { 
    text: 'GitHub', 
    items: [
      { text: 'Deploy to GitHub pages', link: '/guides/github/github-pages' }
    ]
  },
]

const componentsSidebar = [
  { 
    text: 'General components', 
    items: [
      { text: 'Accordion', link: '/components/accordion' },
      { text: 'Dropdown', link: '/components/dropdown' },
      { text: 'Modal', link: '/components/modal' },
      { text: 'Tabs', link: '/components/tabs' },
      { text: 'Toast', link: '/components/toast' },
      { text: 'Tooltip', link: '/components/tooltip' },
    ] 
  },
  { 
    text: 'Form components', 
    items: [
      { text: 'Buttons', link: '/components/form/buttons' },
      { text: 'Checkbox', link: '/components/form/checkbox' },
      { text: 'Input', link: '/components/form/input' },
      { text: 'File input', link: '/components/form/file-input' },
      { text: 'Radio', link: '/components/form/radio' },
      { text: 'Select', link: '/components/form/select' },
      { text: 'Textarea', link: '/components/form/textarea' },
      { text: 'Toggle', link: '/components/form/toggle' },
    ] 
  }
]

const templatesSidebar = [
  {
    text: 'CRUD', 
    items: [
      { text: 'Create', link: '/templates/crud/create' },
      { text: 'Edit', link: '/templates/crud/edit' },
      { text: 'Show', link: '/templates/crud/show' }
    ] 
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  title: "Knowledge hub",
  description: "Personal front-end documentation",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicon/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#6366f1"}],
    ['meta', { name: "msapplication-TileColor", content: "#ffffff"}],
    ['meta', { name: "theme-color", content: "#6366f1"}],
  ],
  themeConfig: {
    logo: { 
      light: '/logo-dark.svg',
      dark: '/logo-light.svg',
      alt: 'Logo'
    },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guides', link: '/guides/' },
      { text: 'Components', link: '/components/' },
      { text: 'Templates', link: '/templates/' }
    ],

    sidebar: {
      '/guides/': guidesSidebar,
      '/components/': componentsSidebar,
      '/templates/': templatesSidebar,

        // text: 'Examples',
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        //   { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      }
    ,

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/PatrickHuizinga88' }
    // ],

    search: {
      provider: 'local'
    }
  }
})
