<template>
  <div class="main-control">
    <div class="d-lg-none lgheader">
      <img class="logo mr-2" src="../assets/y18.gif" alt="" />
      <nuxt-link class="logotext" to="/"><b>Hacker News</b></nuxt-link>
      <nuxt-link class="navtext" to="/">new</nuxt-link
      >
      <nuxt-link class="navtext" to="/">past</nuxt-link
      >
    </div>
    <div class="d-none d-lg-block">
      <div class="lgheader">
        <div>
          <img class="logo mr-2" src="../assets/y18.gif" alt="" />
          <nuxt-link class="logotext" to="/"><b>Hacker News</b></nuxt-link>
          <nuxt-link class="navtext" to="/">new</nuxt-link
          ><span class="navspe">|</span>
          <nuxt-link class="navtext" to="/">past</nuxt-link
          ><span class="navspe">|</span>
          <nuxt-link class="navtext" to="/comments">comments</nuxt-link
          ><span class="navspe">|</span>
          <nuxt-link class="navtext" to="/">ask</nuxt-link
          ><span class="navspe">|</span>
          <nuxt-link class="navtext" to="/">show</nuxt-link
          ><span class="navspe">|</span>
          <nuxt-link class="navtext" to="/">jobs</nuxt-link
          ><span class="navspe">|</span>
          <nuxt-link class="navtext" to="/">submit</nuxt-link
          ><span class="navspe">|</span>
        </div>
        <div>
          <nuxt-link class="navtext" to="/">login</nuxt-link>
        </div>
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
  async fetch() {
    this.mountains = await fetch(
      "https://api.nuxtjs.dev/mountains"
    ).then((res) => res.json());
  },
};
</script>

<style lang="scss" scoped>
.main-control {
  .lgheader {
    background: #ff6602;
    display: flex !important;
    justify-content: space-between;
    padding: 7px 5px;
    .logo {
      margin-bottom: 4px;
    }
    .logotext {
      font-size: 10pt;
      color: #222222;
      line-height: 12px;
      margin-right: 5px;
      text-decoration: none;
    }
    .navtext {
      font-size: 10pt;
      color: #222222;
      line-height: 12px;
      margin-right: 5px;
      text-decoration: none;
    }
    .navspe {
    }
  }
}
</style>
