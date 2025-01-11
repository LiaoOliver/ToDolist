<!-- 客製化上傳圖片元件 -->
<template>
    <div class="w-full">
        <label for="upload" class="w-full block p-2 pr-10 rounded-md bg-mintGreen cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-slate-500">{{ image }}</label>
        <input class="hidden" type="file" id="upload" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    image: string | null;
}

const props = withDefaults(defineProps<Props>(), {
    image: null
})

const image = ref(props.image === "" ? "Upload Image" : props.image);


</script>
