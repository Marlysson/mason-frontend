<template>
    
    <div class="container-result">

        <span class="create-at">{{ result.created_at }}</span>

        <div class="container-website">
            <p class="result-label"><b>Website:</b></p>
            <a class="result-value" :href="result.website" target="_blank">{{ result.website }}</a>
            <input type="text" ref="website" id="clipboard" :value="result.shortned_link"/>
        </div>

        <div class="container-shortened-link">
            <p class="result-label"><b>Shortened link</b></p>
            <a class="result-value link-shortened" :href="result.shortned_link" target="_blank">{{ result.shortned_link }}</a>
        </div>

        <div class="container-actions">
            <button class="action-button" @click="copy">{{ copy_label }}</button>
            <button class="action-button">STATISTICS</button>
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

            this.copy_label = document.execCommand("copy") ? "COPIED" : self.copy_label;
        }
    }
}
</script>

<style scoped>

    .container-result{
        box-sizing: border-box;
        border:2px solid #fff;
        margin-top:35px;
        background:#fff;
        box-shadow: 3px 3px 2px 1px #ccc;
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content:space-between;
    }

    #clipboard{
        /* hiding element to be possible copy its value */
        position: absolute;
        top:-100px;
    }

    .create-at{
        background:#fff;
        border:2px solid #34495e;
        color:#34495e;
        font-size:15px;
        font-weight:bold;
        padding:5px;
        margin:10px 15px;
    }

    .result-label{
        margin:10px 0 5px;
        color:#2d3436;
        font-weight:normal;
    }

    .result-value{
        display:inline-block;
        color:#8395a7;
        text-decoration:none;
        transition:all 0.2s;
        margin-bottom:10px;
        font-weight:bold;
    }

    .result-value:hover{
        color:#34495e;
    }

    .container-actions{
        margin-right:10px;
        width:190px;
        display:flex;
        justify-content: flex-end;
    }

    .action-button{
        letter-spacing: 1px;
        border:none;
        border:2px solid #E74C3C;
        color:#E74C3C;
        background:none;
        font-weight:bold;
        font-size:13px;
        padding:5px 7px;
        margin:5px;
        cursor:pointer;
        transition:all 0.2s;
    }

    .action-button:hover{
        color:#fff;
        background:#E74C3C;
    }

    .result-link{
        /* display:inline-block; */
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: flex-start;
    }

</style>