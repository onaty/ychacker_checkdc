<template>
  <div class="">
    <div v-if="isLoading">Is Fetching data</div>
    <div v-if="!isLoading">
      <div v-if="isError">AN Error Occured</div>
      <div class="pl-2" v-if="!isError">
        
        <SingleNewsData
      
          :title="info.title"
          :domain="info.domain"
          :domainlink="info.url"
          :points="info.points"
          :author="info.user"
          :commentscount="info.comments_count"
          :commentslink="'commentid'"
          :id="info.id"
          :time="info.time"
          :time_ago="info.time_ago"
          :type="info.type"
        />
        <br />
        <h3>All Comments</h3>
        <br />


        <div>
          <SingleCommentt
            v-for="item in info.comments"
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
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      info: {},
      isLoading: true,
      isError: false,
    };
  },
  mounted() {
    this.fetchapi();
  },
  methods: {
    async fetchapi() {
      let id = this.$route.query.id;
      this.$axios
        .$get("https://node-hnapi.herokuapp.com/item/" + id)
        .then((data) => {
        
          this.info = data;
          this.isLoading = false;
          // console.log(info.error);
          
        })
        .catch(() => {
          console.log('error');
          this.isLoading = false;
           this.isError = true;
        });
    },
  },
};
</script>

<style>
</style>
