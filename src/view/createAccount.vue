<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
    <div class="container-fluid">
        <h1 class="h1 text-capitalize text-muted">create Account</h1>
        <div class="container">
            <div class="row mt-5 px-2">
                <div class="col-12 d-flex gap-2">
                    <div class="col-6 d-flex flex-column">
                        <label for="firstName mb-1" class="h6 text-capitalize">firstname</label>
                        <input type="text" class="p-2">
                    </div>
                    <div class="col-6 d-flex flex-column">
                        <label for="lastName mb-1" class="h6 text-capitalize">lastname</label>
                        <input type="text" class="p-2" >
                    </div>
                </div>
                <div class="col-12 d-flex flex-column gap-2 mt-2">
                    <label for="username mb-1" class="h6 text-capitalize">username</label>
                        <input type="text" class="p-2">
                </div>
                <div class="col-12 d-flex flex-column gap-2 mt-2">
                    <label for="email mb-1" class="h6 text-capitalize">email</label>
                        <input type="email" class="p-2">
                </div>
                <div class="col-12 d-flex flex-column gap-2 mt-2">
                    <label for="password mb-1" class="h6 text-capitalize">password</label>
                        <input type="password" class="p-2">
                </div>
                <div class="col-12 d-flex justify-content-around align-items-center mt-3">
                    <button type="button" class="btn btn-md btn-primary">submit</button>
                    <RouterLink to="/"><button type="button" class="btn btn-md btn-primary">back</button></RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container-fluid{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container{
    height: 100%;
    padding: 10px;
}
.row{
    width: 100%;
}
</style>