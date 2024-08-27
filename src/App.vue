<script setup lang="ts">
import { ref } from 'vue'

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import MenuBox from '@/components/MenuBox.vue'


// data
const fadeIn = ref(false)

// fun
function fadeInBtn(emitValue : boolean) : void {
  fadeIn.value = emitValue
}

</script>



<template>
  <div :class="{ fadeIn : fadeIn}">
    <!-- cantainer -->
    <div class="cantainer">
      <!-- menu -->
      <div class="left">
        <div class="title">MyMap</div>
        <Menu class="menu"></Menu>
      </div>
      <!-- body -->
      <div class="right">
        <Header @fadeInBtn="fadeInBtn" class="header"></Header>
        <MenuBox class="menubox"></MenuBox>
      </div>
    </div>
  </div>
</template>



<style lang="scss">
* {
  background: #eeeeee;
}
body {
  margin: 0;
  padding: 0;
}
.cantainer {
  height: 100vh;
  padding: 0 1.5rem;
  display: flex;
  .left { 
    max-width: 300px;
    .title {
      font-family: "Kanit", sans-serif;
      padding: 15px;
      font-size: 35px;
    }
    .menu {
      font-size: 12px;
      height: 100vh;
      margin-top: 1rem;
      border: none;
    }
  }
  
  .right {
    padding: 2rem;
    width: 100%;
    height: 100vh;
    .header {
      display: flex;
      margin-bottom: 2rem;
    }
    .menubox {
      border-radius: 10px;
      background: #fff;
    }
  }
}

/* emit class */
.fadeIn {
  .cantainer {
    padding: 0;
    .left {
      display: none;
    }
  }
}

/* media query */
@media only screen and (max-width: 990px) {
  .cantainer {
    padding: 0;
    .left {
      display: none;
    }
  }
}
</style>
