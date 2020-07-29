<template>
  <div>
    <h1 class="title is-1 pixel-font capitalize">{{name}}</h1>
    <div>
      <img :src=getImageUrl(name) :alt="name">
    </div>
    <div class="nes-container with-title pixel-font" style="padding-top:5px;">
      <p class="title pixel-font">Favorite Items</p>
      <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      name: String
    }, 
    methods:
    {
        getImageUrl(name) {
            return name ? require(`@/assets/characters/${name}.png`): ''; 
        }
    }
};
</script>
