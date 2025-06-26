<template>
 
  <div class="min-h-screen flex items-center justify-center px-4">
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

          <!-- Letter warning -->
          <p v-if="hasLetters" class="text-sm text-red-500 mt-1">
            Letters are not allowed.
          </p>
        
          <!-- Invalid phone number warning -->
          <p v-else-if="!isValid && number" class="text-sm text-red-500 mt-1">
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
const hasLetters = ref(false)

function validateNumber(event) {
  const raw_input = event.target.value

  // Check if there are any letters (case-insensitive)
  hasLetters.value = /[a-z]/i.test(raw_input)

  // Clean input: keep only digits
  number.value = raw_input.replace(/\D/g, '')

  // Validate 11-digit Philippine number
  isValid.value = /^09\d{9}$/.test(number.value)
}

function handleSignUp() {
  if (!isValid.value) return
  console.log('Sign up with', number.value)
  // Add sign-up logic here
}
</script>
