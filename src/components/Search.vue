<template>
    <div class="pixel-font search-container">
        <div class="nes-field">
            <label for="name_field">{{title}}</label>
            <input type="text" id="name_field" class="nes-input pixel-font" :placeholder="placeholder" v-model="query">
        </div>
        <button @click="submitQuery" type="button" class="nes-btn is-primary pixel-font submit-button">Submit</button>
        <div style="margin-top: 3em">
            <div class="nes-container with-title pixel-font outer-container">
                <p class="title">Results</p>
                <div class="lists">
                <ul class="nes-list is-circle">
                <li class="list-item" v-for="q in questions" :key="q.question">
                    <strong class='blue-bold'>Question:</strong> {{q.question}}
                    <br>
                    <strong class='blue-bold'>Answer</strong> {{q.answer}}
                    <br>
                    <br>
                </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

export default 
{
    name: "Search", 
    data: function() {
        return {
            query: ''
        }
    }, 
    props:
    {
        questions : {
          type: Array
        }, 
        title : {
            type: String, 
            required: true           
        }, 
        placeholder: {
            type: String, 
            required: true
        }
    }, 
    methods:
    {
        submitQuery : function()
        {
            this.$emit('submitQuery', this.query )
        }
    }
}
</script>


<style scoped>
.search-container
{
  margin-left: 3em; 
  margin-right: 3em; 
  margin-bottom: 3em; 
}

.list-item
{
    text-align: initial;
}

.blue-bold
{
    color: #209cee; 
}

.nes-field
{
    text-align: initial;
}

.submit-button
{
    margin-top: 1em; 
}


</style>