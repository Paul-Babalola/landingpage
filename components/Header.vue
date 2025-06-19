<template>
  <div class="relative h-screen w-screen">
    <!-- Background image -->
    <img
      src="/assets/sofa.jpg"
      alt="Sofa"
      class="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
    />

    <!-- Overlay content -->
    <div class="relative z-10 flex flex-col h-full items-center justify-center text-center px-4 text-white">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Creative Home Simpify Your <br />Furniture
      </h1>
      <p class="max-w-xl text-sm md:text-base mb-6 mt-4">
        Do I have consent to record this meeting gain locaion, root-and-<br>branch, review, nor game plan who’s the goto
      </p>
      <button class="bg-[#E2E2E266] backdrop-blur-md opacity-80 text-white px-11 py-3 rounded-lg font-semibold mt-6">
        Shop Now
      </button>
    </div>

    <!-- Navbar -->
    <nav class="absolute top-0 left-0 w-full text-white flex items-center justify-between px-6 py-4 z-20">
      <div class="text-2xl font-bold">FurniShop</div>
      <button @click="isOpen = !isOpen" class="text-3xl md:hidden focus:outline-none">
        ☰
      </button>
      <ul
        :class="[
          'flex flex-col md:flex-row md:items-center md:space-x-10 absolute md:static left-0 top-full w-full md:w-auto  md:bg-transparent text-center mr-6',
          isOpen ? 'block' : 'hidden md:flex'
        ]"
      >
        <li class="py-2 md:py-0"><a href="#" class="hover:underline">Home</a></li>
        <li class="py-2 md:py-0"><a href="#" class="hover:underline">About</a></li>
        <li class="py-2 md:py-0"><a href="#" class="hover:underline">Features</a></li>
        <li class="py-2 md:py-0"><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
