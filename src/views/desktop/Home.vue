<template>
  <div>
    <div class="pr-[70px] mb-[53px]">
      <div class="relative flex justify-end w-full h-[260px] bg-[#030031] shadow-footer-card rounded-[20px] mb-6">
        <img src="../../assets/people.png" alt="people" class="absolute w-[633px] h-full left-[65px]">
        <div class="relative mt-[61px] mr-[140px] z-10">
          <p class="font-bold text-2xl leading-9 text-white mb-[10px]">Punjab Kings vs Delhi Capitals</p>
          <p class="font-normal text-base text-white mb-5">Place a bet and win upto ₹ 1 Crore</p>
          <Button class="bg-success-gradient-bg shadow-btn font-semibold text-base">Bet Now</Button>
        </div>
      </div>
      <div class="flex items-center w-full h-8 bg-[#222222] rounded-[5px]">
        <div class="flex shrink-0 items-center w-[140px] h-full pl-9 bg-nav-right bg-100% mr-9">
          <span class="font-semibold text-sm tracking-[.2em] text-white">NEWS</span>
        </div>
        <div class="flex w-full font-normal text-sm text-[#B8BAB8] whitespace-nowrap overflow-hidden">
          <div class="relative flex items-center will-change-transform animate-alarm">
            <span class="mr-4">Tata IPL 2023 - Punjab Kings vs Delhi Capitals - Play Now.</span>
            <div class="w-2 h-2 aspect-square bg-secondary rounded-full mr-4"></div>
            <span class="mr-4">Tata IPL 2023 - Punjab Kings vs Delhi Capitals - Play Now.</span>
            <div class="w-2 h-2 aspect-square bg-secondary rounded-full mr-4"></div>
            <span class="mr-4">Tata IPL 2023 - Punjab Kings vs Delhi Capitals - Play Now.</span>
            <div class="w-2 h-2 aspect-square bg-secondary rounded-full mr-4"></div>
            <span class="mr-4">Tata IPL 2023 - Punjab Kings vs Delhi Capitals - Play Now.</span>
            <div class="w-2 h-2 aspect-square bg-secondary rounded-full mr-4"></div>
          </div>
          <div class="relative flex items-center will-change-transform animate-alarm">
            <span class="mr-4">Tata IPL 2023 - Punjab Kings vs Delhi Capitals - Play Now.</span>
            <div class="w-2 h-2 aspect-square bg-secondary rounded-full mr-4"></div>
            <span class="mr-4">Tata IPL 2023 - Punjab Kings vs Delhi Capitals - Play Now.</span>
            <div class="w-2 h-2 aspect-square bg-secondary rounded-full mr-4"></div>
            <span class="mr-4">Tata IPL 2023 - Punjab Kings vs Delhi Capitals - Play Now.</span>
            <div class="w-2 h-2 aspect-square bg-secondary rounded-full mr-4"></div>
            <span class="mr-4">Tata IPL 2023 - Punjab Kings vs Delhi Capitals - Play Now.</span>
            <div class="w-2 h-2 aspect-square bg-secondary rounded-full mr-4"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex pr-[22.77px]">
      <div class="flex flex-col flex-grow mr-[27px]">
        <Tab :tabItems="tabItems" class="w-[1006px] mb-[25px]" @change-tab="handleChangeTab" />
        <div>
          <p class="font-semibold text-base text-white mb-[10px]">{{ tabItems[activeTabIndex].label }}</p>
          <MatchCard v-for="(match, index) in matchList" :key="index" v-bind="match" class="mb-4 last:mb-0" />
        </div>
      </div>
      <div class="shrink w-[154px]">
        <PlayCard v-for="(item, index) in playCardList" :key="index" :img="item" class="mb-6 last:mb-0" />
      </div>
    </div>
  </div>
</template>

<script>
import MatchCard from '@/components/desktop/MatchCard.vue';
import PlayCard from '@/components/desktop/PlayCard.vue';
import Tab from '@/components/desktop/Tab.vue';
import Button from '@/components/desktop/common/Button.vue';

export default {
  name: "home-view",
  components: { Button, Tab, MatchCard, PlayCard },
  data() {
    return {
      tabItems: [
        { id: 'cricket', label: 'Cricket' },
        { id: 'football', label: 'Football' },
        { id: 'tennis', label: 'Tennis' },
      ],
      activeTabIndex: 0,
      matchList: [
        {
          title: 'Punjab Kings vs Delhi Capitals',
          time: '17 May 2023, 07:30 PM',
          live: true,
          points: [
            { flag: true, score: 1.28 },
            { flag: false, score: 1.29 },
            { flag: true, score: 0 },
            { flag: false, score: 0 },
            { flag: true, score: 4.50 },
            { flag: false, score: 4.60 },
          ]
        },
        {
          title: 'Punjab Kings vs Delhi Capitals',
          time: '17 May 2023, 07:30 PM',
          live: false,
          points: [
            { flag: true, score: 1.28 },
            { flag: false, score: 1.29 },
            { flag: true, score: 0 },
            { flag: false, score: 0 },
            { flag: true, score: 4.50 },
            { flag: false, score: 4.60 },
          ]
        },
        {
          title: 'Punjab Kings vs Delhi Capitals',
          time: '17 May 2023, 07:30 PM',
          live: false,
          points: [
            { flag: true, score: 1.28 },
            { flag: false, score: 1.29 },
            { flag: true, score: 0 },
            { flag: false, score: 0 },
            { flag: true, score: 4.50 },
            { flag: false, score: 4.60 },
          ]
        },
        {
          title: 'Punjab Kings vs Delhi Capitals',
          time: '17 May 2023, 07:30 PM',
          live: true,
          points: [
            { flag: true, score: 1.28 },
            { flag: false, score: 1.29 },
            { flag: true, score: 0 },
            { flag: false, score: 0 },
            { flag: true, score: 4.50 },
            { flag: false, score: 4.60 },
          ]
        },
      ],
      playCardList: ['fruity-reels', 'hot-twist', 'fortune-wheel', 'adventure-saga']
    }
  },
  methods: {
    handleChangeTab(index) {
      this.activeTabIndex = index;
    }
  }
}
</script>