<template>
    <div class="w-full h-full bg-lightGray rounded">
        <img v-if="image" class="w-full h-full object-cover rounded" 
            :src="image" 
            alt="Random Image">
    </div>
</template>

<script setup lang="ts">
interface Props {
    image: string;
}

defineProps<Props>()

</script>