<template>
  <div class="w-full max-w-xl flex flex-col items-center">
    <textarea
      v-model="thought"
      placeholder="생각을 적고 날려보세요..."
      class="w-full h-32 p-4 text-black rounded-lg shadow-md resize-none"
    />

    <button
      @click="clearThought"
      class="mt-4 bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full shadow-lg transition"
    >
      🚀 지워버리기
    </button>

    <transition name="fade">
      <div v-if="launched" class="mt-6 text-xl text-center animate-pulse">
        🛸 우주로 전송 중...
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const thought = ref('')
const launched = ref(false)

const clearThought = () => {
  if (thought.value.trim() === '') return
  launched.value = true

  // 간단한 애니메이션 연출 후 생각 초기화
  setTimeout(() => {
    thought.value = ''
    launched.value = false
  }, 2000)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
