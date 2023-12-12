<script>
import navigasiVue from './component/navigasi.vue';
import {RouterView} from 'vue-router'
export default{
  components:{
    navigasiVue
  }
}
</script>

<template>
  <div class="container">
    <navigasiVue></navigasiVue>
    <RouterView/>
  </div>
</template>