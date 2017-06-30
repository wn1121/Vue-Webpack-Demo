<template>
  <div>
    <transition :name="transitionName">
      <router-view
        class="view"
        keep-alive
        transition
        transition-mode="out-in">
      </router-view>
    </transition>
    <UiFooter></UiFooter>
  </div>
</template>

<script>
  import UiFooter from './components/footer.vue';
  export default {
    components: { UiFooter },
    data () {
      return {
        transitionName: 'slide'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        console.log(this.$route.path);
        //this.transitionName = toDepth < fromDepth ? 'fade' : 'slide'
      }
    }
  }
</script>

<style lang="scss">
  @import "./style/style";
</style>
