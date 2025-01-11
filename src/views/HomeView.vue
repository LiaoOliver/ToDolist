<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <Input
                label="標題"
                id="title"
                v-model="formData.title"
                placeholder="請輸入標題"
            />
            <Input
                label="描述"
                id="description"
                v-model="formData.description"
                placeholder="請輸入描述"
            />
            <button type="submit" class="bg-fluorescentGreen px-4 py-2 rounded hover:bg-deepFluorescentGreen">
                提交
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../components/TextInput.vue';

const formData = ref({
    title: '',
    description: ''
});

const handleSubmit = () => {
    console.log('表單數據：', formData.value);
    // 處理表單提交邏輯
};
</script>
