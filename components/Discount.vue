<template>
  <section class="relative w-full h-[500px]">
    <!-- Background Image -->
    <img
      src="/assets/lamp.jpg"
      alt="Lamp"
      class="w-full h-full object-cover object-center"
    />

    <!-- Overlay (text + form) -->
    <div
      class="absolute w-full inset-0 flex items-center justify-center sm:justify-end sm:px-80"
    >
      <div
        class="w-full max-w-md rounded-lg text-center sm:text-left sm:max-w-2xl"
      >
        <h2
          class="text-white w-2/3 ml-15 text-2xl md:max-w-2xs sm:text-3xl font-semibold mb-1"
        >
          Get More Discount Off Your Order
        </h2>
        <p class="text-white mb-8 md:px-16 mt-6">Join our mailing list</p>

        <form class="flex flex-row gap-3 md:px-10 md:mt-0 mt-4">
          <input
            type="email"
            placeholder="Your email address"
            class="flex-1 text-xs ml-5 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white text-gray-800"
          />
          <button
            type="submit"
            class="bg-gray-800 text-white font-semibold px-4 mr-3 py-4 md:px-10 rounded-md hover:bg-blue-500 transition whitespace-nowrap"
          >
            Shop Now
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
