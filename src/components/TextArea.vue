<template>
    
    <div class="relative h-28 rounded-md overflow-hidden">
        <textarea 
            class="w-full h-full p-2  bg-lightGray focus:outline-none focus:ring-2 focus:ring-slate-500" 
            :value="modelValue" 
            @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
            :maxlength="maxLength"
        ></textarea>
        <div class="absolute bottom-0 right-0 flex items-center">
            <div class="w-0 h-0 border-l-[36px] border-l-transparent border-b-[36px] border-b-mintGreen"></div>
            <div class="p-2 text-sm text-slate-500 bg-mintGreen">
                {{ maxLength }}/<span class="min-w-7 max-w-7 inline-block text-start">{{ modelValue.length }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    modelValue: string;
}

withDefaults(defineProps<Props>(), {
    modelValue: ""
})

const maxLength = 200;

defineEmits<{
    'update:modelValue': [value: string]
}>()

</script>
