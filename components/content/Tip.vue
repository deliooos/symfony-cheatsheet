<script setup lang="ts">
defineProps<{
  type?: string
}>()
</script>

<template>
  <div class="alert py-0 shadow-lg" :class="type">
    <div>
      <span v-if="type === 'alert-success'">
        <Icon name="ri:checkbox-circle-line" size="1.3rem" />
      </span>
      <span v-else-if="type === 'alert-warning'">
        <Icon name="ri:error-warning-line" size="1.3rem" />
      </span>
      <span v-else-if="type === 'alert-error'">
        <Icon name="ri:forbid-2-line" size="1.3rem" />
      </span>
      <span v-else>
        <Icon name="ri:information-line" size="1.3rem" />
      </span>
      <span>
        <slot/>
      </span>
    </div>
  </div>
</template>