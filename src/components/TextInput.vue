<template>
    <div class="mb-4 ">
        <label :for="id" class="block text-sm font-medium mb-2">{{ label }}</label>
        <input 
            :type="type"
            :id="id"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            class="w-full p-2 pr-10 rounded-md bg-lightGray cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500"
            :placeholder="placeholder"
        >
    </div>
</template>

<script setup lang="ts">
interface Props {
    label: string;
    id: string;
    modelValue: string;
    type?: string;
    placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    placeholder: ''
});

defineEmits<{
    'update:modelValue': [value: string]
}>();
</script>