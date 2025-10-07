<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">찬송가 검색엔진</h1>
    <div class="mb-4">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="찬송가 제목 또는 가사를 입력하세요..." 
        class="w-full md:w-2/3 p-2 border border-gray-300 rounded mr-2"
      />
      <button 
        @click="performSearch" 
        class="mt-2 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        검색
      </button>
    </div>
    <div v-if="results.length > 0">
      <h2 class="text-xl font-semibold">검색 결과:</h2>
      <ul>
        <li v-for="(result, index) in results" :key="index" class="p-2 border-b border-gray-200">
          {{ result.title }} - {{ result.content.substring(0, 100) }}...
        </li>
      </ul>
    </div>
    <div v-else-if="searchQuery && results.length === 0">
      <p>검색 결과가 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
const results = ref([]);

// 실제 검색 로직은 여기에 구현해야 합니다.
// 예시를 위해 간단한 더미 데이터를 사용합니다.
const hymns = [
  { id: 1, title: '찬송가 1장', content: '찬송가 1장의 가사 내용...' },
  { id: 2, title: '찬송가 2장', content: '찬송가 2장의 가사 내용...' },
  { id: 3, title: '찬송가 3장', content: '찬송가 3장의 가사 내용...' },
  // 더 많은 데이터가 필요합니다.
];

const performSearch = () => {
  // 검색 쿼리가 비어있을 경우 결과를 초기화합니다.
  if (!searchQuery.value.trim()) {
    results.value = [];
    return;
  }

  // 간단한 문자열 포함 검색 (대소문자 구분 없음)
  results.value = hymns.filter(hymn => 
    hymn.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    hymn.content.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
};
</script>