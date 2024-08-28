<script setup lang="ts">
import { ref } from 'vue'

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import MenuBox from '@/components/MenuBox.vue'


// data
const fadeIn = ref(false)

// func
function fadeInBtn(emitValue : boolean) : void {
  fadeIn.value = emitValue
}

</script>



<template>
  <div :class="{fadeIn : fadeIn}">
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
body {
  margin: 0;
  padding: 0;
}
.cantainer {
  background: #f1f5f9;
  min-width: 550px;
  width: 100%;
  height: 100vh;
  display: flex;
  .left { 
    max-width: 300px;
    padding: 0 1.5rem;
    background: #fff;
    border-right: 1px solid #e2e8f0;
    box-shadow: 0px 4px 30px rgba(221, 224, 255, .54);
    border-radius: 12px;
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
      background: #fff;
      border: 1px solid #e2e8f0;
      padding: 2rem;
      box-shadow: 0px 4px 30px rgba(221, 224, 255, .54);
      border-radius: 12px;
    }
  }
}

/* emit class */
.fadeIn {
  .left {
    display: none;
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
