<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script setup>
  import {defineProps} from "vue";
  import {useRoute} from "vue-router";

  const props = defineProps({
    msg: String
  });




  console.log(useRoute().query);


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
