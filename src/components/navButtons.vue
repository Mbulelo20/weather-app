<template> 
    <div class="container">
        
            <center>

            <div class="btn-group" role="group" aria-label="Basic example" :style="{marginTop: '-3em', marginBottom: '2em', width: '70%'}">
                <button type="button" class="btn btn-secondary" :disabled=" this.$store.state.currentPage == 1" v-if="!this.$store.state.hideNavButtons" @click="previousPage()">Back</button>
                <button type="button" class="btn btn-secondary" v-if="!this.$store.state.hideNavButtons" @click="nextPage()">Next</button>
                
            </div>
                        </center>

    </div>
</template>

<script>
import {bus} from '../main';
export default {
    data() {
        return {
        }
    },
    methods: {
        
        nextPage: function() {
            bus.$emit('page', this.$store.state.currentPage += 1)
            console.log("inc state: "+ this.$store.state.currentPage)
            window.scrollTo(0, 0);
        },
        previousPage: function() {
            window.scrollTo(0, 0);
            bus.$emit('page', this.$store.state.currentPage -= 1)
        }
    }, 
}

</script>

<style></style>