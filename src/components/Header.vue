<template>
    <div class="logo">
        <img src="../assets/logo.png" class="img-logo" />
        <div class="line"/>
        <span class="logo-description">Mason Shortner</span>
        <span class="app-slogan">Shorten your links, see your statistics.</span>
    </div>
</template>

<style scoped>

    .logo{
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
        width:70px;
        height:80px;
    }

    .logo-description{
        font-size:30px;
        color:white;
        font-weight:bolder;
        letter-spacing: 1.5px;
    }

    .app-slogan{
        color:white;
        font-weight:normal;
        font-size:20px;
        letter-spacing: 1px;
    }
</style>