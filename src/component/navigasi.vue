<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
<div class="container d-flex justify-content-between align-items-center">
    <nav class="navbar navbar-expand-lg navbar-light">
        <a href="" class="navbar-brand text-bold text-capitalize h1">blockchain</a>
        <ul class="links navbar-nav d-flex gap-2">
            <li class="nav-item"> <RouterLink to="/" class="nav-link">home</RouterLink></li>
            <li class="nav-item"> <RouterLink to="/about" class="nav-link">about</RouterLink></li>   
            <li class="nav-item"> <RouterLink to="/menu" class="nav-link">menu</RouterLink></li>
        </ul>
    </nav>
    <div class="menu d-flex gap-3">
        <RouterLink to="/joinmenu" type="button" class="btn btn-sm btn-primary px-2">login</RouterLink>
        <RouterLink to="/createAccount" type="button" class="btn btn-sm btn-primary px-2">create account</RouterLink>
    </div>
</div>
</template>