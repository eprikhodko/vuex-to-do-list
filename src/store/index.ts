import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    todos: [
      {
        id: 0,
        text: "Collect packages",
        isDone: false,
      },
      {
        id: 1,
        text: "Workout",
        isDone: false,
      },
      {
        id: 2,
        text: "Read one chapter",
        isDone: true,
      },
    ],
  },

  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload.todo);
    },

    removeTodo(state, todoID) {
      const filteredTodos = state.todos.filter((todo) => todo.id !== todoID);
      state.todos = filteredTodos;
    },
  },
});
