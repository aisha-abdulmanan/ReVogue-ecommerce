<template>
  <!-- Customer Service Header -->
  <CardWrapper class="mt-8">
    <h1 class="text-4xl font-bold text-purple-900 text-center">📞 Customer Service</h1>
  </CardWrapper>

  <!-- Contact Info -->
  <div class="mt-6 max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
    <p class="text-lg text-gray-700 mb-6">
      We're here to help! Reach out through the details below for inquiries, concerns, or feedback.
    </p>
    <div class="space-y-4 text-lg text-gray-800">
      <div><span class="font-semibold">📱 Phone:</span> (0912) 345 6789</div>
      <div><span class="font-semibold">✉️ Email:</span> support@revogue.shop</div>
      <div><span class="font-semibold">🕒 Support Hours:</span> Mon–Fri, 9:00 AM – 6:00 PM</div>
    </div>

    <!-- CTA link -->
    <p class="mt-8 text-purple-800 font-semibold">
      💬 Have any questions or suggestions?
      <button @click="showModal = true" class="underline hover:text-purple-600 transition">
        Send us a message now
      </button>
    </p>
  </div>

  <!-- Modal (Dialog Form) -->
  <div
    v-if="showModal"
    class="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black/70 to-white/10 z-50"
  >
    <div class="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
      <!-- Close Button -->
      <button @click="showModal = false" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl">
        &times;
      </button>

      <h2 class="text-xl font-semibold text-purple-900 mb-2">Send us a message</h2>
      <p class="text-sm text-gray-600 mb-4">Let us know your concerns or suggestions below.</p>

      <form class="space-y-4">
        <input
          v-model="form.name"
          type="text"
          placeholder="Your Name"
          class="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="Your Email"
          class="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          v-model="form.message"
          placeholder="Your Message"
          rows="4"
          class="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>

        <BaseButton  @click.prevent="handleSubmit">Send message</BaseButton>
      </form>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

// Modal visibility
const showModal = ref(false)

// Form state
const form = ref({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  if (!form.value.message) {
    alert('Please enter a message before submitting.')
    return
  }

  const messageContent = `Name: ${form.value.name}
Email: ${form.value.email}
Message: ${form.value.message}
Date: ${new Date().toLocaleString()}`

  // ✅ Create and download the file
  const blob = new Blob([messageContent], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'customer-message.txt'
  a.click()
  URL.revokeObjectURL(url)
  // Simulate saving (e.g., log or localStorage)
  console.log('Form Submitted:', form.value)
  localStorage.setItem('revogueSupportMessage', JSON.stringify(form.value))

  // Save or send message logic
  console.log('Message sent:', form.value)
  alert('Your message has been sent! ✅')

  // Example: Save to localStorage (for testing)
  localStorage.setItem('revogueCustomerMessage', JSON.stringify(form.value))

  // Reset form
  form.value = { name: '', email: '', message: '' }

  // ✅ CLOSE THE DIALOG BOX
  showModal.value = false
}
</script>
