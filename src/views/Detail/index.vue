<template>
  <div class="detail">
    <img class="img" :src="subject.images.small" alt />
    <div class="content">
      <div class="title">
        <p class="name">{{subject.title}}</p>
        <p class="grade">{{subject.rating.average}}分</p>
      </div>
      <div class="film-category grey-text">
        <span v-for="item of subject.genres" :key="item">{{item}} |</span>
      </div>
      <p class="grey-text">{{subject.pubdate}}上映</p>
      <span class="grey-text">{{subject.countries[0]}} | {{subject.durations[0]}}</span>
      <p class="desc">{{subject.summary}}</p>
    </div>
    <p class="artists">演职人员</p>
    <div class="at-container">
      <div class="at">
        <img v-for="item of subject.casts" :key="item.id" :src="item.avatars.small" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subject: {}
    };
  },
  mounted() {
    var id = this.$route.params.id;
    this.axios
      .get(`https://douban.uieee.com/v2/movie/subject/${id}`)
      .then(res => {
        this.subject = res.data;
      });
  }
};
</script>

<style scoped>
.ditail {
  position: relative;
  background: #f4f4f4;
}
.img {
  width: 100%;
  position: absolute;
  top: -164px;
  left: 0;
}
.content {
  width: 93%;
  position: absolute;
  top: 31.5%;
  left: 0;
  background: #fff;
  padding: 12px 15px 15px 15px;
  font-size: 13px;
  color: #797d82;
}
p {
  margin: 0;
  padding: 0;
}
.title {
  display: flex;
  justify-content: space-between;
}
.name {
  color: #191a1b;
  font-size: 18px;
}
.grade {
  font-size: 18px;
  font-style: italic;
  color: #ffb232;
}
.film-category span {
  margin-right: 5px;
}
.grey-text {
  margin-top: 5px;
}
.desc {
  margin-top: 12px;
}
.at {
  display: grid;
  grid-template-columns: repeat(5, 100px);
  gap: 10px;
  background: #fff;
}
.at img {
  width: 85px;
  height: 117px;
}
.at-container {
  width: 100%;
  height: 140px;
  position: absolute;
  top: 82%;
  left: 0;
  z-index: 200;
  overflow-x: auto;
  overflow-y: hidden;
}
.artists {
  position: absolute;
  top: 78%;
  left: 0;
  margin-bottom: 10px;
}
</style>