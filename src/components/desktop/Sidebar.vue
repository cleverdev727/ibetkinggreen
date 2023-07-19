<template>
  <div class="success-gradient-flow-border fixed top-0 left-0 z-20 border-2 animate-flowing-border w-[100px] h-full px-[10px] pt-[110px] bg-dark font-urbanist font-normal text-xs leading-[14px] text-center text-white">
    <ul class="relative mb-[101px]">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        @click="handleRedirect(item.path)"
        class="relative z-10 flex flex-col justify-center items-center w-20 h-20 rounded-full mb-[15px] last:mb-0 cursor-pointer"
        :class="{
          'opacity-80': item.path != $route.path
        }"
      >
        <img :src="require(`../../assets/${item.id}.svg`)" :alt="item.id" class="h-6 mb-2">
        <span>{{ item.label }}</span>
      </li>
      <div
        class="curve absolute bg-curve w-24 h-[118px] -right-3 -translate-y-6 transition-all"
        :class="curveTop"
      ></div>
    </ul>
    <div class="flex justify-center items-center w-[72px] h-[72px] bg-success rounded-full drop-shadow-btn shadow-bubble cursor-pointer">
      <img src="../../assets/bubble.svg" alt="bubble" class="w-10">
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar-component',
  data() {
    return {
      menuItems: [
        {
          'id': 'home',
          'path': '/',
          'label': 'Home'
        },
        {
          'id': 'inplay',
          'path': '/inplay',
          'label': 'Inplay'
        },
        {
          'id': 'sportsbook',
          'path': '/sportsbook',
          'label': 'Sportsbook'
        },
        {
          'id': 'live-casino',
          'path': '/live-casino',
          'label': 'Live Casino'
        },
        {
          'id': 'casino',
          'path': '/casino',
          'label': 'Casino'
        },
        {
          'id': 'promotion',
          'path': '/promotion',
          'label': 'Promotion'
        },
      ],
    };
  },
  methods: {
    handleRedirect(path) {
      this.$router.push(path);
    },
  },
  computed: {
    curveTop() {
      let index = null;
      this.menuItems.map((item, i) => {
        if (item.path == this.$route.path) index = i;
      });
      return `top-${index * 95}px`;
    }
  }
}
</script>

<style scoped>
  .top-0px {
    top: 0px;
  }
  .top-95px {
    top: 95px;
  }
  .top-190px {
    top: 190px;
  }
  .top-285px {
    top: 285px;
  }
  .top-380px {
    top: 380px;
  }
  .top-475px {
    top: 475px;
  }
  .top-570px {
    top: 570px;
  }
</style>