<template>
  <!-- Fullscreen background -->
  <div class="min-h-screen bg-purple-100 flex items-center justify-center px-4">
    
    <!-- Login Card -->
    <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm">
      <h1 class="text-4xl font-bold text-purple-800 text-center mb-2">👤 Login </h1>
      <p class="text-center text-gray-600 mb-6">
        Log in or sign up for your ReVogue account.
      </p>

      <form @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <!-- Submit Button -->
        <BaseButton class="w-full py-2">
          Log In
        </BaseButton>
      </form>

      <!-- Sign up link -->
      <p class="text-sm text-gray-600 mt-6 text-center">
        Don’t have an account?
        <a href="/signup" class="text-purple-600 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin() {
  console.log('Logging in with', email.value, password.value)
  // Add login logic here
}
</script>
