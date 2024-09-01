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



onClickOutside(menuDom, event => {
  if(fadeInCheck.value) {
    fadeIn.value = true
  }
  
})


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
  <ThemeSwitcher />
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
/* primevue components class */
.p-submenu-header {
  background: #f1f5f9;
}


body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.cantainer {
  font-family: "Poppins", sans-serif;
  background: #f1f5f9;
  width: 100%;
  min-height: 100vh;
  /* height: 100vh; -> data가 있을 경우 100%가 화면에 맞고 없는 경우 100vh로 전체화면 보는건데 데이터가 있고 없음마다 변할 수 있으니 min-hieght로 100vh해야한다 -> 있을 경우는 아니고 최소 100vh 전체화면이니 딱 맞는다(데이터 있고 없음에 대해서) */
  display: flex;
  position: relative;
  .left {
    padding: 0 1.5rem;
    position: fixed;
    /* height: 100%; -> scroll on일 경우 -> overflow랑 같이 사용 */
    top: 0;
    left: 0;
    width: 18rem;
    display: flex;
    flex-direction: column;
    /* box-shadow: 0px 4px 30px rgba(221, 224, 255, .54); */
    /* border-right: 1px solid #e2e8f0; */
    transition: transform .3s cubic-bezier(0,0,.2,1);
    .title {
      font-family: "Kanit", sans-serif;
      padding: 15px;
      font-size: 35px;
    }
    .menu {
      background: #f1f5f9;

      font-size: 12px;
      margin-top: 1rem;
      border: none;
    }
  }
  
  .right {
    width: 100%;
    height: 100%;
    padding: 2rem;
    margin-left: 20rem;
    transition: margin-left .3s cubic-bezier(0,0,.2,1);
    .header {
      display: flex;
      margin-bottom: 2rem;
    }
    .menubox {
      /* padding: 2rem; */
      /* background: #fff; */
      /* border: 1px solid #e2e8f0; */
      /* box-shadow: 0px 4px 30px rgba(221, 224, 255, .54); */
      /* border-radius: 12px; */
    }
  }
}

/* emit class */
.fadeInPc {
  .left {
    /* display: none; */
    transform: translate(-100%);
    transition: transform 0.2s;
  }
  .right {
    margin-left: 2rem;
  }
}

.fadeMoblie {
  .cantainer {
    .left {
      transform: translate(0%);
      z-index: 10;
      height: 100vh; // test
      background: #f1f5f9;
    }
    .right {
      margin-left: 20rem;
    }
  }
}

/* media query */
@media only screen and (max-width: 990px) {
  .cantainer {
    .left {
      /* display: none; */
      transform: translate(-100%);
      transition: transform 0.2s;
    }
    .right {
      margin-left: 2rem !important;
    }
  }
}
</style>
