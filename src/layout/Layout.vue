<!-- Layout.vue -->
<template>
    <div class="flex h-screen ">
        <!-- Sidebar -->
        <div class="w-64 flex-none transition-all duration-300 shadow-lg h-screen bg-fluorescentGreen">
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
                        <button :disabled="todoItems.length >= 10" :class="['bg-mintGreen p-2 rounded w-full hover:bg-deepFluorescentGreen', todoItems.length >= 10 ? 'text-lightGray cursor-not-allowed' : '']">Add Item</button>
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
        <div class="flex-1 p-8 overflow-auto">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const todoItems = [
    { title: 'Todo 1', path: '/content/todo1' },
    { title: 'Todo 2', path: '/content/todo2' },
];

// 新增圖片相關邏輯
const randomSeed = ref(Math.random());

const updateImage = () => {
    randomSeed.value = Math.random();
};
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
