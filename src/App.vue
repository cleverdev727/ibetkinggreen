<template>
  <div class="flex max-w-screen h-full relative font-poppin">
    <Sidebar />
    <div class="w-full pl-[100px] bg-content">
      <div class="relative">
        <Header />
        <div class="pl-[70px]">
          <router-view></router-view>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./components/desktop/Footer.vue";
import Header from "./components/desktop/Header.vue";
import Sidebar from "./components/desktop/Sidebar.vue";

export default {
  name: "App",
  components: { Sidebar, Header, Footer }
};
</script>
