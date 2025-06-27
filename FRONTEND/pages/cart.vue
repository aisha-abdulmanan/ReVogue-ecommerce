<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-10 lg:px-20">
    <h1 class="text-3xl font-bold text-purple-800 mb-6">🛒 Your Cart</h1>

    <!-- Column Headers -->
    <div v-if="cartItems.length" class="hidden sm:grid grid-cols-6 items-center font-semibold text-gray-700 text-sm mb-2 px-4">
      <span class="col-span-2">Product</span>
      <span class="text-center" >Unit Price</span>
      <span class="text-center">Quantity</span>
      <span class="text-center">Total Price</span>
      <span class="text-center">Action</span>
    </div>

    <!-- Loop through stores -->
    <div v-for="(items, store) in groupedCart" :key="store" class="bg-white rounded-xl shadow p-4 mb-6">
      
      <!-- Store Name -->
      <div class="border-b border-purple-200 pb-2 mb-4">
        <h2 class="text-xl font-semibold text-purple-700">🏬 {{ store }}</h2>
      </div>

      <!-- Store's Items -->
      <div
        v-for="(item, index) in items"
        :key="index"
        class="grid grid-cols-1 sm:grid-cols-6 items-center py-4 px-4 sm:px-4 gap-2 sm:gap-0"
        :class="{ 'border-t border-gray-200': index > 0 }"
      >
        <!-- Checkbox + Product Info -->
        <div class="flex items-start gap-6 col-span-2">
          <input type="checkbox" v-model="item.selected" class="mt-2 w-5 h-5 text-purple-600" />
          <img :src="item.image" alt="Product" class="w-20 h-20 object-cover rounded-md" />
          <div>
            <h2 class="text-base font-medium">{{ item.name }}</h2>
            <p class="text-sm text-gray-400 sm:hidden">₱{{ item.price.toFixed(2) }}</p>
          </div>
        </div>

        <!-- Unit Price -->
        <p class="hidden sm:block text-sm text-gray-700 text-center">₱{{ item.price.toFixed(2) }}</p>

        <!-- Quantity Controls -->
        <div class="flex items-center justify-center gap-2 ml-2">
          <button @click="decreaseQty(item)" class="px-2 py-1 bg-purple-100 rounded hover:bg-purple-200">−</button>
          <span class="min-w-[24px] text-center">{{ item.quantity }}</span>
          <button @click="increaseQty(item)" class="px-2 py-1 bg-purple-100 rounded hover:bg-purple-200">+</button>
        </div>

        <!-- Total Price -->
        <p class="text-sm font-semibold text-gray-800 text-center ml-5">₱{{ (item.price * item.quantity).toFixed(2) }}</p>

        <!-- Action -->
        <div class="flex justify-center items-center ml-5">
          <button
            @click="removeItem(item)"
            class="hover:text-red-600 flex flex-col items-center"
            title="Remove item"
          >
              <img
                src="/images/delete-icon.svg"
                alt="Delete"
                class="w-6 h-6 object-contain"
                />
              <span class="text-sm">Delete</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Empty Cart Message -->
    <!-- Empty Cart Message -->
    <div v-if="!cartItems.length" class="text-center text-gray-500 mt-20">
      <p class="text-2xl font-semibold text-gray-700 mb-4">🧺 Your cart is empty!</p>
      <p class="mb-6 text-lg">Looks like you haven't added anything yet.</p>
    
      <NuxtLink
        to="/product"
        class="inline-block bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-800 transition"
      >
        Shop Now
      </NuxtLink>
    </div>


    <!-- Footer -->
    <div
      v-if="cartItems.length"
      class="fixed bottom-0 left-0 right-0 bg-white shadow-inner py-4 px-6 flex justify-between items-center border-t"
    >
      <p class="text-lg font-semibold text-purple-800">
        Total: ₱{{ total.toFixed(2) }}
      </p>
      <button
        class="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition"
        @click="checkout"
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'

// Items with store name
const cartItems = ref([
  {
    name: 'Vintage Denim Jacket',
    price: 799.99,
    quantity: 1,
    image: '/images/d-jacket-1.jpg',
    store: 'Thrift Store A',
    selected: true,
  },
  {
    name: 'Corduroy Pants',
    price: 499.5,
    quantity: 2,
    image: '/images/pants.jpg',
    store: 'Thrift Store A',
    selected: true,
  },
  {
    name: 'Boho Skirt',
    price: 389.75,
    quantity: 1,
    image: '/images/skirt-8.jpg',
    store: 'Preloved Finds',
    selected: true,
  },
])

// Group items by store
const groupedCart = computed(() => {
  const groups: Record<string, typeof cartItems.value> = {}
  for (const item of cartItems.value) {
    if (!groups[item.store]) groups[item.store] = []
    groups[item.store].push(item)
  }
  return groups
})

const total = computed(() =>
  cartItems.value.reduce((sum, item) =>
    item.selected ? sum + item.price * item.quantity : sum, 0)
)

const increaseQty = (item: any) => {
  item.quantity++
}

const decreaseQty = (item: any) => {
  if (item.quantity > 1) item.quantity--
}

const removeItem = (target: any) => {
  cartItems.value = cartItems.value.filter(item => item !== target)
}

const checkout = () => {
  const selected = cartItems.value.filter(item => item.selected)
  if (!selected.length) return alert('Please select at least one item to checkout.')
  alert('✅ Checkout successful!')
}
</script>

<style scoped>
/* Optional spacing tweaks */
</style>
