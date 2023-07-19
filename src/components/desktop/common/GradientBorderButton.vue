<template>
  <div class="relative flex h-12 justify-center items-center font-semibold text-base text-success">
    <button class="rounded-graident-border relative h-full px-10 drop-shadow-btn before:border-2 before:border-transparent before:bg-success-gradient-border">
      <span class="invisible">{{ text }}</span>
    </button>
    <span class="absolute">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'gradient-border-button-component',
  props: {
    text: String,
  }
}
</script>