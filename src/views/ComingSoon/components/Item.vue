<template>
  <router-link :to="`/detail/${data.id}`" class="item" tag="div">
    <img :src="data.images.small" alt />
    <div class="right">
      <p class="name">{{data.title}}</p>
      <div class="at">
        <span>主演:</span>
        <div v-for="item of data.casts" :key="item.id">
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="at">
        <span>上映日期：</span>
        <span>{{data.mainland_pubdate}}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Item",
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style scoped>
img {
  width: 66px;
}
.item {
  padding: 15px 15px 15px 0;
  border-bottom: 1px solid #ededed;
  display: flex;
}
.name {
  color: #191a1b;
  font-size: 16px;
  margin-top: 0;
}
.right {
  padding: 0 10px;
}
.at {
  display: flex;
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
  width: 194px;
  height:17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
}
.at span:first-child {
  margin-right: 5px;
}
</style>