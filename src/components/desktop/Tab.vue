<template>
  <div>
    <div class="flex mb-3">
      <div
        v-for="(item, index) in tabItems"
        :key="index"
        class="flex items-center justify-center w-[158px] cursor-pointer"
        @click="handleClickTab(index)"
      >
        <img
          :src="require(`../../assets/${item.id}.svg`)"
          :alt="item.id"
          class="h-8 mr-[6px]"
          :class="{
            'brightness-0 invert opacity-70': index != activeTabIndex
          }"
        >
        <span class="font-normal text-base" :class="[index == activeTabIndex ? 'text-success': 'text-white']">{{ item.label }}</span>
      </div>
    </div>
    <div class="relative w-full h-[5px] bg-[#33333E] rounded-[10px]">
      <div class="w-[158px] h-full bg-success shadow-bar rounded-[10px] transition-all" :style="`margin-left:${activeTabIndex * 158}px`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab-component',
  props: {
    tabItems: Array,
  },
  data() {
    return {
      activeTabIndex: 0,
    }
  },
  methods: {
    handleClickTab(index) {
      this.activeTabIndex = index;
      this.$emit('changeTab', index);
    }
  }
}
</script>