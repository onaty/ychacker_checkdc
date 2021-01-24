<template>
  <div class="homecontrol">
    <div class="containerholder">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homecontrol {
  display: flex;
  justify-content: center;
  align-items: center;
  .containerholder {
    width: 85%;
    margin-top: 5px;
    background: #f6f6ef;
    min-height: 90vh;
  }
  @media only screen and (max-width: 600px) {
    .containerholder {
      width: 100%;
      margin-top: 0px;
    }
  }
}
</style>
