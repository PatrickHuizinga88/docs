---
layout: page
---

<div class="container mt-16">
    <div class="flex justify-between items-center">
        <h1 class="text-3xl font-semibold">✊🏼 Hop hop, gas d'r op!</h1>
        <SwitchGroup>
            <div class="flex items-center">
                <SwitchLabel class="mr-4">Dev Mode</SwitchLabel>
                <Switch
                    v-model="devMode"
                    :class="devMode ? 'bg-primary' : 'bg-white/10'"
                    class="relative inline-flex h-6 w-11 items-center rounded-full"
                >
                    <span
                        :class="devMode ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                    />
                </Switch>
            </div>
        </SwitchGroup>
    </div>
    <div class="py-10">
        <template v-if="devMode">
            <div v-if="devBookmarks.js.length" class="mb-8">
                <h2 class="text-xl font-semibold mb-4">JavaScript</h2>
                <ul class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                    <li v-for="bookmark in devBookmarks.js" class="group h-32 shadow-md bg-[#252529] rounded-xl hover:bg-[#313136] hover:shadow-2xl hover:shadow-indigo-500/25 duration-200">
                        <a :href="bookmark.link" target="_blank" class="flex flex-col justify-center items-center h-full w-full text-neutral-400 text-center text-sm font-semibold p-4 group-hover:text-white duration-200">
                            <img :src="withBase(`/icons/${bookmark.icon}.svg`)" :alt="bookmark.icon" class="h-14 mb-4">
                            {{ bookmark.name }}
                        </a>
                    </li>
                </ul>
            </div>
            <div v-if="devBookmarks.styling.length" class="mb-8">
                <h2 class="text-xl font-semibold mb-4">Styling</h2>
                <ul class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                    <li v-for="bookmark in devBookmarks.styling" class="group h-32 shadow-md bg-[#252529] rounded-xl hover:bg-[#313136] hover:shadow-2xl hover:shadow-indigo-500/25 duration-200">
                        <a :href="bookmark.link" target="_blank" class="flex flex-col justify-center items-center h-full w-full text-neutral-400 text-center text-sm font-semibold p-4 group-hover:text-white duration-200">
                            <img :src="withBase(`/icons/${bookmark.icon}.svg`)" :alt="bookmark.icon" class="h-14 mb-4">
                            {{ bookmark.name }}
                        </a>
                    </li>
                </ul>
            </div>
            <div v-if="devBookmarks.other.length">
                <h2 class="text-xl font-semibold mb-4">Other</h2>
                <ul class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                    <li v-for="bookmark in devBookmarks.other" class="group h-32 shadow-md bg-[#252529] rounded-xl hover:bg-[#313136] hover:shadow-2xl hover:shadow-indigo-500/25 duration-200">
                        <a :href="bookmark.link" target="_blank" class="flex flex-col justify-center items-center h-full w-full text-neutral-400 text-center text-sm font-semibold p-4 group-hover:text-white duration-200">
                            <img :src="withBase(`/icons/${bookmark.icon}.svg`)" :alt="bookmark.icon" class="h-14 mb-4">
                            {{ bookmark.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </template>
        <template v-else>
            <ul v-if="bookmarks.length" class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                <li v-for="bookmark in bookmarks" class="group h-32 shadow-md bg-[#252529] rounded-xl hover:bg-[#313136] hover:shadow-2xl hover:shadow-indigo-500/25 duration-200">
                    <a :href="bookmark.link" target="_blank" class="flex flex-col justify-center items-center h-full w-full text-neutral-400 text-center text-sm font-semibold p-4 group-hover:text-white duration-200">
                        <img :src="withBase(`/icons/${bookmark.icon}.svg`)" :alt="bookmark.icon" class="h-14 mb-4">
                        {{ bookmark.name }}
                    </a>
                </li>
            </ul>
            <span v-else>
                No bookmarks found!
            </span>
        </template>
    </div>
</div>


<script setup>
import { ref, onMounted, watch } from 'vue'
import { withBase } from 'vitepress'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const devBookmarks = {
    js: [
        { name: 'Vue', link: 'https://vuejs.org/guide/introduction', icon: 'vue' },
        { name: 'Nuxt', link: 'https://nuxt.com/docs', icon: 'nuxt' },
        { name: 'Headless UI', link: 'https://headlessui.com/vue/menu', icon: 'headless-ui' },
    ],
    styling: [
        { name: 'Tailwind CSS', link: 'https://tailwindcss.com/docs/customizing-colors', icon: 'tailwind-css' },
        { name: 'Tailwind UI', link: 'https://tailwindui.com/components#product-marketing', icon: 'tailwind-ui' },
        { name: 'Heroicons', link: 'https://heroicons.com', icon: 'heroicons' },
    ],
    other: [

    ]
}

const bookmarks = [
    { name: 'YouTube', link: 'https://www.youtube.com/', icon: 'youtube'},
    { name: 'Tweakers', link: 'https://www.tweakers.net/', icon: 'tweakers'},
    { name: 'Pinterest', link: 'https://www.pinterest.com/', icon: 'pinterest'},
]

const devMode = ref(false)

onMounted(() => {
    devMode.value = JSON.parse(localStorage.getItem("devMode"));
})

watch(devMode, (newMode, oldMode) => {
    if (newMode != oldMode) {
        localStorage.setItem("devMode", newMode)
    }
})
</script>