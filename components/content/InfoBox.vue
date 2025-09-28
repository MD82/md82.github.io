<template>
  <div class="infobox" :class="style.classes">
    <!-- Title Section -->
    <div class="infobox-title">
      <span class="infobox-icon" v-html="style.icon"></span>

      <!-- 1. Check for title prop first -->
      <span v-if="props.title">{{ props.title }}</span>

      <!-- 2. If no prop, check for title slot -->
      <slot v-else name="title">

        <!-- 3. Fallback to default title -->
        <span class="default-title">{{ style.defaultTitle }}</span>
      </slot>
    </div>

    <!-- Divider -->
    <hr v-if="hasContent" class="infobox-divider" />

    <!-- Content Section -->
    <div v-if="hasContent" class="infobox-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'note',
  },
  // 'title' prop 추가
  title: {
    type: String,
    default: null,
  },
})

const slots = useSlots()
const hasContent = computed(() => !!slots.default)

// --- 이하 스타일 정의 코드는 이전과 동일 ---
const calloutStyles = {
  note: { classes: 'bg-blue-50 border-blue-200 text-blue-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.37-1.02-.37-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>`, defaultTitle: 'Note' },
  abstract: { classes: 'bg-gray-50 border-gray-200 text-gray-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 9.5c0 3.47-2.5 6.5-5.5 6.5S5.5 12.97 5.5 9.5S8 3 11 3s5.5 3.03 5.5 6.5m-8.8 0c0 1.93 1.27 3.5 2.8 3.5s2.8-1.57 2.8-3.5s-1.27-3.5-2.8-3.5s-2.8 1.57-2.8 3.5M19 22H3v-2h16z"/></svg>`, defaultTitle: 'Abstract' },
  info: { classes: 'bg-sky-50 border-sky-200 text-sky-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 5h2v6h-2z"/></svg>`, defaultTitle: 'Info' },
  todo: { classes: 'bg-gray-100 border-gray-300 text-gray-900', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/></svg>`, defaultTitle: 'To-Do' },
  tip: { classes: 'bg-emerald-50 border-emerald-200 text-emerald-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5m-3.2 0h-1.3L12 3h-2l-.8 10H7.9l1.4 4H12l.3-4h1.4zm3.2 2c.22 0 .43.03.64.08l-2.05 2.05c-.18.18-.29.43-.29.71v.21h-1v-1.5c0-.83.67-1.5 1.5-1.5z"/></svg>`, defaultTitle: 'Tip' },
  success: { classes: 'bg-green-50 border-green-200 text-green-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.36-9.36L21.19 8.19z"/></svg>`, defaultTitle: 'Success' },
  question: { classes: 'bg-violet-50 border-violet-200 text-violet-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-1-14h2v2h-2zm0 4h2v6h-2z"/></svg>`, defaultTitle: 'Question' },
  warning: { classes: 'bg-amber-50 border-amber-200 text-amber-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21h22L12 2zM13 18h-2v-2h2zm0-4h-2v-4h2z"/></svg>`, defaultTitle: 'Warning' },
  failure: { classes: 'bg-rose-50 border-rose-200 text-rose-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12z"/></svg>`, defaultTitle: 'Failure' },
  danger: { classes: 'bg-red-50 border-red-200 text-red-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1.75A10.25 10.25 0 0 0 1.75 12A10.25 10.25 0 0 0 12 22.25A10.25 10.25 0 0 0 22.25 12A10.25 10.25 0 0 0 12 1.75m-1 5a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m.25 3.25a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0z"/></svg>`, defaultTitle: 'Danger' },
  bug: { classes: 'bg-pink-50 border-pink-200 text-pink-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 8h-3.41l-1.72-1.72a4 4 0 0 0-5.74 0L6.41 8H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v3a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5v-3h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m-9 8a3 3 0 0 1-3-3v-3h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h2v3a3 3 0 0 1-3 3zm-1-6h-2V9h2zm8 0h-2V9h2z"/></svg>`, defaultTitle: 'Bug' },
  example: { classes: 'bg-purple-50 border-purple-200 text-purple-800', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 15v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2z"/></svg>`, defaultTitle: 'Example' },
  quote: { classes: 'bg-gray-100 border-gray-300 text-gray-700 italic', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 17h3l2-4V7h-6v6h3zm-8 0h3l2-4V7H5v6h3z"/></svg>`, defaultTitle: 'Quote' },
};
calloutStyles.summary = calloutStyles.tldr = calloutStyles.abstract;
calloutStyles.hint = calloutStyles.important = calloutStyles.tip;
calloutStyles.check = calloutStyles.done = calloutStyles.success;
calloutStyles.help = calloutStyles.faq = calloutStyles.question;
calloutStyles.caution = calloutStyles.attention = calloutStyles.warning;
calloutStyles.fail = calloutStyles.missing = calloutStyles.failure;
calloutStyles.error = calloutStyles.bug;

const style = computed(() => {
  const type = props.type.toLowerCase();
  return calloutStyles[type] || calloutStyles.note;
});
</script>

<style scoped>
/* 스타일은 이전과 동일하게 유지 */
.infobox {
  border-left-width: 4px;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
}
.infobox-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-size: 1.1em;
}
.infobox-icon {
  display: inline-flex;
  align-items: center;
  font-size: 1.2em;
}
.default-title {
  text-transform: capitalize;
}
.infobox-divider {
  border-top: 1px solid;
  border-color: currentColor;
  opacity: 0.2;
  margin-top: 0;
  margin-bottom: 0.8rem;
}
.infobox-content :deep(p:first-child) {
  margin-top: 0;
}
.infobox-content :deep(p:last-child) {
  margin-bottom: 0;
}
</style>