---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Knowledge hub"
  text: "Personal front-end documentation"
  tagline: Guides, components and more
  image:
    light:
      src: /hero-coding-light.svg
      alt: Coding
    dark:
      src: /hero-coding-dark.svg
      alt: Coding
  # actions:
  #   - theme: brand
  #     text: Components
  #     link: /components/
  #   - theme: alt
  #     text: Guides
  #     link: /guides/

features:
  # - icon: 📖
  - title: Guides
    details: How-to's for different tools and software
    link: /guides/
  # - icon: 🛠️
  - title: Components
    details: Library of my customized Vue components
    link: /components/
  # - icon: 📝
  - title: Templates
    details: Starter kits for pages I'm using frequently
    link: /templates/
---

<div class="container max-w-6xl py-6">
  <div class="flex justify-between items-center gap-4 border-t border-neutral-700 py-12">
    <h1 class="text-3xl font-bold">🚀 Quick access</h1>
    <a :href="withBase('/quick-access')" class="font-medium text-sm text-indigo-500 py-1 hover:text-indigo-400 duration-150">All tools <span class="text-lg">&#8594;</span></a>
  </div>
  <ul class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
    <li v-for="bookmark in bookmarks" class="group h-32 shadow-md bg-[#252529] rounded-xl hover:bg-[#313136] hover:shadow-2xl hover:shadow-indigo-500/25 duration-200">
      <a :href="bookmark.link" target="_blank" class="flex flex-col justify-center items-center h-full w-full text-neutral-400 text-center text-sm font-semibold p-4 group-hover:text-white duration-200">
        <img :src="withBase(`/icons/${bookmark.icon}.svg`)" :alt="bookmark.icon" class="h-14 mb-4">
        {{ bookmark.name }}
      </a>
    </li>
  </ul>
</div>

<script setup>
import { withBase } from 'vitepress'

const bookmarks = [
  { name: 'Vue', link: 'https://vuejs.org/guide/introduction', icon: 'vue' },
  { name: 'Nuxt', link: 'https://nuxt.com/docs', icon: 'nuxt' },
  { name: 'Tailwind CSS', link: 'https://tailwindcss.com/docs/customizing-colors', icon: 'tailwind-css' },
  { name: 'Tailwind UI', link: 'https://tailwindui.com/components#product-marketing', icon: 'tailwind-ui' },
  { name: 'Headless UI', link: 'https://headlessui.com/vue/menu', icon: 'headless-ui' },
  { name: 'Heroicons', link: 'https://heroicons.com', icon: 'heroicons' },
]
</script>