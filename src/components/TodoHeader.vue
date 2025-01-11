<!-- 建立基本的 Vue template -->
<template>
    <header class="w-full flex justify-between mb-3">
        <div class="w-8" @click="$emit('toggleSidebar')">
            <img class="block md:hidden" src="../assets/menu.svg" alt="menu">
        </div>
        <div v-if="todoId" class="w-8 cursor-pointer" @click="deleteById()">
            <img src="../assets/delete.svg" alt="delete">
        </div>
    </header>
</template>

<script setup lang="ts">
import { useTodosStore } from '@/stores/Todos';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const todosStore = useTodosStore();

const route = useRoute()
const router = useRouter()

const todoId = ref(route.params.id as string);

watch(() => route.params.id as string, (id: string) => {
    todoId.value = id;
})

const deleteById = () => {
    // 取得 id 從 router
    const id = route.params.id;
    todosStore.deleteTodo(Number(id));
    // 回到首頁
    router.push('/')
} 
</script>