<template>

    <div class="container">

        <form id="form-shortned-link" @submit.prevent="shortner" method="post">
            
            <div class="container-labeled">
                <label>Website</label>
                <input class="input input-bigger" name="original_url" v-model="original_url">
            </div>

            <div class="container-labeled">
                <label>Alias</label>
                <input class="input input-medium" name="alias" v-model="alias">
            </div>

            <button class="button" @click="shortner">SHORTNER</button>

        </form>

        <div v-if="errors && errors.length">
            <ErrorsListComponent :errors="errors" />
        </div>

        <div class="container-labeled" v-if="shortned_url" style="margin-top:20px;">
            <label>Result</label>
            <input class="input" style="width:830px;" v-model="shortned_url"/>
        </div>

    </div>

</template>

<script>

import ErrorsListComponent from './ErrorsListComponent.vue';

export default {

    data : function(){
        return {
            'original_url':'',
            'alias': '',
            'errors': [],
            'shortned_url': '',
        }
    },

    methods: {

        shortner : function(event) {

            this.reset()
            event.preventDefault();

            const data = {
                "alias": this.alias, 
                "redirect_to": this.original_url
            };

            this.$axios.post('/links', data)
                       .then(result =>

                            this.shortned_url = result.data.url_shortned,

                        )
                       .catch(error =>
                            this.errors = [...error.response.data.errors]
                        )
                       
        },

        reset: function(){
            this.errors = []
            this.shortned_url = null
        }

    },

    components : {
        ErrorsListComponent
    }

}

</script>


<style scoped>

    #form-shortned-link{
        margin:50px auto 0;
        width:830px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: flex-end;
    }

    .container-labeled{
        display:inline-block;
        margin-right:10px;
    }

    .input{
        padding:10px;
        text-align:center;
        outline:none;
        font-size:17px;
        font-weight: bold;
        border:0px solid #ccc;
        color:#34495e;
        box-sizing: border-box;
    }

    .input-bigger{
        width:380px;
    }

    .input-medium{
        width:280px;
    }

    .button{
        padding:10px 15px;
        border:0;
        cursor:pointer;
        background:#F1C40F;
        font-size:18px;
        color:white;
        font-weight:bold;   
    }

</style>