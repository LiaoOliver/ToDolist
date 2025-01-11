import type { Link } from "@/interface/Link.interface";
import type { Todo } from "@/interface/Todo.interface";
import { defineStore } from "pinia";

const STORAGE_KEY = 'todo-list';

const getInitialState = (): Todo[] => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    if (savedTodos) {
        return JSON.parse(savedTodos);
    }
    return [
        {
            id: new Date().getTime(),
            title: "Todo Test",
            content: "Todo Test Content",
            startDate: "2025-01-01",
            endDate: "2025-01-02",
            image: "",
        },
    ];
};

export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: getInitialState(),
    }),
    getters: {
        getTodoPath: (state): Link[] => {
            return state.todos.map((todo) => ({
                title: todo.title,
                path: `/content/${todo.id}`,
            }));
        },
    },
    actions: {
        addTodo() {
            this.todos.push({
                id: new Date().getTime(),
                title: "new item title",
                content: "",
                startDate: "",
                endDate: "",
                image: "",
            });
            this.saveTodos();
        },
        getTodoById(id: string): Todo | undefined {
            return this.todos.find((todo) => todo.id === parseInt(id));
        },
        updateTodo(updatedTodo: Todo) {
            const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
            if (index !== -1) {
                this.todos[index] = updatedTodo;
                this.saveTodos();
            }
        },
        deleteTodo(id: number) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.saveTodos();
        },
        saveTodos() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
        }
    },
});
