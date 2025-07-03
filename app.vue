<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  font-family: "Saira", sans-serif;
}

.scrollbar-custom::-webkit-scrollbar {
  height: 8px;
}
.scrollbar-custom::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.scrollbar-custom::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}
.scrollbar-custom::-webkit-scrollbar-thumb:hover {
  background-color: #999;
}
</style>
