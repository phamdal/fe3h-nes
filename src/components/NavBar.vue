<template>
    <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="@/assets/logo.png">
    </router-link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    </div>
    <div class="navbar-start">
        <router-link to="/" class="navbar-item nes-btn pixel-font">Character Select</router-link>
        <router-link :to="{ name: 'lost-items' }" class="navbar-item nes-btn pixel-font">Lost Items</router-link>
        <router-link :to="{ name: 'lecture-questions' }" class="navbar-item nes-btn pixel-font">Lecture Questions</router-link>
        <router-link :to="{ name: 'confessionals' }" class="navbar-item nes-btn pixel-font">Confessional Questions</router-link>
    </div>
    </nav>
</template>

<script>
export default 
{
    
}
</script>

<style scoped>
.nes-btn
{
    margin-right:10px; 
}
</style>