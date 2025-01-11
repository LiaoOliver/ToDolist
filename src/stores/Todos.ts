import type { Todo } from "@/interface/Todo.interface";
import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: new Date().getTime(),
        title: "Todo Test",
        content: "Todo Test Content",
        startDate: "2025-01-01",
        endDate: "2025-01-01",
        image: "",
      },
    ] as Todo[],
  }),
  getters: {
    getTodoPath: (state) => {
      return state.todos.map((todo) => ({
        title: todo.title,
        path: `/content/${todo.title}`,
      }));
    },
  },
  actions: {
    addTodo() {
      // 建立一個新的 todo 物件
      this.todos.push({
        id: new Date().getTime(),
        title: "",
        content: "",
        startDate: "",
        endDate: "",
        image: "",
      });
    },
  },
});
