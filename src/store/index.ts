import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    todos: [
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
    ],
  },

  mutations: {
    addTodo(state, payload) {
      console.log(state, payload);
      state.todos.push(payload);
    },
  },
});
