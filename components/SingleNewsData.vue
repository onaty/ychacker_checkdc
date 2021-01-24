<template>
  <div class="main-control">
    <div class="info">
      <div class="firstpart mr-2">
        <p class="position">
          {{ position }}
          <img class="votearrow" src="../assets/grayarrow.gif" alt="" />
        </p>
      </div>
      <div class="secondpart">
        <p style="margin: 0px">
          <a :href="domainlink" class="title"> {{ title }}  <span class="domain"> ({{ domain }})</span></a>
         
        </p>
        <p class="comments">
          {{ points }} points by&nbsp;
          <a :href="'https://news.ycombinator.com/user?id=aga_ml'">{{
            author
          }}</a
          >&nbsp;<a href=""> {{time_ago}}</a>&nbsp; |&nbsp;
          <a href=""
            >{{ commentscount }}
            {{ commentscount == 1 ? "point" : "points" }}</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mountains: [],
    };
  },
  props: {
    position: Number,
    title: String,
    domain: String,
    domainlink: String,
    author: String,
    commentscount: Number,
    points: Number,
    id: String,
    time: Number,
    time_ago: String,
    type:String
  },
  async fetch() {
    this.mountains = await fetch(
      "https://api.nuxtjs.dev/mountains"
    ).then((res) => res.json());
  },
};
</script>

<style lang="scss" scoped>
.main-control {
  margin-top: 3px;
  .info {
    display: flex;
    .firstpart {
      display: flex;
      .position {
        font-size: 10pt;
        color: #828282;
        margin: 0px;
        margin-top: 2px;
            white-space: nowrap;
      }

      .votearrow {
        height: 13px;

        margin-top: -6px;
      }
    }

    .secondpart {
      .title {
        color: #000;
        text-decoration: none;
        font-size: 10pt;
        font-weight: 500;
      }
      .domain {
        color: #828282;
        font-size: 8pt;
      }

      .comments {
        margin: 0px;
        color: #828282;
        font-size: 7pt;
        a {
          color: #828282;
        }
      }
    }
  }
}
</style>
