<template>
  <div class="relative w-full h-[118.64px] p-[1px] shadow-play-card rounded-xl overflow-hidden">
    <div class="rounded-graident-border absolute top-0 left-0 before:border before:border-transparent before:bg-success-gradient-match-border"></div>
    <div class="flex flex-col w-full h-full rounded-[10px] overflow-hidden">
      <div class="relative flex flex-grow">
        <img :src="require(`../../assets/${img}.png`)" :alt="img" class="w-full h-full">
        <button class="absolute top-[7.12px] left-[7.12px] flex justify-center items-center w-[14.24px] h-[14.24px] bg-[#00000050] rounded-full">
          <img src="../../assets/heart.svg" alt="heart" class="w-[8.35px] h-[7.12px]">
        </button>
      </div>
      <div class="shrink flex justify-center items-center h-[18.98px] bg-success">
        <span class="font-urbanist font-bold text-[7px] leading-[9px] text-white mr-[4.6px]">Play Now</span>
        <img src="../../assets/arrow-right.svg" alt="arrow" class="w-[5.54px]">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'play-card-component',
  props: {
    img: String,
  }
}
</script>