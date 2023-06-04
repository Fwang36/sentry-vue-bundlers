<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const throwError = () => {
  throw new Error("ERROR!")
}
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>

    </p>
  </div>
  <button type="button" @click="throwError">Throw Error</button>
</template>

<style scoped>
/* .read-the-docs {
  color: #888;
} */
</style>
