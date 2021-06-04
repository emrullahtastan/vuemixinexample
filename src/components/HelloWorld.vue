<template>
  <div class="hello">
    <h2>{{title}}</h2>
    <h2>{{twoTitle}}</h2>
  </div>
</template>

<script>
import helloworldmixin from "./items/helloworldmixin";
import helloworlddata from "./items/helloworlddata";
export default {
  mixins:[helloworldmixin],
  name: 'HelloWorld',
  data:helloworlddata
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
