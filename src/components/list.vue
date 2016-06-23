<template>
  <div>
    <div>
      <h1 id="test">
        <input type="text" class="form-control" v-model="text">
      </h1>
      <p>{{$route.params}}</p>
      <p>{{$route.path}}</p>
      <!--<a v-link="{name: 'foo'}" class="test">111</a>-->
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
  @color: red;
  h1 {
    color: @color;
  }
</style>
<script>
  export default{
    data () {
      return {
        text: 'Hello World11'
      }
    },
    components: {}
  }
</script>
