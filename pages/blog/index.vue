<template>
  <div class="max-w-4xl mx-auto">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-slate-800">Blog</h1>
      <p class="mt-2 text-lg text-slate-600">기술, 신앙, 그리고 일상에 대한 생각들을 기록합니다.</p>
    </header>

    <div v-if="pending" class="text-center">
      <p>Loading posts...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p>Error fetching posts. Please try again later.</p>
    </div>
    <div v-else class="space-y-8">
      <!-- Posts Count -->
      <div class="text-slate-600 text-sm">
        총 {{ posts?.length || 0 }}개의 포스트
      </div>

      <!-- Posts Grid -->
      <div class="space-y-8">
        <article v-for="post in posts" :key="post._path" class="border-b border-slate-200 pb-8 last:border-b-0">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <p class="text-slate-500 text-sm">
              <time :datetime="post.date">{{ formattedDate(post.date) }}</time>
            </p>
            <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-2 mt-2 sm:mt-0">
              <span v-for="tag in post.tags.slice(0, 3)" :key="tag" class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-slate-800 hover:text-sky-600 transition-colors duration-200 mb-3">
            <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
          </h2>
          <p v-if="post.description" class="text-slate-600 mb-4 line-clamp-3">
            {{ post.description }}
          </p>
          <NuxtLink :to="post._path" class="inline-flex items-center text-sky-600 font-semibold hover:text-sky-800 transition-colors duration-200">
            자세히 읽기
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
// `await useAsyncData`를 사용해 빌드 시점에 데이터를 가져옵니다.
const { data: posts, pending, error } = await useAsyncData('blog-posts', () =>
  queryContent('/blog')
    .where({ published: { $ne: false } }) // published가 false가 아닌 모든 글
    .sort({ date: -1 }) // 최신 날짜 순으로 정렬
    .find()
)

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
  title: 'Blog - 워시퍼의 하루',
  meta: [
    { name: 'description', content: '개발자 MD워시퍼의 모든 블로그 포스트를 확인하세요. 기술, 신앙, 일상에 대한 다양한 이야기들을 만나보실 수 있습니다.' }
  ]
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>