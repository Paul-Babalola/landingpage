<template>
  <section class="relative w-full h-[500px]">
    <!-- Background Image -->
    <img
      src="/assets/lamp.jpg"
      alt="Lamp"
      class="w-full h-full object-cover object-center"
    />

    <!-- Overlay (text + form) -->
<div class="absolute w-full inset-0 flex items-center justify-center px-4 sm:justify-end sm:px-80">
  <div class="w-full max-w-md p-6 rounded-lg text-center sm:text-left sm:max-w-2xl">
    <h2 class="text-white text-2xl sm:text-3xl font-bold mb-1">
      Get More Discount Off<br class="sm:hidden" /> Your Order
    </h2>
    <p class="text-white mb-6">Join our mailing list</p>

    <form class="flex flex-row gap-3">
      <input
        type="email"
        placeholder="Your email address"
        class="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white text-gray-800"
      />
      <button
        type="submit"
        class="bg-gray-800 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-500 transition whitespace-nowrap"
      >
        Shop Now
      </button>
    </form>
  </div>
</div>



  </section>
</template>
