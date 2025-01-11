<!-- 建立基本的 Vue template -->
<template>
    <header class="w-full flex justify-between mb-3">
        <!-- 我想要在這裡放兩個 icon -->
        <div class="w-8">
            <img class="block md:hidden" src="../assets/menu.svg" alt="menu">
        </div>
        <div class="w-8" @click="deleteById()">
            <img src="../assets/delete.svg" alt="delete">
        </div>
    </header>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';

const route = useRoute()

const deleteById = () => {
    // 取得 id 從 router
    const id = route.params.id;
    console.log(id);
} 

</script>