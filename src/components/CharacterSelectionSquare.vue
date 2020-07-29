<template>
      <div>
            <router-link :to="{name: 'character', params: { name: name }}">
                <img :src=getImageUrl(name) :alt="name">
            </router-link>  
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