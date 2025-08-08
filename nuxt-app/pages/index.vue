<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        <p v-if="post.date">{{ new Date(post.date).toLocaleDateString() }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').sort({ date: -1 }).find()
)
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 1.5rem;
}
li a {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
