import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    todos: [
      {
        id: 0,
        text: "Collect packages",
        done: false,
      },
      {
        id: 1,
        text: "Workout",
        done: false,
      },
      {
        id: 2,
        text: "Read one chapter",
        done: true,
      },
    ],
  },

  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },

    activeTodos(state) {
      return state.todos.filter((todo) => !todo.done);
    },

    doneTodosCount(state, getters) {
      return getters.doneTodos.length;
    },

    activeTodosCount(state, getters) {
      return getters.activeTodos.length;
    },
  },

  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload.todo);
    },

    removeTodo(state, todoID) {
      state.todos = state.todos.filter((todo) => todo.id !== todoID);
    },

    toggleTodoState(state, todoID) {
      const filteredTodo = state.todos.filter((todo) => todo.id === todoID);
      filteredTodo[0].done = !filteredTodo[0].done;
    },
  },
});
