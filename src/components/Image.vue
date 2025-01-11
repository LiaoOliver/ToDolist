<template>
    <div class="w-full h-full bg-lightGray rounded">
        <img v-if="image" class="w-full h-full object-cover rounded" 
            :src="image" 
            alt="Random Image">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface Props {
    image: string;
}

const props = withDefaults(defineProps<Props>(), {
    image: ""
})

const image = ref(props.image);

</script>