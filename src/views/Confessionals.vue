<template>
  <div class="confessionals-container">
    <Search 
      title="Search question"
      :questions="questions"
      placeholder="Enter part of the confessional to query answers"
      @submitQuery="getResults" />
  </div>
</template>


<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import BackEndApi from "@/services/BackEndApi.js"; 

export default {
  name: "confessionals-questions",
  components: {
    Search
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
        BackEndApi.getConfessionalQuestions(query)
        .then(response => 
        {
          var data = response.data; 
          this.questions = data; 
        }); 
    }
    }
  }; 
</script>

