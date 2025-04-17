<template>
  <div class="relative min-h-screen w-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center p-4">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1] opacity-30"
    >
      <source src="/bg2.mp4" type="video/mp4" />
    </video>

    <h1 class="text-4xl font-bold mb-4 drop-shadow-lg">🧠 오늘 생각 정리했나요?</h1>

    <ThoughtBox />

    <div class="mt-8 text-sm opacity-70">
      <p>🪐 "그건 토성에 두고 오세요."</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import ThoughtBox from './components/ThoughtBox.vue'
</script>
