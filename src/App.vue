<template>
  <main class="max-w-840 mx-auto flex justify-center mt-72">
    <div class="flex flex-col gap-32">
      <form class="flex gap-8">
        <input
          v-model="title"
          type="text"
          name="title"
          class="rounded-4 border border-solid border-surface-secondary-03 p-8 text-title-2 font-medium text-letters-secondary-01"
        />

        <button
          type="button"
          @click="addTodo"
          class="bg-surface-secondary-03 px-32 rounded-4 hover:bg-surface-secondary-02 font-bold text-1 text-letters-primary transition duration-[150ms]"
        >
          Add
        </button>
      </form>

      <ul class="flex flex-col gap-32">
        <li>
          <div class="flex justify-between max-w-160 mx-auto">
            <p>active {{ store.getters.activeTodosCount }}</p>
            <p>done {{ store.getters.doneTodosCount }}</p>
          </div>
        </li>
        <li v-for="todo in store.state.todos" :key="todo.text">
          <div class="flex justify-between">
            <p
              class="text-title-3 cursor-pointer hover:text-letters-secondary-01 transition"
              :class="{ 'line-through text-letters-secondary-03': todo.done }"
              @click="toggleTodoState(todo.id)"
            >
              {{ todo.text }}
            </p>
            <button
              type="button"
              @click="removeTodo(todo.id)"
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
import { ref } from "vue";
import { useStore } from "vuex";

const title = ref("");

const store = useStore();

const addServerTodo = async () => {
  // console.log({ title: title.value });
  try {
    const response = await fetch("http://localhost:3333/admin/add-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title.value }),
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const addTodo = () => {
  const isOnlySpaces = (str: string) => {
    return /^\s*$/.test(str);
  };

  const isStringContainOnlySpaces = isOnlySpaces(title.value);

  if (isStringContainOnlySpaces) {
    title.value = "";
  }

  if (title.value !== "" && !isStringContainOnlySpaces) {
    addServerTodo();

    store.commit("addTodo", {
      todo: {
        text: title.value,
        done: false,
      },
    });
    title.value = "";
  }
};

const removeTodo = (todoID: number) => {
  store.commit("removeTodo", todoID);
};

const toggleTodoState = (todoID: number) => {
  store.commit("toggleTodoState", todoID);
};
</script>
