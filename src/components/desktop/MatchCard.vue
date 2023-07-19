<template>
  <div class="relative w-full h-20 rounded-[10px] overflow-hidden">
    <div class="absolute top-[2px] left-[2px] flex justify-center items-center w-[46px] h-4 bg-danger rounded-br-[10px]" v-if="live">
      <span class="font-normal text-[10px] leading-[10px] text-white tracking-[.09em]">LIVE</span>
    </div>
    <div class="rounded-graident-border absolute before:border-2 before:border-transparent before:bg-success-gradient-match-border"></div>
    <div class="flex w-full h-full justify-between items-center px-[78px]">
      <div>
        <p class="font-medium text-base text-white mb-[3px]">{{ title }}</p>
        <p class="font-normal text-sm text-white">{{ time }}</p>
      </div>
      <div class="flex">
        <PointCard v-for="(point, index) in points" :key="index" :flag="point.flag" :score="point.score" class="mr-4 last:mr-0" />
      </div>
    </div>
  </div>
</template>

<script>
import PointCard from './common/PointCard.vue';

export default {
  name: "match-card-component",
  components: { PointCard },
  props: {
    title: String,
    time: String,
    live: Boolean,
    points: Array,
  }
}
</script>