<template>
  <!-- Fullscreen background -->
  <div class="min-h-screen bg-purple-100 flex items-center justify-center px-4">
    <!-- SignUp Card -->
    <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm">
      <h1 class="text-4xl font-bold text-purple-800 text-center mb-2">👤 SignUp </h1>
      <p class="text-center text-gray-600 mb-6">
        Sign up for your ReVogue account.
      </p>

      <form @submit.prevent="handleSignUp">
        <!-- Phone Number -->
        <div class="mb-4">
          <label for="number" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="number"
            v-model="number"
            @input="validateNumber"
            placeholder="e.g. 09123456789"
            maxlength="11"
            class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            :class="{
              'border-red-500 focus:ring-red-500': !isValid && number,
              'border-gray-300 focus:ring-purple-500': isValid || !number
            }"
          />
          <p v-if="!isValid && number" class="text-sm text-red-500 mt-1">
            Please enter a valid 11-digit phone number.
          </p>
        </div>

        <!-- Next Button -->
        <BaseButton class="w-full py-2" :disabled="!isValid">
          Next
        </BaseButton>
      </form>

      <!-- Log In link -->
      <p class="text-sm text-gray-600 mt-6 text-center">
        Have an account?
        <a href="/login" class="text-purple-600 hover:underline">Log In</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const number = ref('')
const isValid = ref(true)

function validateNumber(event) {
  // Keep only digits
  number.value = event.target.value.replace(/\D/g, '')

  // Validate: must be exactly 11 digits (Philippines mobile format)
  isValid.value = /^09\d{9}$/.test(number.value)
}

function handleSignUp() {
  if (!isValid.value) return
  console.log('Sign up with', number.value)
  // Add sign-up logic here
}
</script>
