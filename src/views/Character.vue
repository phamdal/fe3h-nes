<template>
  <div>
    <h1 class="title is-1 pixel-font capitalize">{{name}}</h1>
    <div>
      <img :src=getImageUrl(name) :alt="name">
    </div>
    <div class="nes-container with-title pixel-font">
      <p class="title">Favorite Items</p>
      <div class="lists">
        <ul class="nes-list is-circle">
          <li v-for="gift in gifts" :key="gift" class="listItem">
            <span>{{gift}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="nes-container with-title pixel-font">
      <p class="title">Lost Items</p>
      <div class="lists">
        <ul class="nes-list is-circle">
          <li v-for="item in lostItems" :key="item" class="listItem">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="nes-container with-title pixel-font">
      <p class="title">Tea Time</p>

      <div class="nes-container with-title">
        <p class="title">Favorite Teas</p>
        <div>{{favTea}}</div>
      </div>

      <div class="nes-container with-title">
        <p class="title">Topics</p>
        <div class="lists">
          <ul class="nes-list is-circle">
            <li v-for="topic in teaTopics" :key="topic" class="listItem">
              {{topic}}
            </li>
          </ul>
        </div>
      </div>

      <div class="nes-container with-title">
        <p class="title">Final Topics</p>
        <div class="lists">
          <ul class="nes-list is-circle">
            <li v-for="topic in teaFinalTopics" :key="topic" class="listItem">
              {{topic}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackEndApi from "@/services/BackEndApi.js"; 

export default {
    props: {
      name: String
    }, 
    methods: {
        getImageUrl(name) {
            return name ? require(`@/assets/characters/${name}.png`): ''; 
        }
    }, 
    data() {
      return {
        profileUrl: null, 
        gifts: [], 
        favTea: null, 
        teaTopics: [], 
        teaFinalTopics: [], 
        teaTime: null, 
        lostItems: [],
        characterRoute: null
      }
    }, 
    created() {
      BackEndApi.getCharacterInfo(this.name)
        .then(response => 
        {
            var data = response.data; 
            this.profileUrl = `./assets/characters/${data.profilePic}`; 
            this.gifts = data.gifts;

            this.teaTime = data.teaTime; 
            this.favTea = data.teaTime.favTea;
            this.teaTopics = data.teaTime.topics; 
            this.teaFinalTopics = data.teaTime.finalTopics; 
            this.lostItems = data.lostItems; 
        })
    }
  }
</script>

<style scoped>
.listItem
{
  text-align: left;
}

.nes-container
{
  margin-top: 3em;
}

</style>