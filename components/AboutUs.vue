<template>
  <section
    class="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center"
  >
    <!-- Left: Testimonial -->
    <div>
      <h2
        class="text-2xl max-w-2xs md:max-w-[635px] md:text-4xl font-semibold text-gray-900 mb-6"
      >
        What People Are Saying About Us
      </h2>

      <!-- User Info -->
      <div class="flex items-center space-x-4 mb-4">
        <img
          src="/assets/profile.jpg"
          alt="Josh Smith"
          class="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 class="font-semibold text-gray-900">Josh Smith</h4>
          <p class="text-gray-500 text-sm">Manager of The New York Times</p>
        </div>
      </div>

      <!-- Testimonial Text -->
      <blockquote class="text-gray-700 mb-6">
        “They are have a perfect touch for make something so professional,
        interest and useful for a lot of people.”
      </blockquote>

      <!-- Arrows: Shown only on md+ screens -->
      <div class="hidden md:flex space-x-4">
        <button
          class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <svg
            class="w-4 h-4 text-gray-800"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          class="w-10 h-10 rounded-full bg-[#286F6C] text-white flex items-center justify-center hover:bg-green-700"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Right: Image + Arrows on small screens -->
    <div class="flex flex-col items-center">
      <img
        src="/assets/room.jpg"
        alt="Living Room"
        class="rounded-lg shadow-md w-full object-cover mb-4"
      />

      <!-- Arrows: Shown only on small screens -->
      <div class="flex space-x-4 md:hidden">
        <button
          class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <svg
            class="w-4 h-4 text-gray-800"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          class="w-10 h-10 rounded-full bg-[#286F6C] text-white flex items-center justify-center hover:bg-green-700"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
