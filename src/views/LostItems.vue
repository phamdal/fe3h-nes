<template>
  <div class="lost-items-container">
    <LostItemsSearch 
      title="Search lost item"
      :questions="questions"
      placeholder="Enter the lost item to find it's owner"
      @submitQuery="getResults"/>
  </div>
</template>


<script>
// @ is an alias to /src
import LostItemsSearch from "@/components/LostItems.vue";
import BackEndApi from "@/services/BackEndApi.js"; 

export default {
  name: "lost-items",
  components: {
    LostItemsSearch
  }, 
  data: function() {
    return {
      questions: []
    }
  },
  methods:
  {
    getResults(query)
    {
        BackEndApi.getLostItems(query)
        .then(response => 
        {
          var data = response.data; 
          this.questions = data; 
        }); 
    }
    }
  }; 
</script>

