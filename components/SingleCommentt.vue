<template>
  <div class="main-control">
    <div class="info">
      <div class="firstpart mr-2">
        <p class="position">
          <img class="votearrow" src="../assets/grayarrow.gif" alt="" />
        </p>
      </div>
      <div class="secondpart">
        <p class="comments">
          <a :href="'https://news.ycombinator.com/user?id=aga_ml'">{{ user }}</a
          >&nbsp;<a href=""> {{ time_ago }}</a>
        </p>
        <p style="
    font-size: 13px !important;
" v-html="content"></p>
      </div>
    </div>
 
    <div class="d-none d-lg-block"
      v-if="comments.length > 0"
      :style="{ paddingLeft: 50 * (level + 1) + 'px' }"
    >
     <!-- <p   v-for="item in comments"
        :key="item.id+item.user">
        
        
        {{item.content}}</p> -->
      <SingleCommentt
        v-for="item in comments"
        :key="item.id"
        :id="item.id"
        :level="item.level"
        :user="item.user"
        :time="item.time"
        :time_ago="item.time_ago"
        :content="item.content"
        :comments="item.comments"
      />
    </div>

     <div class="dd-lg-none "
      v-if="comments.length > 0"
      :style="{ paddingLeft:  (level + 5) + 'px' }"
    >
     <!-- <p   v-for="item in comments"
        :key="item.id+item.user">
        
        
        {{item.content}}</p> -->
      <SingleCommentt
        v-for="item in comments"
        :key="item.id"
        :id="item.id"
        :level="item.level"
        :user="item.user"
        :time="item.time"
        :time_ago="item.time_ago"
        :content="item.content"
        :comments="item.comments"
      />
    </div>
  </div>
</template>
<script>
export default {

  name: "SingleCommentt",
  data() {
    return {
      mountains: [],
    };
  },
  props: {
    id: Number,
    level: Number,
    user: String,
    time: Number,
    time_ago: String,
    content: String,
    comments: Array,
  },
  mounted() {
    // console.log(this.comments, this.id,"inners");
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
