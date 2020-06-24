<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <span class="pixel nes-text is-primary">Primary</span>
  <div class="columns is-desktop is-centered">
    <div class="column">
      <CharacterSelectionSquare name="alois"/>
    </div>
    <div class="column">
    </div>
    <div class="column">3</div>
    <div class="column">4</div>
  </div>
  </div>
</template>

<script>
import CharacterSelectionSquare from "@/components/CharacterSelectionSquare.vue"; 

export default {
  name: "HelloWorld",
  components: 
  {
    CharacterSelectionSquare
  },
  props: {
    msg: String
  }
};
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
