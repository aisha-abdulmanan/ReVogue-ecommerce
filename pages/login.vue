<template>
  
  <CardWrapper>
  <!-- Login Page -->
    <p class="text-4xl font-bold text-purple-900"> 👤Login Page </p>
    <p class="mt-4 text-xl text-gray-700"> This page allows you to log in or sign up for account. </p>
  </CardWrapper>

  <div class="min-h-screen bg-purple-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
      <p class="text-3xl font-bold text-purple-800 mb-6 text-center"> Login to ReVogue </p>

      <form @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1"> Email </label>
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
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1"> Password </label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <!-- Submit Button -->
        <BaseButton>
          Log In
        </BaseButton>
      </form>

      <!-- Optional: Signup link -->
      <p class="text-sm text-gray-600 mt-4 text-center">
        Don’t have an account?
        <a href="#" class="text-purple-600 hover:underline"> Sign up </a>
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
  // Add login logic here..
}
</script>


