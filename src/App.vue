<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Menu from '@/components/Menu.vue'
  import MenuBox from '@/components/MenuBox.vue'

</script>



<template>
  <!-- cantainer -->
  <div class="cantainer">
    <!-- menu -->
    <div class="left">
      <div class="title">MyMap</div>
      <Menu class="menu"></Menu>
    </div>

    <!-- body -->
    <div class="right">
      <Header class="header"></Header>
      <MenuBox class="menubox"></MenuBox>
    </div>
  </div>
</template>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Moderustic:wght@300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
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

      /* justify-content: end; */
      margin-bottom: 2rem;
    }
    .menubox {
      border-radius: 10px;
      background: #fff;
    }
  }
  
}
</style>
