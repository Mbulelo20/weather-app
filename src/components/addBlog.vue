<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>

    <form>
        <label>Task 1: </label>
        <input type="text" v-model="task1.category" required />
        <label>description: </label>
        <textarea v-model="blog.description"></textarea>
        <label>Start: </label>
        <input type="text" v-model="task1.start" required />
        <label>End: </label>
        <input type="text" v-model="task1.end" required />
    </form>
    <div v-if="isSubmitted">
      <h3>Success!</h3>
    </div>
    <button v-on:click="saveTask()">Save</button>

    
  </div>
</template>

<script>


export default {
  components: {
  },
  data () {
    return {
     task1: {
        category: '',
        start: '',
        end: '',
        description: '',
     }, 
     isSubmitted: false
    }
  },
   methods: {
      saveTask: function(){
          console.log('clicked button')
          this.$http.post("http://jsonplaceholder.typicode.com/posts", {
              title: this.task1.category,
              body: this.task1.description,
              userId: this.task1.start,
              id: this.task1.end,
          }).then(function(data)
          {
            console.log(data);
            this.isSubmitted = true;
          })
      }
    }
}
</script>

<style>

#add-blog *{
box-sizing: border-box;

}

#add-blog {
margin: 20px auto;
max-width: 550px;
}
label {
display: block;
margin: 20px 0 10px

}

input[type="text"]{
display: block;
width: 100%;
padding: 8px
}
textarea{
display: block;
width: 100%;
padding: 8px
}
#preview{
    padding: 10px 20px;
    border: 1px solid;
    margin: 30px 0;

}
</style>
