import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    todos: [
      {
        text: "Collect packages",
        isDone: false,
      },
      {
        text: "Workout",
        isDone: false,
      },
      {
        text: "Read one chapter",
        isDone: true,
      },
    ],
  },

  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload.todo);
    },
  },
});
