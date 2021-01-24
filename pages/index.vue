<template>
  <div class="">
    <div v-if="this.$store.state.news.isLoading">
      <p>Fetching News</p>
    </div>
    <div v-if="!this.$store.state.news.isLoading">
      <div>
        <SingleNewsData
          v-for="(item, index) in this.$store.state.news.allnews"
          :key="item.id"
          :position="page * 30 + index + 1"
          :title="item.title"
          :domain="item.domain"
          :domainlink="item.url"
          :points="item.points"
          :author="item.user"
          :commentscount="item.comments_count"
          :commentslink="'commentid'"
          :id="item.id"
          :time="item.time"
          :time_ago="item.time_ago"
          :type="item.type"
        />
      </div>
      <br /><br /><br />
      <button class="btn" @click="fetchapi2(true)">More</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      page: 1,
    };
  },
  mounted() {
    this.fetchapi2();
  },
  methods: {
    async fetchapi2(add) {
      // console.log(this.$store.state,'fdfd');
      if (add) {
        this.page++;
      }
      await this.$store.dispatch("news/fetchnews", { page: this.page });
    },
  },
};
</script>

<style>
</style>
