<template>

    <form id="form-shortned-link" @submit.prevent="shortner" method="post">
        
        <div class="input-labeled">
            <label>Website</label>
            <input class="input" name="original_url" v-model="original_url">
        </div>

        <div class="input-labeled">
            <label>Alias</label>
            <input class="input" name="alias" v-model="alias">
        </div>

        <button class="button" @click="shortner">SHORTNER</button>

        {{ shortned_url }}
        
    </form>

</template>


<script>

export default {

    data : function(){
        return {
            'original_url':'',
            'alias': '',
            'message' : '',
            'shortned_url': ''
        }
    },

    methods: {

        shortner : function(event) {

            event.preventDefault();

            // let payload = JSON.stringify({alias: this.alias, original_url: this.original_url})
            
            // this.$axios({
            //     method: 'post',
            //     url: 'http://localhost:8000/links',
            //     data: payload,
            //     headers: {'Content-Type': 'application/json'}
            // }).then(result => { console.log(result)})
            //   .catch(error => console.log(error))      

            const data = JSON.stringify({
                "alias": this.alias, 
                "original_url": this.original_url
            });

            this.$axios.post('/links', data)
                       .then(result => console.log(result))
                       .catch(error => console.log(error))
                       
        }

    }

}

</script>


<style scoped>

    #form-shortned-link{
        margin-top:50px;
    }

    .input-labeled{
        display:inline-block;
        margin-right:10px;
    }

    .input{
        padding:10px;
        text-align:center;
        width:300px;
        outline:none;
        font-size:17px;
        font-weight: bold;
        border:0px solid #ccc;
        color:#34495e;
    }

    label {
        display:block;
        margin-bottom:5px;
        text-align:left;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size:18px;
        color:white;
        font-weight:bold;
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