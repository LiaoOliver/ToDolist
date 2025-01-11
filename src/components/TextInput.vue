<template>
    <div class="w-full">
        <input 
            :type="type"
            :id="id"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            class="w-full p-2 pr-10 rounded-md bg-lightGray cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-600"
            :placeholder="placeholder"
        >
    </div>
</template>

<script setup lang="ts">
interface Props {
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