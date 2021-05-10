<template>
  <div class="about">
    <router-link class="city"  @click.native="handleClick(item)" to="/"
      v-for="item of cities" :key="item" tag="p">
      {{item}}
    </router-link>
    <!-- <router-link class="city" @click.native=handleClick(item) 
    v-for="item of cities" :key="item">{{item}}
    </div>-->
  </div>
</template>
<script>
export default {
  data(){
    return{
      cities:["鞍山","安庆","安阳","安顺","安康","北京","保定","包头","巴彦淖尔","本溪","白山","白城","蚌埠",
      "亳州","滨州","北海","百色","巴中","毕节","保山","宝鸡","白银"]
    }
  },
  methods:{
    handleClick(city){
      this.$store.dispatch("changeCity",city)
    }
  }
}
</script>
<style scoped>
.about {
  padding-left: 20px;
}
.city {
  width: 323px;
  height: 48px;
  line-height: 48px;
  border-bottom: 1px solid #ededed;
}
</style>