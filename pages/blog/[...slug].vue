<template>
  <main class="py-10">
    <div v-if="post" class="max-w-4xl mx-auto px-1 sm:px-6 lg:px-8">
      <!-- "Back to Blog" Link -->
      <div class="mb-8">
        <NuxtLink to="/blog" class="text-sky-600 hover:text-sky-800 transition-colors duration-200">
          &larr; Back to Blog List
        </NuxtLink>
      </div>

      <article>
        <header class="mb-8">
          <!-- Title -->
          <h1 class="text-4xl md:text-3xl font-extrabold text-slate-900 mb-3">
            {{ post.title }}
          </h1>
          <!-- Date -->
          <p class="text-slate-500">
            Posted on <time :datetime="post.date">{{ formattedDate(post.date) }}</time>
          </p>
          <!-- Tags -->
          <div v-if="post.tags && post.tags.length" class="mt-4 flex flex-wrap gap-2">
            <span v-for="tag in post.tags" :key="tag" class="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {{ tag }}
            </span>
          </div>
        </header>

        <!-- Divider -->
        <hr class="my-8">

        <!-- Post Content -->
        <div class="prose prose-lg lg:prose-xl max-w-none">
          <ContentDoc />
        </div>
      </article>
    </div>
    <div v-else class="text-center">
      <p>Post not found.</p>
    </div>
  </main>
</template>

<script setup>
import { useAsyncData, useRoute, useHead } from '#imports'

const route = useRoute()

// Fetch the current post data from the markdown file
const { data: post } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
)

// Set page title and meta description dynamically
useHead({
  title: () => post.value?.title || 'Blog Post',
  meta: [
    { name: 'description', content: () => post.value?.description || 'An article from the blog.' }
  ]
})

// Date formatting function
const formattedDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style>
/* Add some extra vertical spacing for headings within the prose content for better readability */
.prose h2 {
  margin-top: 2.5em;
  margin-bottom: 1.25em;
}
.prose h3 {
  margin-top: 2em;
  margin-bottom: 1em;
}
</style>
