<template>
  <div>
    <UiHeader title="内容"></UiHeader>
    <section>
      <p></p>
      <p>content:{{ $route.params.id }}</p>
      <p>username:{{ $route.params.username }}</p>
      <router-link :to="'hot'" append>hot</router-link>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
  import UiHeader from '../components/header.vue';
  import Utils from '../common/utils';

  export default {
    components: { UiHeader },
    created() {
        console.log(Utils.getHost());
    }
  }
</script>
