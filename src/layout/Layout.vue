<!-- Layout.vue -->
<template>
    <div class="flex h-screen ">
        <!-- Sidebar -->
        <div class="hidden md:block transition-all duration-300 shadow-lg h-screen bg-fluorescentGreen">
            <p class="p-4 text-2xl">
                Demo Todo List
            </p>

            <!-- Sidebar Content -->
            <nav class="flex flex-col justify-between h-[calc(100vh-64px)] overflow-auto">
                <div class="space-y-2">
                    <router-link v-for="item in todoItems" 
                       :key="item.title"
                       :to="item.path"
                       :class="[
                         'p-4 block rounded cursor-pointe relative',
                         $route.path === item.path ? 'bg-deepFluorescentGreen font-bold' : ''
                       ]">
                       <p>{{ item.title }}</p>
                       <div v-if="$route.path === item.path" class="absolute top-0 right-0 triangle"></div>
                    </router-link>
                    <div class="p-4">
                        <button @click="addTodo" :disabled="todoItems.length >= 10" :class="['bg-mintGreen p-2 rounded w-full hover:bg-deepFluorescentGreen', todoItems.length >= 10 ? 'text-lightGray cursor-not-allowed' : '']">Add Item</button>
                    </div>
                </div>
                <div class="p-4">
                    <div class="w-full h-16 cursor-pointer" @click="updateImage">
                        <img class="w-full h-full object-cover rounded" 
                             :src="`https://picsum.photos/200/300?${randomSeed}`" 
                             alt="Random Image">
                    </div>
                </div>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1 p-4 md:p-6 overflow-auto">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { useTodosStore } from '@/stores/Todos';

const todosStore = useTodosStore();

// 使用 computed 替代 ref
const todoItems = computed(() => todosStore.getTodoPath);

// 新增圖片相關邏輯
const randomSeed = ref(Math.random());

const updateImage = () => {
    randomSeed.value = Math.random();
};

const addTodo = () => {
    console.log('addTodo');
    todosStore.addTodo();
}

</script>

<style scoped>
.triangle {
    width: 0;
    height: 0;
    border-top: 28px solid transparent;
    /* border-left: 28px solid transparent; */
    border-right: 28px solid white;
    border-bottom: 28px solid transparent;
}
</style>
