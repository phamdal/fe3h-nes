<template>
  <div class="home">
    <CharacterGrid msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterGrid from "@/components/CharacterGrid.vue";

export default {
  name: "Home",
  components: {
    CharacterGrid
  }
};
</script>
