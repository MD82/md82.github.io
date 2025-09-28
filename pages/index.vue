<template>
  <div class="max-w-4xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center mb-16">
      <h1 class="text-5xl font-bold text-slate-900 mb-4">워시퍼의 하루</h1>
      <p class="text-xl text-slate-600 mb-8">기술, 신앙, 그리고 일상에 대한 생각들을 기록합니다</p>
      <NuxtLink to="/blog" class="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors duration-200">
        블로그 보기
      </NuxtLink>
    </section>

    <!-- Recent Posts -->
    <section>
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-slate-800">최근 포스트</h2>
        <NuxtLink to="/blog" class="text-sky-600 hover:text-sky-800 font-medium">
          모든 포스트 보기 &rarr;
        </NuxtLink>
      </div>

      <div v-if="pending" class="text-center py-8">
        <p class="text-slate-500">포스트를 불러오는 중...</p>
      </div>
      <div v-else-if="error" class="text-center py-8">
        <p class="text-red-500">포스트를 불러오는데 실패했습니다.</p>
      </div>
      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="post in recentPosts" :key="post._path" class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
          <div class="p-6">
            <p class="text-slate-500 text-sm mb-2">
              <time :datetime="post.date">{{ formattedDate(post.date) }}</time>
            </p>
            <h3 class="text-xl font-semibold text-slate-800 mb-3 line-clamp-2">
              <NuxtLink :to="post._path" class="hover:text-sky-600 transition-colors duration-200">
                {{ post.title }}
              </NuxtLink>
            </h3>
            <p v-if="post.description" class="text-slate-600 text-sm mb-4 line-clamp-3">
              {{ post.description }}
            </p>
            <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in post.tags.slice(0, 3)" :key="tag" class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                {{ tag }}
              </span>
            </div>
            <NuxtLink :to="post._path" class="text-sky-600 hover:text-sky-800 text-sm font-medium">
              읽어보기 &rarr;
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch recent blog posts
const { data: posts, pending, error } = await useAsyncData('recent-posts', () =>
  queryContent('/blog')
    .where({ published: { $ne: false } })
    .sort({ date: -1 })
    .limit(6)
    .find()
)

// Get only the 6 most recent posts
const recentPosts = computed(() => posts.value || [])

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

// SEO
useHead({
  title: '워시퍼의 하루 - 개발자의 일상과 기술 블로그',
  meta: [
    { name: 'description', content: '개발자 MD워시퍼의 기술, 신앙, 일상에 대한 생각들을 기록하는 개인 블로그입니다.' }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
