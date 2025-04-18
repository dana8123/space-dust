<template>
  <div id="app" class="w-screen h-screen m-0 p-0 overflow-hidden relative">

    <h1 class="text-4xl font-bold mb-2 drop-shadow-lg">🧠 오늘 생각 정리했나요?</h1>

    <ThoughtBox class="mt-2" />

    <div class="mt-8 text-sm opacity-70">
      <p>🪐 "그건 토성에 두고 오세요."</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThoughtBox from './components/ThoughtBox.vue'
</script>

<style scoped>
#app {
  background-image: url('/bg.jpg'); /* public/bg.jpg 위치 기준 */
  background-size: cover;
  background-position: center;
}
</style>