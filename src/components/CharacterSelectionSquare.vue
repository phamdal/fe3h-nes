<template>
      <div>
        <img :src=getImageUrl(name) :alt="name">
      </div>
</template>

<script>
export default {
    props:
    {
        name: String
    }, 
    methods:
    {
        getImageUrl(name) {
            return name ? require(`@/assets/characters/${name}.png`): ''; 
        }
    }
}
</script>

<style scoped>

</style>