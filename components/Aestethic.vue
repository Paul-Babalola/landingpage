<template>
  <section
    class="max-w-7xl mx-auto px-4 py-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative"
  >
    <!-- Image -->
    <div>
      <img
        src="/assets/graysofa.jpg"
        alt="Living Room"
        class="rounded-xl w-full h-90 hidden md:block"
      />
    </div>

    <!-- Text content -->
    <div>
      <h2 class="text-2xl md:text-3xl font-bold mb-4">
        We Create Your Home More Aesthetic
      </h2>
      <p class="text-gray-600 mb-6">
        Furniture Power is a Software as a Service for multipurpose business
        management systems.
      </p>

      <!-- Features -->
      <ul class="space-y-4">
        <li class="flex items-start space-x-3">
          <span class="text-green-600 mt-1">
            <i class="fas fa-check-circle"></i>
          </span>
          <div>
            <p class="font-semibold">Valuation Services</p>
            <p class="text-gray-500 text-sm">
              Sometimes features require a short description. This can be a
              detailed description.
            </p>
          </div>
        </li>

        <li class="flex items-start space-x-3">
          <span class="text-green-600 mt-1">
            <i class="fas fa-check-circle"></i>
          </span>
          <div>
            <p class="font-semibold">Development of Furniture Models</p>
            <p class="text-gray-500 text-sm">
              Sometimes features require a short description. This can be a
              detailed description.
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <img
        src="/assets/graysofa.jpg"
        alt="Living Room"
        class="rounded-xl w-full mr-2 h-90 md:hidden"
      />
    </div>
  </section>
</template>
