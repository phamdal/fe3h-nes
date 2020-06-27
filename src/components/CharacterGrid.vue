<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <span class="pixel nes-text is-primary">Primary</span>
  <div class="columns is-desktop is-centered">
    <div class="column">
      <CharacterSelectionSquare name="edelgard"/>
      <CharacterSelectionSqaure name="hubuert"/>
      <CharacterSelectionSquare name="bernadetta"/>
      <CharacterSelectionSquare name="ferdinand"/>
      <CharacterSelectionSquare name="linhardt"/>
      <CharacterSelectionSquare name="petra"/>
      <CharacterSelectionSquare name="dorothea"/>
      <CharacterSelectionSquare name="caspar"/> 

      <CharacterSelectionSquare name="claude"/>
      <CharacterSelectionSquare name="lorenz"/>
      <CharacterSelectionSquare name="ashe"/>

    </div>
    <div class="column">
      <CharacterSelectionSquare name="raphael"/>
      <CharacterSelectionSquare name="hilda"/>
      <CharacterSelectionSquare name="ignatz"/>
      <CharacterSelectionSquare name="marianne"/>
      <CharacterSelectionSquare name="leonie"/>
      <CharacterSelectionSquare name="lysithea"/>

      <CharacterSelectionSquare name="dimitri"/>
      <CharacterSelectionSquare name="annette"/>
      <CharacterSelectionSquare name="mercedes"/>
      <CharacterSelectionSquare name="felix"/>
    </div>
    <div class="column">
       <CharacterSelectionSquare name="ingrid"/>
      <CharacterSelectionSquare name="sylvain"/>
      <CharacterSelectionSquare name="dedue"/>

      <CharacterSelectionSquare name="hanneman"/>
      <CharacterSelectionSquare name="manuela"/>
      <CharacterSelectionSquare name="rhea"/>
      <CharacterSelectionSquare name="seteth"/>
      <CharacterSelectionSquare name="flayn"/>
      <CharacterSelectionSquare name="jeralt"/>
      <CharacterSelectionSquare name="sothis"/>
    </div>
    <div class="column">
      <CharacterSelectionSquare name="gilbert"/>
      <CharacterSelectionSquare name="alois"/>
      <CharacterSelectionSquare name="shamir"/>
      <CharacterSelectionSquare name="cyrill"/>
      <CharacterSelectionSquare name="jeritza"/>
      <CharacterSelectionSquare name="anna"/>
      <CharacterSelectionSquare name="catherine"/>
      <CharacterSelectionSquare name="yuri"/>
      <CharacterSelectionSquare name="hapi"/>
      <CharacterSelectionSquare name="balthus"/>
      <CharacterSelectionSquare name="constance"/>
    </div>
  </div>
  </div>
</template>

<script>
import CharacterSelectionSquare from "@/components/CharacterSelectionSquare.vue"; 

export default {
  name: "CharacterGrid",
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
