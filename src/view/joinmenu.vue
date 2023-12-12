<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
    <form class="container">
  <div class="form-row">
    <div class="form-group col-md-6 mb-4">
      <label for="inputEmail4">Email</label>
      <input  type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6 mb-4">
      <label for="inputPassword4">Password</label>
      <input  type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="content d-flex gap-5 justify-content-around align-items-center mb-2">
    <button type="submit" class="btn btn-primary">sign</button>
    <button type="submit" class="btn btn-primary">cancel</button>
  </div>
  <p class="h6">belum punya aku ? <RouterLink to="/createAccount"><a href="">buat sekarang</a></RouterLink></p>
</form>
</template>

<style>
form{
  width: 100%;
  height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:10px;
}
form .form-group{
  width: 500px;
}
form input{
  width: 100%;
  padding: 8px 10px;
}
</style>