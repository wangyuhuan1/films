<template>
  <div class="nowPlaying">
     <item :data="item" v-for="item of subjects" :key="item.id"></item>
  </div>
</template>

<script>
import Item from '../ComingSoon/components/Item'
export default {
    name:"nowPlaying",
    data(){
      return {
        subjects:[]
      }
    },
    components:{
      Item
    },
    mounted(){
      this.axios.get("https://douban.uieee.com/v2/movie/in_theaters").then(res=>{
          this.subjects=res.data.subjects
      })
    }
}
</script>

<style scoped>
.nowPlaying{
  padding-left: 10px
}
</style>