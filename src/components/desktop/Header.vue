<template>
  <div class="flex justify-end items-center w-full h-[94px] px-[70px]">
    <GradientBorderButton text="Sign In" class="mr-6" />
    <Button class="bg-success-gradient-bg shadow-btn font-semibold text-base text-white">Sign Up</Button>
  </div>
</template>

<script>
import Button from './common/Button.vue';
import GradientBorderButton from './common/GradientBorderButton.vue';

export default {
  name: "header-component",
  components: { Button, GradientBorderButton }
}
</script>