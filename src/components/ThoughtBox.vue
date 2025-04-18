<!-- src/components/ThoughtSender.vue -->
<template>
  <div>
    <input
      v-model="newThought"
      @keydown.enter="submitThought"
      placeholder="생각을 적고 날려보세요..."
      class="w-full p-2 rounded text-black"
    />

    <button @click="submitThought" class="mt-2 px-4 py-2 bg-purple-600 rounded text-white">
      우주로 날리기 🚀
    </button>

    <div class="relative mt-10 w-full h-[300px] overflow-hidden">
      <div
        v-for="thought in thoughts"
        :key="thought.id"
        class="absolute animate-float text-white opacity-70"
        :style="{ top: thought.top + 'px', left: thought.left + 'px' }"
      >
        {{ thought.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
// src/components/ThoughtSender.vue
import { ref } from 'vue'

const newThought = ref('')
const thoughts = ref([])

function submitThought() {
  if (!newThought.value.trim()) return

  thoughts.value.push({
    id: Date.now(),
    text: newThought.value,
    top: Math.random() * 200,
    left: Math.random() * 300,
  })

  // thoughts.push 이후에 비우기
  newThought.value = ''
}
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}

.animate-float {
  animation: float 4s ease-out forwards;
}
</style>
