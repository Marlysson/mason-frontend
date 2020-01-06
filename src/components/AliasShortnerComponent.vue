<template>

    <div class="container">
        
        <Header/>

        <form id="form-shortned-link" @submit.prevent="shortner" method="post">
            
            <div class="container-labeled">
                <label>Website</label>
                <input class="input input-bigger" placeholder="Paste here your website" name="website" v-model="website">
            </div>

            <div class="container-labeled">
                <label>Alias</label>
                <input class="input input-medium" placeholder="Paste here your alias" name="alias" v-model="alias">
            </div>

            <button class="button" @click="shorten">SHORTEN</button>

        </form>

        <div class="processing" v-if="loading">
            <span class="processing-label">Processing</span>
            <span class="processing-circle processing-animate"></span>
        </div>
        
        <div v-if="errors && errors.length">
            <ErrorsListComponent :errors="errors" />
        </div>

        <ResultLinkShortned v-if="shortened_successful" :result="result"/>

    </div>

</template>

<script>

import ErrorsListComponent from './ErrorsListComponent.vue';
import Header from './Header.vue';
import ResultLinkShortned from './ResultLinkShortned.vue';

export default {

    data : function(){
        return {
            'loading': false,
            'shortened_successful': false,
            'website':'',
            'alias': '',
            'errors': [],
            'result': {}
        }
    },

    methods: {

        shorten : function(event) {

            this.reset()
            event.preventDefault();

            const data = {
                "alias": this.alias, 
                "website": this.website
            };

            this.$axios.post('/links', data)
                       .then(result => {
                           
                           this.loading = false;
                           this.result = result.data,
                           this.shortened_successful = true;

                           this.restart();

                        })
                       .catch(error => {
                           
                           this.loading = false;
                           this.errors = [...error.response.data.errors]

                       })

                       
        },

        reset: function(){
            this.errors = []
            this.shortned_url = null
            this.loading = true
            this.shortened_successful = false
        },

        restart : function(){
            this.alias = "";
            this.website = "";
        }

    },

    components : {
        ErrorsListComponent,
        Header,
        ResultLinkShortned
    }

}

</script>


<style scoped>

    .container{
        width:830px;
        margin:100px auto;
    }

    #form-shortned-link{
        margin-top:50px;
        width:100%;
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