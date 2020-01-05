<template>

    <div class="container">
        
        <Logo/>

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

        <div class="processing" v-if="loading">
            <span class="processing-label">Processing</span>
            <span class="processing-circle processing-animate"></span>
        </div>
        
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
import Logo from './Logo.vue';

export default {

    data : function(){
        return {
            'loading': false,
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
                       .then(result => {
                           this.loading = false;
                           this.shortned_url = result.data.url_shortned
                        })
                       .catch(error => {
                           this.loading = false;
                           this.errors = [...error.response.data.errors]
                       })
                       
        },

        reset: function(){
            this.errors = []
            this.shortned_url = null
            this.loading = true;
        }

    },

    components : {
        ErrorsListComponent,
        Logo
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

    .processing{
        width:830px;
        margin:10px auto;
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content: center;
        border:2px solid #fff;
    }

    .processing-label{
        padding:10px 5px;
        color:white;
        font-weight:bold;
    }

    .processing-circle{
        width:15px;
        height:15px;
        border:3px solid #fff;
        border-top: 3px solid transparent;
        border-radius:100%;
        background:transparent;
    }

    .processing-animate{
        animation-name:rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-duration:1s;
    }

    @keyframes rotate{
        0%{
            transform:rotate(0deg);
        }

        100%{
            transform:rotate(360deg);
        }  
    }

</style>