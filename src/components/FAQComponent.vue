<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  questions: { question: string; answer: string | string[] }[]
}>()

const openQuestionIndex = ref<number | null>(null)

const toggleQuestion = (index: number) => {
  if (openQuestionIndex.value === index) {
    openQuestionIndex.value = null
  } else {
    openQuestionIndex.value = index
  }
}
</script>

<template>
  <div class="FAQ">
    <div class="Bloc_titre">
      <h2>Foire aux questions</h2>
    </div>
    <div class="questions">
      <div v-for="(item, index) in props.questions" :key="index" class="question">
        <h3 @click="toggleQuestion(index)">
          {{ item.question }}
          <span class="arrow" :class="{ open: openQuestionIndex === index }"></span>
        </h3>
        <div v-if="openQuestionIndex === index" class="answer">
          <p v-if="typeof item.answer === 'string'">{{ item.answer }}</p>
          <ul v-else>
            <li v-for="(line, i) in item.answer" :key="i">{{ line }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.FAQ {
  padding: 20px;
}

.FAQ .questions {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.FAQ .questions .question {
  text-align: left;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--blue);
}

.FAQ .questions .question:hover .arrow {
  border-top-color: var(--dark-blue);
}

.FAQ .questions .question h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
}

.FAQ .questions .question .answer {
  margin-top: 15px;
  text-align: left;
}

.FAQ .questions .question .answer ul {
  padding-left: 20px;
  margin-top: 10px;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333;
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

@media (min-width: 768px) {
  .FAQ {
    padding: 40px;
  }
  .FAQ .questions {
    padding: 40px;
  }
}
</style>
