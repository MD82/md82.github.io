<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">새찬송가 {{ hymnId }}장</h1>
    <p>새찬송가 {{ hymnId }}장의 악보가 여기에 표시됩니다. (현재는 더미 데이터입니다.)</p>
    <!-- 악보 이미지나 악보 표시 UI가 들어갈 곳 -->
  </div>
</template>

<script setup>
// URL 파라미터에서 id 값을 가져옵니다.
const route = useRoute();
const hymnId = computed(() => route.params.id);

// 실제로는 여기서 해당 id에 맞는 악보 데이터를 가져와서 표시해야 합니다.
// 예시로 더미 데이터 사용
definePageMeta({
  // 필요시 레이아웃 지정
});
</script>