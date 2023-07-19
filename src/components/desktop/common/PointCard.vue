<template>
  <button
    class="w-[50px] h-10 border-2 rounded-[5px] font-medium text-sm text-white opacity-70"
    :class="{
      'border-blue drop-shadow-blue': flag,
      'border-pink drop-shadow-pink': !flag,
    }"
  >
    {{ score == 0 ? '--' : score }}
  </button>
</template>

<script>
export default {
  name: 'point-card-component',
  props: {
    flag: Boolean,
    score: Number,
  }
}
</script>