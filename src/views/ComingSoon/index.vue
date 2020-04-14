<template>
  <div class="coming-soon">
    <item :data="item" v-for="item of subjects" :key="item.id"></item>
  </div>
</template>

<script>
import Item from './components/Item'
export default {
  name:"comingSoon",
  data(){
    return{
      subjects:[]
    }
  },
  components:{
    Item
  },
  mounted(){
    this.axios.get("https://douban.uieee.com/v2/movie/coming_soon").then(res=>{
      this.subjects=res.data.subjects
    })
  }
}
</script>

<style scoped>
.coming-soon{
  padding-left: 15px
}
</style>