<template>
    <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
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