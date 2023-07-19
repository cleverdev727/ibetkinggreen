<template>
  <div class="success-gradient-flow-border flex justify-between items-start w-full h-[310px] pl-[82px] pr-[95px] pt-[72px] bg-content font-normal text-base">
    <div>
      <div class="flex mb-[35px]">
        <img src="../../assets/wechat.svg" alt="wechat" class="w-10 mr-5">
        <img src="../../assets/telegram.svg" alt="telegram" class="w-10 mr-5">
        <img src="../../assets/mail.svg" alt="mail" class="w-10 mr-5">
        <img src="../../assets/facebook.svg" alt="facebook" class="w-10 mr-5">
        <img src="../../assets/instagram.svg" alt="instagram" class="w-10">
      </div>
      <div class="flex text-success">
        <div class="flex flex-col mr-[95px]">
          <span class="mb-3">About Us</span>
          <span class="mb-3">Contact Us</span>
          <span>Promotion</span>
        </div>
        <div class="flex flex-col">
          <span class="mb-3">Terms & Conditions</span>
          <span class="mb-3">Privacy Policy</span>
          <span>Responsible Gambling Policy</span>
        </div>
      </div>
    </div>
    <div>
      <div class="flex mb-[49px]">
        <div class="success-gradient-flow-border flex items-end w-[331px] h-[111px] bg-live-casino-bg shadow-footer-card mr-[38px]">
          <div class="flex items-center">
            <img src="../../assets/live-casino.png" alt="live-casino" class="w-[155px] h-[103px] mr-[5px]">
            <div>
              <p class="font-medium text-[11px] leading-[17px] text-white">Come, play with out</p>
              <p class="font-playfair font-extrabold text-xl gradient-text">LIVE CASINO</p>
              <p class="font-medium text-[11px] leading-[17px] text-white">and win big!</p>
            </div>
          </div>
        </div>
        <div class="success-gradient-flow-border flex items-center w-[331px] h-[111px] overflow-hidden bg-[#170021] shadow-footer-card">
          <img src="../../assets/slot-machine.png" alt="slot-machine" class="w-[186px] h-[111px] mr-1">
          <div class="flex flex-col items-center">
            <p class="font-playfair font-medium text-[22px] leading-[30px] text-white whitespace-nowrap">Slot Machine</p>
            <img src="../../assets/777.png" alt="777" class="w-[80.53px] h-[38.39px] mb-[7.49px]">
            <p class="font-medium text-[7.5px] leading-[11px] text-white">Take your chance!</p>
          </div>
        </div>
      </div>
      <span class="text-white opacity-70">Copyright  © 2023 &lt;Brand Name&gt;. All rights reserved.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-component',
}
</script>

<style scoped>
  .gradient-text {
    background: linear-gradient(180deg, #E5E512 19.44%, #EA7E47 73.33%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
</style>