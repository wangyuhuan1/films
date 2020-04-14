<template>
  <div class="films">
    <div class="header" :style="{opacity:opacity}">
      <router-link to="/about" class="city" tag="div">
        {{this.$store.state.city}}
        <i class="iconfont">&#xe67b;</i>
      </router-link>
      <div class="title">电影</div>
    </div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) of images" :key="index">
        <img :src="item" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="city-fixed">
      {{this.$store.state.city}}
      <i class="iconfont">&#xe67b;</i>
    </div>
    <div class="nav">
      <router-link to="/films/nowPlaying">正在热映</router-link>
      <router-link to="/films/comingSoon">即将上映</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "films",
  data() {
    return {
      images: [require("@/assets/01.jpg"), require("@/assets/02.jpg")],
      opacity: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handle);
  },
  methods: {
    handle() {
      var height = document.documentElement.scrollTop;
      var opacity = height / 300;
      if (opacity > 1) {
        opacity = 1;
      }
      this.opacity = opacity;
    },
    destroyed() {
      window.removeEventListener("scroll", this.handle);
    },
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
.city-fixed {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}
.nav {
  height: 49px;
  line-height: 49px;
  font-size: 14px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #ededed;
}

.nav a {
  color: #191a1b;
}
.nav .router-link-exact-active {
  color: #ff5f16;
  border-bottom: 2px solid #ff5f16;
}

.header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #fff;
  padding-left: 15px;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
}
.title {
  width: 140px;
  font-size: 17px;
  text-align: center
}
.city {
  width: 100px;
  font-size: 13px;
}
</style>
