<template>

  <div class="px-6 py-12">
    <!-- Page Title -->
    <h1 class="text-5xl font-bold text-center text-purple-900 mb-10">
     ✨ Discover Pre-loved Styles 🧥
    </h1>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center 
        hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-200"
      >
        <!-- Product Image -->
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-60 object-cover rounded-xl mb-4"
        />

        <!-- Name -->
        <h2 class="text-xl font-semibold text-gray-800 mb-1 text-center">
          {{ product.name }}
        </h2>

        <!-- Price -->
        <p class="text-lg text-purple-700 font-bold mb-2">
          ₱{{ product.price }}
        </p>

        <!-- Description -->
        <p class="text-sm text-gray-500 mb-4 text-center">
          {{ product.description }}
        </p>

        <!-- Add to Cart Button -->
        <button
          class="mt-auto bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-800 transition"
          @click="addToCart(product)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'Vintage Denim Jacket',
    price: 750,
    description: 'A classic oversized denim piece.',
    image: '/images/d-jacket-1.jpg'
  },
  {
    id: 2,
    name: 'Retro Floral Dress',
    price: 650,
    description: 'Chic and breezy — perfect for sunny days.',
    image: '/images/floral-dress-2.jpg'
  },
  {
    id: 3,
    name: 'Graphic Tee',
    price: 300,
    description: 'Comfortable cotton tee with vintage print.',
    image: '/images/graphic-tee-1.jpg'
  },
  {
    id: 4,
    name: 'Corduroy Pants',
    price: 550,
    description: 'Earth-tone bottoms with a relaxed fit.',
    image: '/images/pants.jpg'
  },

])

function addToCart(product) {
  console.log('Added to cart:', product.name)
}
</script>

 
