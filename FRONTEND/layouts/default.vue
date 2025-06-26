<template>
  <div>
    <!-- NAVIGATION BAR -->
    <nav class="bg-purple-700 text-white px-2 py-4 shadow-md">
      <div class="flex justify-between items-center text-lg font-semibold mx-4 sm:mx-6 lg:mx-6">
        
        <!-- Left side nav links -->
        <ul class="flex gap-6">
          <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
          <li><NuxtLink to="/product" class="hover:underline">Shop</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:underline">About Us</NuxtLink></li>
        </ul>

        <!-- Right side nav links -->
        <ul class="flex gap-6">
          <li><NuxtLink to="/login" class="hover:underline">Login</NuxtLink></li>
          <li><NuxtLink to="/profile" class="hover:underline">Profile</NuxtLink></li>
          <li><NuxtLink to="/cart" class="hover:underline">Cart</NuxtLink></li>
          <li><NuxtLink to="/orders" class="hover:underline"> Orders </NuxtLink></li>
          <li><NuxtLink to="/customer-service" class="hover:underline"> Support </NuxtLink></li>
        </ul>

      </div>
    </nav>

    <!-- Main content -->
    <main>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
  </div>
</template>
