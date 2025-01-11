<template>
    <div class="w-full">
        <label for="upload" class="w-full block p-2 pr-10 rounded-md bg-mintGreen cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-slate-500">Upload Image</label>
        <input 
            class="hidden" 
            type="file" 
            id="upload" 
            accept=".svg,.png,.jpg,.jpeg"
            @change="handleFileChange" 
        />
    </div>
</template>

<script setup lang="ts">

interface Props {
    image: string | null;
}

defineProps<Props>();

const emit = defineEmits<{
    'update:image': [value: string]
}>();

const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
// 把圖片轉成 base64
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            emit('update:image', reader.result as string);
        }
    }
}
</script>
