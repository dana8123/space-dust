import { ref } from 'vue';
const thoughts = ref([]);
const newThought = ref('');
function submitThought() {
    if (!newThought.value.trim())
        return;
    const thought = {
        id: Date.now(),
        text: newThought.value,
        top: Math.random() * 200, // 화면 범위 내 위치 설정
        offsetX: (Math.random() * 200) - 100,
    };
    thoughts.value.push(thought);
    // 4초 후에 해당 생각 삭제 (애니메이션이 끝난 후)
    setTimeout(() => {
        removeThought(thought.id);
    }, 4000);
    newThought.value = ''; // 비우기
}
function removeThought(id) {
    thoughts.value = thoughts.value.filter(thought => thought.id !== id); // 생각 삭제
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onKeydown: (__VLS_ctx.submitThought) },
    placeholder: "생각을 적고 날려보세요...",
    ...{ class: "w-100 h-14 p-4 rounded-lg text-grey text-4xl font-medium placeholder-gray-500 overflow-hidden text-ellipsis" },
});
(__VLS_ctx.newThought);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.submitThought) },
    ...{ class: "mt-2 px-4 py-2 bg-purple-600 rounded text-white" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative mt-10 w-full h-[300px] overflow-hidden flex justify-center" },
});
for (const [thought] of __VLS_getVForSourceType((__VLS_ctx.thoughts))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (thought.id),
        ...{ class: "absolute animate-float text-white opacity-70 text-center" },
        ...{ style: ({ top: thought.top + 'px', transform: `translateX(${thought.offsetX}px)` }) },
    });
    (thought.text);
}
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['h-14']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ellipsis']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-purple-600']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[300px]']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-float']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-70']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            thoughts: thoughts,
            newThought: newThought,
            submitThought: submitThought,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
