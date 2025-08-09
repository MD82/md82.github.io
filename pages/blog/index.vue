<template>
  <div>
    <h1 class="text-4xl font-bold mb-4 pb-4 border-b">Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post._id">
        <NuxtLink :to="post._path" class="group flex justify-between items-center py-4 border-b">
          <!-- Left: Title -->
          <h2 class="text-lg font-semibold text-slate-800 group-hover:text-sky-600 truncate">
            {{ post.title }}
          </h2>

          <!-- Right: Date -->
          <div class="flex items-center ml-4">
            <p class="text-slate-500 text-sm w-32 text-right shrink-0">
              <time :datetime="post.date">{{ formattedDate(post.date) }}</time>
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <!-- 로딩 상태 표시 -->
    <div v-if="isLoading" class="text-center py-8 text-slate-500">
      <p>Loading more posts...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const posts = ref([])
const isLoading = ref(false)
const hasMore = ref(true)
let page = 1

const fetchPosts = async () => {
  if (isLoading.value || !hasMore.value) return

  isLoading.value = true

  const limit = page === 1 ? 10 : 5;
  const skip = page === 1 ? 0 : (10 + (page - 2) * 5);

  try {
    const newPosts = await queryContent('/blog')
      .where({ published: true })
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .find()

    if (newPosts.length > 0) {
      posts.value.push(...newPosts)
      page++
    }

    if (newPosts.length < limit) {
      hasMore.value = false
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
  } finally {
    isLoading.value = false
  }
}

const checkAndLoadMore = async () => {
  // DOM 업데이트를 기다림
  await nextTick()

  // 스크롤바가 없고, 더 불러올 게시물이 있다면 계속 로드
  while (
    hasMore.value &&
    document.documentElement.scrollHeight <= document.documentElement.clientHeight
  ) {
    if (isLoading.value) break; // 혹시 모를 중복 실행 방지
    await fetchPosts()
    await nextTick()
  }
}

const handleScroll = () => {
  // 스크롤 감지 로직을 더 안정적인 documentElement 기준으로 변경
  const isAtBottom = document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 100
  if (isAtBottom) {
    fetchPosts()
  }
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll)
  // 초기 게시물 로드 후, 스크롤바가 없으면 추가 로드
  await fetchPosts()
  checkAndLoadMore()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

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