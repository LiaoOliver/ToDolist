<template>
    <div class="w-full h-full bg-fluorescentGreen">
        <router-link to="/">
                <p class="p-4 text-2xl">
                    Demo Todo List
                </p>
            </router-link>

            <!-- Sidebar Content -->
            <nav class="flex flex-col justify-between h-[calc(100vh-64px)] overflow-auto">
                <div class="space-y-2">
                    <router-link v-for="item in todoItems" :key="item.title" :to="item.path" :class="[
                        'p-4 block rounded cursor-pointe relative',
                        $route.path === item.path ? 'bg-deepFluorescentGreen font-bold' : ''
                    ]">
                        <p>{{ item.title }}</p>
                        <div v-if="$route.path === item.path" class="absolute top-0 right-0 triangle"></div>
                    </router-link>
                    <div class="p-4">
                        <button @click="addTodo" :disabled="todoItems.length >= 10"
                            :class="['bg-mintGreen p-2 rounded w-full hover:bg-deepFluorescentGreen', todoItems.length >= 10 ? 'text-lightGray cursor-not-allowed' : '']">Add
                            Item</button>
                    </div>
                </div>
                <div class="p-4">
                    <div class="w-full h-16 cursor-pointer" @click="updateImage">
                        <img class="w-full h-full object-cover rounded"
                            :src="`https://picsum.photos/200/300?${randomSeed}`" alt="Random Image">
                    </div>
                </div>
            </nav>
    </div>
</template>

<script setup lang="ts">
interface SideBarProps {
    todoItems: {
        title: string;
        path: string;
    }[];
}

import { useTodosStore } from '@/stores/Todos';
import { ref } from 'vue';

const todosStore = useTodosStore();

defineProps<SideBarProps>();

const randomSeed = ref(Math.random());

const updateImage = () => {
    randomSeed.value = Math.random();
}

const addTodo = () => {
    todosStore.addTodo();
}

</script>