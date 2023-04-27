---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Knowledge hub"
  text: "Personal front-end documentation"
  tagline: Guides, components and more
  actions:
    - theme: brand
      text: Components
      link: /components/
    - theme: alt
      text: Guides
      link: /guides/

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div class="container max-w-6xl py-6">
  <h1 class="text-3xl font-bold border-t border-neutral-700 py-12">🚀 Quick access</h1>
  <ul class="flex flex-wrap gap-6">
    <li v-for="bookmark in bookmarks" class="group h-32 w-32 shadow-md bg-[#252529] rounded-xl hover:bg-[#313136] hover:shadow-2xl hover:shadow-indigo-500/25 duration-200">
      <a :href="bookmark.link" target="_blank" class="flex flex-col justify-center items-center h-full w-full text-neutral-400 text-center text-sm font-semibold p-4 group-hover:text-white duration-200">
        <img :src="`/icons/${bookmark.icon}.svg`" :alt="bookmark.icon" class="h-14 mb-4">
        {{ bookmark.name }}
      </a>
    </li>
  </ul>
</div>

<script setup>
const bookmarks = [
  { name: 'Vue', link: 'https://vuejs.org/guide/introduction', icon: 'vue' },
  { name: 'Nuxt', link: 'https://nuxt.com/docs', icon: 'nuxt' },
  { name: 'Tailwind CSS', link: 'https://tailwindcss.com/docs/customizing-colors', icon: 'tailwind-css' },
  { name: 'Tailwind UI', link: 'https://tailwindui.com/components#product-marketing', icon: 'tailwind-ui' },
  { name: 'Headless UI', link: 'https://headlessui.com/vue/menu', icon: 'headless-ui' },
  { name: 'Heroicons', link: 'https://heroicons.com', icon: 'heroicons' },
]

</script>