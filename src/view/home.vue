<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="container">
        <div class="jumbotron bg-dark d-flex flex-column justify-content-center align-items-center">
            <h1 class="h1 text-light text-capitalize text-center">welcome to BlockChain Crypto</h1>
            <p class="text-light mt-4">this website use to crypto currentcy and transaction. and buy currency crypto coin Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ullam necessitatibus quibusdam eum eaque accusamus veritatis debitis aperiam error eligendi!</p>
         
            <RouterLink to="/joinmenu"><button type="button" class="btn btn-md btn-primary">join now</button></RouterLink>
        </div>
    </div>
</template>

<style scoped>
.container{
    height: 100vh;
}
.jumbotron{
    border: 1px solid black;
    height: 100%;
}
.jumbotron h1{
    font-size: 5em;
    width: 80%;
}
.jumbotron p{
    width: 55%;
    font-size: .9em;
}
</style>