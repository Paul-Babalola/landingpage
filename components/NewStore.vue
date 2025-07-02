<template>
  <section
    class="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-6 items-start"
  >
    <!-- Left Text Content -->
    <div class="md:col-span-1">
      <div class="flex flex-col md:block">
        <div class="flex items-center space-x-4 md:block">
          <h2 class="w-55 text-2xl font-bold md:text-[40px] md:mb-15 mt-6">
            New In Store Now
          </h2>
          <p class="text-sm text-gray-600 md:mt-3 md:mb-12 md:w-3/4">
            Get the latest items immediately with promo prices
          </p>
        </div>
      </div>
      <a
        href="#"
        class="hidden md:inline-flex items-center text-black font-medium hover:underline"
      >
        Check All <span class="ml-1">→</span>
      </a>
    </div>

    <!-- Right Product Cards -->
    <div class="md:col-span-3 overflow-x-auto">
      <div class="flex space-x-4">
        <!-- Card 1 -->
        <div
          class="min-w-[160px] sm:min-w-[200px] relative rounded-xl overflow-hidden"
        >
          <img
            src="/assets/graysofa.jpg"
            alt="Chair"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-2 left-19 text-white font-semibold px-3 py-4 rounded-md text-xl"
          >
            Chair
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="min-w-[160px] sm:min-w-[200px] relative rounded-xl overflow-hidden"
        >
          <img
            src="/assets/bed.jpg"
            alt="Bed"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-2 left-19 font-semibold text-white px-3 py-4 rounded-md text-xl"
          >
            Bed
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="min-w-[160px] sm:min-w-[200px] relative rounded-xl overflow-hidden"
        >
          <img
            src="/assets/browncupboard.jpg"
            alt="Cupboard"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-2 left-11 font-semibold text-white px-3 py-4 rounded-md text-xl"
          >
            Cupboard
          </div>
        </div>

        <!-- Card 4 -->
        <div
          class="min-w-[160px] sm:min-w-[200px] relative rounded-xl overflow-hidden"
        >
          <img
            src="/assets/light.jpg"
            alt="Lighting"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-2 left-14 font-semibold text-white px-3 py-4 rounded-md text-xl"
          >
            Lighting
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
