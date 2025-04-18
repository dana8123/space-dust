<template>
  <div id="app" class="w-screen h-screen m-0 p-0 overflow-hidden relative">

    <h1 class="text-4xl font-bold mb-2 drop-shadow-lg text-center">
      지금 하는 생각...<br />
      우주의 먼지로 만들어버리세요👽
    </h1>

    <div>
      <ThoughtBox class="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-10" />
    </div>

    <div class="absolute left-1/2 transform translate-x-[-50%] text-sm opacity-70 z-20">
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