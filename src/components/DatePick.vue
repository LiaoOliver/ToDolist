<template>
    <div>
        <div class="flex justify-between items-center">
            <!-- 開始日期 -->
            <div class="relative w-full">
                <!-- 自定義顯示區域 -->
                <div ref="startDateInputUi" @click="triggerDatePicker('start')"
                    class="w-full p-2 pr-10 rounded-md bg-lightGray cursor-pointer text-center"
                    :class="{ 'ring-2 ring-slate-500': isFocusStartDate }">
                    {{ formatDate(startDate) || '請選擇開始日期' }}
                </div>

                <!-- 隱藏的原生日期選擇器 -->
                <input ref="startDateInput" type="date" :value="startDate" @change="handleStartDateChange"
                    class="absolute opacity-0 invisible" :max="maxDate">
            </div>

            <div class="px-2">~</div>

            <!-- 結束日期 -->
            <div class="relative w-full">
                <!-- 自定義顯示區域 -->
                <div ref="endDateInputUi" @click="triggerDatePicker('end')"
                    class="w-full p-2 pr-10 rounded-md bg-lightGray cursor-pointer text-center"
                    :class="{ 'ring-2 ring-slate-500': isFocusEndDate }">
                    {{ formatDate(endDate) || '請選擇結束日期' }}
                </div>

                <!-- 隱藏的原生日期選擇器 -->
                <input id="endDateInput" ref="endDateInput" type="date" :value="endDate" @change="handleEndDateChange" @blur="isFocusEndDate = false"
                    class="absolute w-0" :min="minDate">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';

interface Props {
    label: string;
    startDate: string;
    endDate: string;
}
const props = defineProps<Props>();

// 最小日期
const minDate = computed(() => {
    return addOneDay(props.startDate);
});
// 最大日期
const maxDate = computed(() => {
    return subtractOneDay(props.endDate);
});
// 原生的日期選擇器
const startDateInput = ref<HTMLInputElement | null>(null);
const endDateInput = ref<HTMLInputElement | null>(null);
// 自定義顯示的元素
const startDateInputUi = ref<HTMLDivElement | null>(null);
const endDateInputUi = ref<HTMLDivElement | null>(null);
// 是否聚焦
const isFocusStartDate = ref(false);
const isFocusEndDate = ref(false);

// 點擊外部關閉日期選擇器
const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    
    // 檢查是否點擊在開始日期選擇器外部
    if (startDateInputUi.value && !startDateInputUi.value.contains(target)) {
        isFocusStartDate.value = false;
    }
    
    // 檢查是否點擊在結束日期選擇器外部
    if (endDateInputUi.value && !endDateInputUi.value.contains(target)) {
        isFocusEndDate.value = false;
    }
};

// 在組件掛載時添加事件監聽器
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

// 在組件卸載時移除事件監聽器
onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});

const emit = defineEmits<{
    'update:startDate': [value: string],
    'update:endDate': [value: string]
}>();

// 觸發原生日期選擇器
const triggerDatePicker = (type: 'start' | 'end') => {
    if (type === 'start') {
        const datePicker = startDateInput.value as HTMLInputElement;
        isFocusStartDate.value = true;
        datePicker.showPicker();
    } else {
        const datePicker = endDateInput.value as HTMLInputElement;
        isFocusEndDate.value = true;
        datePicker.showPicker();
    }
};

// 處理日期變更
const handleStartDateChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    emit('update:startDate', value);
};

const handleEndDateChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    emit('update:endDate', value);
};

// 格式化日期顯示
const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
};

const addOneDay = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
};

const subtractOneDay = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    date.setDate(date.getDate() - 1);
    return date.toISOString().split('T')[0];
};


</script>

<style scoped>
/* 移除預設的日期選擇器樣式 */
input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
}

/* 移除 Safari 的預設樣式 */
input[type="date"]::-webkit-date-and-time-value {
    text-align: left;
}
</style>
