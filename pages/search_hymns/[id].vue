<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">새찬송가 {{ hymnId }}장</h1>
    
    <!-- 악보 이미지 표시 -->
    <div class="mb-8 flex justify-center">
      <img
        :src="`/hymns/${hymnId}.jpg`"
        :alt="`새찬송가 ${hymnId}장 악보`"
        class="max-w-full h-auto border border-gray-300 rounded shadow-lg"
        @error="handleImageError"
      />
    </div>
    
    <div class="mt-4">
      <NuxtLink :to="`/search_hymns?page=${hymnId}`" class="text-blue-500 hover:underline">
        ← 목록으로 돌아가기
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// URL 파라미터에서 id 값을 가져옵니다.
const hymnId = computed(() => {
  const id = parseInt(route.params.id);
  const totalHymns = 645;
  return id >= 1 && id <= totalHymns ? id : 1;
});

// 이미지 로드 실패 시 처리
const handleImageError = (event) => {
  event.target.src = '/hymns/placeholder.svg'; // 플레이스홀더 이미지
  event.target.alt = '악보 이미지를 불러올 수 없습니다';
};

definePageMeta({
  // 필요시 레이아웃 지정
});
</script>