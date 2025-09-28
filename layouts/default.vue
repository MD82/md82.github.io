<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="container mx-auto px-4 py-10 flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
</script>

<style>
/* Global styles can go here if needed */
</style>
