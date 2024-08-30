<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import { onClickOutside } from '@vueuse/core'


import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import MenuBox from '@/components/MenuBox.vue'


// data
const fadeIn = ref(false)
const fadeInCheck = ref(false)

const menuDom = ref(null)

// func
function fadeInBtn(emitValue : boolean) : void {
  fadeIn.value = emitValue

  if(window.innerWidth > 990) {
    // pc
    fadeInCheck.value = false;
  } else {
    // moblie
    fadeInCheck.value = true;
  }
}



onClickOutside(menuDom, event => fadeIn.value = true)


// 윈도우 너비 업데이트 함수
const updateWindowWidth = () => {
  if(window.innerWidth > 990) {
    if(fadeInCheck.value) {
      fadeInCheck.value = false;
    }
  }
};

// 컴포넌트가 마운트되었을 때
onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

// 컴포넌트가 언마운트되었을 때
onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

</script>



<template>
  <div :class="{ fadeInPc : fadeIn, fadeMoblie : fadeInCheck && !fadeIn }">
    <div class="cantainer">
      <!-- menu -->
      <div ref="menuDom" class="left">
        <div class="title">SpotSaver</div>
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
  font-family: "Poppins", sans-serif;
  background: #f1f5f9;
  min-width: 550px;
  width: 100%;
  /* height: 100vh; */
  display: flex;
  .left { 
    max-width: 300px;
    padding: 0 1.5rem;
    background: #fff;
    border-right: 1px solid #e2e8f0;
    box-shadow: 0px 4px 30px rgba(221, 224, 255, .54);
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
.fadeInPc {
  .left {
    display: none;
  }
}

.fadeMoblie {
  .left {
    display: block;
    position: fixed;
    z-index: 10;
  }
}

/* media query */
  
/* moblic */
@media only screen and (max-width: 990px) {
  .left {
    display: none;
  }
}
</style>
