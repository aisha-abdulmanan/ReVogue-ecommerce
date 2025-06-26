<template>
  <div class="min-h-screen flex items-center justify-center px-4">
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
            @input="validateEmail"
            placeholder="e.g. user@example.com"
            class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            :class="{
              'border-red-500 focus:ring-red-500': !isEmailValid && email,
              'border-gray-300 focus:ring-purple-500': isEmailValid || !email
            }"
          />
          <p v-if="!isEmailValid && email" class="text-sm text-red-500 mt-1">
            Please enter a valid email address.
          </p>
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            @input="validatePassword"
            placeholder="At least 6 characters"
            class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            :class="{
              'border-red-500 focus:ring-red-500': !isPasswordValid && password,
              'border-gray-300 focus:ring-purple-500': isPasswordValid || !password
            }"
          />
          <p v-if="!isPasswordValid && password" class="text-sm text-red-500 mt-1">
            Password must be at least 6 characters.
          </p>
        </div>

        <!-- Submit Button -->
        <BaseButton class="w-full py-2" :disabled="!isEmailValid || !isPasswordValid">
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
const isEmailValid = ref(true)
const isPasswordValid = ref(true)

function validateEmail() {
  // Basic email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  isEmailValid.value = emailPattern.test(email.value)
}

function validatePassword() {
  isPasswordValid.value = password.value.length >= 6
}

function handleLogin() {
  validateEmail()
  validatePassword()

  if (!isEmailValid.value || !isPasswordValid.value) return

  console.log('Logging in with', email.value, password.value)
  // Add login logic here
}
</script>


