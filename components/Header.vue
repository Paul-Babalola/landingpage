<template>
  <div class="relative h-screen w-screen">
    <!-- Background image -->
 <NuxtImg
  src="/sofa.jpg"
  format="webp"
  placeholder="blur"
  alt="Sofa"
  class="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
/>



    <!-- Navbar -->
    <nav class="absolute top-0 left-0 w-full text-white flex items-center justify-between px-5 md:px-64 py-4 z-20">
      <div class="text-2xl font-bold">FurniShop</div>
      <button @click="isOpen = !isOpen" class="text-3xl md:hidden focus:outline-none">☰</button>
      <ul
        :class="[
          'flex flex-col bg-[#E2E2E266] md:flex-row md:items-center md:space-x-10 absolute md:static left-0 top-full w-full md:w-auto  md:bg-transparent text-center mr-6',
          isOpen ? 'block' : 'hidden md:flex'
        ]"
      >
        <li class="py-2 md:py-0"><a href="#" class="hover:underline">Home</a></li>
        <li class="py-2 md:py-0"><a href="#" class="hover:underline">About</a></li>
        <li class="py-2 md:py-0"><a href="#" class="hover:underline">Features</a></li>
        <li class="py-2 md:py-0"><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </nav>

    <!-- Overlay content -->
    <div class="relative z-10 flex flex-col h-full items-center justify-center text-center px-4 text-white">
      <h1 class="text-2xl md:text-6xl font-bold mb-4 w-3/4 md:w-2/4">
        Creative Home Simpify Your Furniture
      </h1>
<p class="text-sm leading-relaxed max-w-4/5 md:max-w-xl md:text-lg md:leading-loose mt-4 mb-8">
        Do I have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto
      </p>
      <button class="bg-[#E2E2E266] backdrop-blur-md opacity-80 text-white px-15 py-3 rounded-lg font-semibold  text-xl">
        Shop Now
      </button>
      <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  </div>  
    
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
