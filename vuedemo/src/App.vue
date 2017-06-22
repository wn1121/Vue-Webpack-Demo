<template>
  <div>
    <!--<h1>Hello App!</h1>-->
    <!--<p>-->
      <!--<router-link to="/index">Go to Index</router-link>-->
      <!--<router-link to="/content">Go to Content</router-link>-->
    <!--</p>-->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>

<style lang="scss">
  @import "./style/style";
</style>
