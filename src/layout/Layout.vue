<!-- Layout.vue -->
<template>
    <div class="flex h-screen relative">
        <!-- Sidebar -->
        <div class="hidden md:block h-screen">
            <SideBar :todoItems="todoItems" />
        </div>

        <div v-if="isSidebarOpen" class="absolute top-0 left-0 w-full h-full opacity-50 bg-black z-40" @click="toggleSidebar"></div>

        <div v-if="isSidebarOpen" class="absolute w-2/3 bg-fluorescentGreen z-50">
            <SideBar :todoItems="todoItems" />
        </div>

        <!-- Main Content -->
        <div class="flex-1 p-4 md:p-6 overflow-auto">
            <TodoHeader @toggleSidebar="toggleSidebar" />
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import TodoHeader from '@/components/TodoHeader.vue';
import { ref, computed } from 'vue';
import { useTodosStore } from '@/stores/Todos';
import SideBar from '@/components/SideBar.vue';

const todosStore = useTodosStore();

const isSidebarOpen = ref(false);

const todoItems = computed(() => todosStore.getTodoPath);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
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
