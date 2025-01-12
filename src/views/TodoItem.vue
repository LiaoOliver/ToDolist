<script setup lang="ts">
import { reactive, watch } from 'vue';
import DatePick from '../components/DatePick.vue';
import Input from '../components/TextInput.vue';
import UploadInput from '../components/UploadInput.vue';
import TextArea from '../components/TextArea.vue';
import Image from '../components/Image.vue';
import { useTodosStore } from '@/stores/Todos';
import { useRoute } from 'vue-router';

const route = useRoute();

let formData = reactive({
    title: 'Demo Test',
    content: 'Demo Test',
    startDate: '',
    endDate: '',
    image: ''
});

const todosStore = useTodosStore();

watch(() => route.params.id as string, (id) => {
    const todo = todosStore.getTodoById(id);
    if (todo) {
        formData = todo;
    }
});

// 監聽表單資料變化並更新 store
watch(formData, (newValue) => {
    if (route.params.id) {
        todosStore.updateTodo({
            id: Number(route.params.id),
            ...newValue
        });
    }
}, { deep: true });

</script>

<template>

<form class="grid grid-cols-12 gap-y-3">
    <div class="col-span-12 md:col-span-7 px-2">
        <label for="title" class="block mb-1">Title</label>
        <Input label="Title" id="title" type="text" :modelValue="formData.title" @update:modelValue="formData.title = $event" />
    </div>
    <div class="col-span-12 md:col-span-5 px-2">
        <label for="title" class="block mb-1">Date</label>
        <DatePick label="Date" id="date" :startDate="formData.startDate" :endDate="formData.endDate" @update:startDate="formData.startDate = $event" @update:endDate="formData.endDate = $event"/>
    </div>

    <div class="col-span-12 md:col-span-7 px-2">
        <label class="block mb-1">Image</label>
        <div class="h-28 w-full flex flex-col items-center justify-around">
            <UploadInput @update:image="formData.image = $event" :image="formData.image" />
            <span>or</span>
            <Input id="title" @update:modelValue="formData.image = $event" :modelValue="formData.image" placeholder="請輸入圖片網址" />
        </div>
    </div>
    <div class="col-span-12 md:col-span-5 px-2 flex flex-col items-center justify-end">
        <div class="w-full h-28 cursor-pointer" >
            <Image :image="formData.image" />
        </div>
    </div>
    <div class="col-span-12 px-2">
        <label class="block mb-1">Content</label>
        <TextArea 
            :modelValue="formData.content"
            @update:modelValue="formData.content = $event"
        ></TextArea>
    </div>

</form>
</template>