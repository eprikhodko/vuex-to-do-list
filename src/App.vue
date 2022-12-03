<template>
  <main class="max-w-840 mx-auto flex justify-center mt-72">
    <div class="flex flex-col gap-32">
      <form class="flex gap-8">
        <input
          class="rounded-4 border border-solid border-surface-secondary-03 p-8 text-title-2 font-medium text-letters-secondary-01"
        />

        <button
          type="button"
          class="bg-surface-secondary-03 px-32 rounded-4 hover:bg-surface-secondary-02 font-bold text-1 text-letters-primary transition duration-[150ms]"
        >
          Add
        </button>
      </form>
      <ul class="flex flex-col gap-32 mt-32">
        <li v-for="todo in todosMockData" :key="todo.text">
          <div class="flex justify-between">
            <p
              class="text-title-3 cursor-pointer hover:text-letters-secondary-01 transition"
              :class="{ 'line-through text-letters-secondary-03': todo.done }"
            >
              {{ todo.text }}
            </p>
            <button
              type="button"
              class="text-letters-warning transition hover:text-letters-error"
            >
              delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
const todosMockData = [
  {
    text: "Collect packages",
    done: false,
  },
  {
    text: "Workout",
    done: false,
  },
  {
    text: "Read one chapter",
    done: true,
  },
];
</script>
