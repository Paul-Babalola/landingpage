<template>
  <section class="relative w-full h-[500px]">
    <!-- Background Image -->
    <img
      src="/assets/lamp.jpg"
      alt="Lamp"
      class="w-full h-full object-cover object-center"
    />

    <!-- Overlay (text + form) -->
    <div class="absolute inset-0 flex items-center justify-end">
      <div class="max-w-xl p-6 rounded-lg mr-4">
        <h2 class="text-white text-3xl font-bold mb-1">Get more discount</h2>
        <h3 class="text-white text-3xl font-bold mb-6">Off your order</h3>
        <p class="text-white mb-4">Join our mailing list</p>
        <form class="flex flex-col sm:flex-col gap-2">
          <input
            type="email"
            placeholder="Your email address"
            class="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white text-gray-800"
          />
          <button
            type="submit"
            class="bg-gray-800 text-white font-semibold px-9 py-2 rounded-md hover:bg-blue-500 transition"
          >
            Shop Now
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
