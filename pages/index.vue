<template>
  <div class="">
    <div v-if="this.$store.state.news.isLoading">
      <p>Fetching News</p>
    </div>
    <div v-if="!this.$store.state.news.isLoading">
      <div>
        <SingleNewsData
        v-for="item in this.$store.state.news.allnews" :key="item.id"
          :position="22"
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
    this.fetchapi2(3);
  },
  methods: {
    async fetchapi2(page) {
      // console.log(this.$store.state,'fdfd');
      await this.$store.dispatch("news/fetchnews", { page });
    },
  },
};
</script>

<style>
</style>
