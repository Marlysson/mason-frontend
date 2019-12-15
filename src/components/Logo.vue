<template>
    <div class="logo">
        <img src="../assets/logo.png" class="img-logo" />
        <div class="line"/>
        <span class="logo-description">Mason Shortner</span>
    </div>
</template>

<style scoped>

    .logo{
        width:280px;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin:0 auto;
    }

    .line{
        display:inline-block;
        width:120px;
        height:3px;
        background:white;
        margin:10px auto;
    }

    .img-logo{
        width:75px;
        height:85px;
    }

    .logo-description{
        font-size:30px;
        color:white;
    }
</style>