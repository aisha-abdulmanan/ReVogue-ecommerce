<template>
  <nav class="bg-purple-800/100 text-white px-6 py-4 shadow-md">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <!-- Brand -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2 text-3xl font-extrabold tracking-widest hover:opacity-90"
      >
        <span class="text-4xl">🛍️</span>
        <span
          class="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 bg-clip-text text-transparent drop-shadow-[0_5px_9px_rgba(255,255,255,0.2)]"
        >
          ReVogue
        </span>
      </NuxtLink>

      <!-- Navigation Tabs -->
      <ul class="flex gap-6 text-lg font-medium">
        <li>
          <NuxtLink
            to="/"
            :class="[
              'px-4 py-2 rounded-lg hover:underline transition-all',
              route.path === '/' ? 'bg-white text-purple-800 font-bold shadow-md' : ''
            ]"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/product"
            :class="[
              'px-4 py-2 rounded-lg hover:underline transition-all',
              route.path.startsWith('/product') ? 'bg-white text-purple-800 font-bold shadow-md' : ''
            ]"
          >
            Products
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            :class="[
              'px-4 py-2 rounded-lg hover:underline transition-all',
              route.path === '/about' ? 'bg-white text-purple-800 font-bold shadow-md' : ''
            ]"
          >
            About Us
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/login"
            :class="[
              'px-4 py-2 rounded-lg hover:underline transition-all',
              route.path === '/login' ? 'bg-white text-purple-800 font-bold shadow-md' : ''
            ]"
          >
            Login
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/cart"
            :class="[
              'px-4 py-2 rounded-lg hover:underline transition-all',
              route.path === '/cart' ? 'bg-white text-purple-800 font-bold shadow-md' : ''
            ]"
          >
            Cart
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/support"
            :class="[
              'px-4 py-2 rounded-lg hover:underline transition-all',
              route.path === '/support' ? 'bg-white text-purple-800 font-bold shadow-md' : ''
            ]"
          >
            ❓
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
