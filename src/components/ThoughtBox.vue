<template>
  <div>

  </div>
  <div>
    <input
      v-model="newThought"
      @keydown.enter="submitThought"
      placeholder="생각을 적고 날려보세요..."
      class="w-100 h-14 p-4 rounded-none text-grey text-4xl font-medium placeholder-gray-500 overflow-hidden text-ellipsis border-t-0 border-l-0 border-r-0 border-b-2 border-purple-300 focus:border-purple-500 focus:outline-none bg-transparent"
    />
    <button 
      @click="submitThought" 
      class="mt-2 px-4 py-2 bg-purple-600 rounded text-white appearance-none"
      style="background-color: #9333ea; color: white; border: none;"
    >
      우주로 날리기 🚀
    </button>

    <!-- 생각들이 떠오르는 부분 -->
    <div class="relative mt-10 w-full h-[300px] overflow-hidden flex justify-center">
      <div
        v-for="thought in thoughts"
        :key="thought.id"
        class="absolute animate-float text-white opacity-70 text-center"
        :style="{ top: thought.top + 'px', transform: `translateX(${thought.offsetX}px)` }"
      >
        {{ thought.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Thought {
    id: number;
    text: string;
  top: number;
  offsetX: number;
}
  

const thoughts = ref<Thought[]>([]);

const newThought = ref('')

function submitThought() {
  if (!newThought.value.trim()) return

  const thought = {
    id: Date.now(),
    text: newThought.value,
    top: Math.random() * 200, // 화면 범위 내 위치 설정
    offsetX: (Math.random() * 200) - 100,
  }

  thoughts.value.push(thought)

  // 4초 후에 해당 생각 삭제 (애니메이션이 끝난 후)
  setTimeout(() => {
    removeThought(thought.id)
  }, 4000)

  newThought.value = ''  // 비우기
}

function removeThought(id:number) {
  thoughts.value = thoughts.value.filter(thought => thought.id !== id)  // 생각 삭제
}
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0) translateX(var(--offset-x, 0));
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100px) translateX(var(--offset-x, 0));
    opacity: 0;
  }
}


.animate-float {
  animation: float 4s ease-out forwards;
}
</style>
