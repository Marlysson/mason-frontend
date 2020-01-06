<template>
    
    <div class="container-result">

        <span class="create-at block">{{ result.created_at }}</span>
        <span class="website block"><b>Website:</b> {{ result.website }}</span>

        <div class="result-link">
            <input type="text" ref="website" id="clipboard" :value="result.shortned_url"/>
            <a class="link-shortned" :href="result.shortned_link" target="_blank">{{ result.shortned_link }}</a>
            <button class="copy-button" @click="copy">{{ copy_label }}</button>
        </div>

    </div>

</template>

<script>
export default {

    props : ['result'],
    
    data : function() {
        return {
            copy_label: "COPY"
        }
    },

    methods: {

        copy: function(){
            
            let id = this.$refs.website.getAttribute('id');
            
            let website_input = document.getElementById(id);
            
            website_input.select();

            document.execCommand("copy");

            this.copy_label = "COPIED"
        }
    }
}
</script>

<style scoped>

    .container-result{
        box-sizing: border-box;
        width:687px;
        border:2px solid #fff;
        margin-top:20px;
        background:#fff;
        box-shadow: 2px 2px 2px 0px #ccc;
    }

    #clipboard{
        /* hiding element to be possible copy its value */
        position: absolute;
        top:-100px;
    }

    .create-at{
        display:inline-block;
        background:#fff;
        border:1px solid #E74C3C;
        color:#E74C3C;
        font-size:14px;
        font-weight:bold;
        padding:5px;
        margin:5px;
    }

    .website{
        margin:5px;
        color:#34495e;
    }

    .link-shortned{
        color:#E74C3C;
        font-weight:bold;
        margin:5px;
        text-decoration:none;
        transition:all 0.2s;
    }

    .link-shortned:hover{
        color:#34495e;
    }

    .copy-button{
        margin:5px;
        border:none;
        background:#F1C40F;
        color:white;
        font-weight:bold;
        font-size:15px;
        padding:7px 20px;
        cursor:pointer;
        transition:all 0.2s;
    }

    .copy-button:hover{
        background:#dcb825;
    }

    .result-link{
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

</style>