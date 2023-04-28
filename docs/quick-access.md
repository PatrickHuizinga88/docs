# Quick access

## Documentation

<div class="flex flex-wrap items-end gap-4">
    <div v-for="bookmark in bookmarks" class="group w-32 h-32 shadow-md bg-[#252529] rounded-xl hover:bg-[#313136] hover:shadow-2xl hover:shadow-indigo-500/25 duration-200">
        <a :href="bookmark.link" target="_blank" class="flex flex-col justify-center items-center h-full w-full text-neutral-400 text-center text-sm font-semibold no-underline p-4 group-hover:text-white duration-200">
            <img :src="withBase(`/icons/${bookmark.icon}.svg`)" :alt="bookmark.icon" class="h-14 mb-4">
            {{ bookmark.name }}
        </a>
    </div>
</div>

## Tools

<div class="flex flex-wrap items-end gap-4">
    <div v-for="tool in tools" class="group w-32 h-32 shadow-md bg-[#252529] rounded-xl hover:bg-[#313136] hover:shadow-2xl hover:shadow-indigo-500/25 duration-200">
        <a :href="tool.link" target="_blank" class="flex flex-col justify-center items-center h-full w-full text-neutral-400 text-center text-sm font-semibold p-4 group-hover:text-white duration-200">
            <img :src="withBase(`/icons/${tool.icon}.svg`)" :alt="tool.icon" class="h-14 mb-4">
            {{ tool.name }}
        </a>
    </div>
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

const tools = [
    { name: 'ChatGPT', link: 'https://chat.openai.com/', icon: 'open-ai' },
]
</script>