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
    <div v-else class="space-y-12">
      <article v-for="post in posts" :key="post._path">
        <p class="text-slate-500 text-sm">
          <time :datetime="post.date">{{ formattedDate(post.date) }}</time>
        </p>
        <h2 class="mt-2 text-2xl font-bold text-slate-800 hover:text-sky-600 transition-colors duration-200">
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </h2>
        <p v-if="post.description" class="mt-3 text-slate-600">
          {{ post.description }}
        </p>
        <NuxtLink :to="post._path" class="mt-4 inline-block text-sky-600 font-semibold hover:text-sky-800">
          Read more &rarr;
        </NuxtLink>
      </article>
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
</script>