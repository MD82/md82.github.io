<template>
  <header class="bg-slate-900 text-white">
    <nav class="container mx-auto px-4 h-16 flex justify-between items-center">
      <NuxtLink to="/" class="font-bold text-2xl">워시퍼의 하루</NuxtLink>
      
      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span class="sr-only">Open main menu</span>
        <!-- Icon for menu (hamburger) -->
        <svg v-if="!isOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <!-- Icon for close (X) -->
        <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center space-x-4">
        <li><NuxtLink to="/blog" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800">Blog</NuxtLink></li>
        <li><NuxtLink to="/about" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800">About</NuxtLink></li>
      </ul>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden">
      <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <li><NuxtLink to="/blog" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">Blog</NuxtLink></li>
        <li><NuxtLink to="/about" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">About</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>