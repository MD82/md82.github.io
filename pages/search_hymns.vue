<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">새찬송가 {{ currentHymnId }}장</h1>

    <!-- 악보 이미지 표시 -->
    <div class="mb-8 flex justify-center">
      <img
        :src="`/hymns/${currentHymnId}.jpg`"
        :alt="`새찬송가 ${currentHymnId}장 악보`"
        class="max-w-full h-auto border border-gray-300 rounded shadow-lg"
        @error="handleImageError"
      />
    </div>

    <!-- 찬송가 리스트 (페이지네이션) -->
    <div class="mt-8">
      <div class="flex items-center gap-4 mb-4">
        <h2 class="text-xl font-semibold">찬송가 목록</h2>
        <input
          v-model="jumpToNumber"
          type="number"
          min="1"
          max="645"
          placeholder="번호 입력"
          @keyup.enter="jumpToHymn"
          class="w-24 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 gap-2">
        <button
          v-for="hymnNumber in totalHymns"
          :key="hymnNumber"
          @click="goToHymn(hymnNumber)"
          :class="[
            'p-2 rounded border transition-colors',
            hymnNumber === currentHymnId
              ? 'bg-blue-500 text-white border-blue-600'
              : 'bg-white hover:bg-gray-100 border-gray-300'
          ]"
        >
          {{ hymnNumber }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const totalHymns = 3;
const jumpToNumber = ref('');

// 현재 찬송가 번호 (URL 파라미터 또는 기본값 1)
const currentHymnId = computed(() => {
  const id = parseInt(route.params.id) || (parseInt(route.query.page) || 1);
  return id >= 1 && id <= totalHymns ? id : 1;
});

// 찬송가 번호를 클릭했을 때 해당 페이지로 이동
const goToHymn = (hymnNumber) => {
  router.push({ path: `/search_hymns/${hymnNumber}` });
};

// 입력된 번호로 이동
const jumpToHymn = () => {
  const number = parseInt(jumpToNumber.value);
  if (number >= 1 && number <= totalHymns) {
    router.push({ path: `/search_hymns/${number}` });
    jumpToNumber.value = '';
  }
};

// 이미지 로드 실패 시 처리
const handleImageError = (event) => {
  event.target.src = '/hymns/placeholder.svg'; // 플레이스홀더 이미지
  event.target.alt = '악보 이미지를 불러올 수 없습니다';
};
</script>