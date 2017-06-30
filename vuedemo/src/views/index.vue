<template>
  <div>
    <UiHeader title="首页"></UiHeader>
    <section>
      <h1 class="logo">cnodejs Api Test</h1>
      <div class="loading" v-if="loading" style="padding: .1rem">
        Loading...
      </div>
      <ul class="list">
        <li v-for="item in lists">{{item.title}}</li>
      </ul>
    </section>
  </div>
</template>
<script>
  import UiHeader from '../components/header.vue';

  export default {
    components: { UiHeader },
    data() {
      return {
        loading: false,
        lists: []
      }
    },
    created () {
      // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
      this.fetchData();
      console.log(this.$valid.validMobile('13717650076'));
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      fetchData (params) {
        if (!params) params = {};
        this.loading = true;
        // 我们这里用全局绑定的 $api 方法来获取数据，方便吧~
        this.$api.get('topics', params, (r) =>{
          this.loading = false;
          this.lists = r.data
        })
      }
    }
  }
</script>
