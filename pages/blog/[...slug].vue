<template>
  <main class="blog-post">
    <ContentDoc />
  </main>
</template>

<script setup>
// SEO 및 메타 데이터 설정
useHead({
  title: 'Blog Post',
  meta: [
    { name: 'description', content: 'Blog post content' }
  ]
})
</script>

<style scoped>
.blog-post {
  margin-top: 2rem;
  padding: 0 1rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .blog-post {
    margin-top: 1rem;
    padding: 0 0.5rem;
  }
}
</style>
