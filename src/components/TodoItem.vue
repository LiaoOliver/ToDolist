<script setup lang="ts">
import { ref } from 'vue';
import TodoHeader from './TodoHeader.vue';
import DatePick from './DatePick.vue';
import Input from './TextInput.vue';

const formData = ref({
    title: '',
    content: '',
    startDate: '2025-01-10',
    endDate: '2025-01-11',
    image: '' 
});

const handleSubmit = () => {
    console.log(formData.value);
}

</script>

<template>
<TodoHeader></TodoHeader>
<form class="grid grid-cols-12" @submit.prevent="handleSubmit">
    <div class="col-span-7 p-4">
        <Input label="Title" id="title" type="text" v-model="formData.title"/>
    </div>
    <div class="col-span-5 p-4">
        <DatePick label="Date" id="date" :startDate="formData.startDate" :endDate="formData.endDate" @update:startDate="formData.startDate = $event" @update:endDate="formData.endDate = $event"/>
    </div>
</form>
<!-- 顯示 formData 的資料 -->
<div class="p-4">
    <p>Title: {{ formData.title }}</p>
    <p>Content: {{ formData.content }}</p>
    <p>Start Date: {{ formData.startDate }}</p>
    <p>End Date: {{ formData.endDate }}</p>
    <p>Image: {{ formData.image }}</p>
</div>
</template>


