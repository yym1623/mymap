<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Menu from '@/components/Menu.vue'
  import MenuBox from '@/components/MenuBox.vue'
</script>



<template>
  <!-- cantainer -->
  <div class="cantainer">
    <!-- menu -->
    <Menu class="menu"></Menu>

    <!-- body -->
    <div class="body">
      <Header class="header"></Header>
      <MenuBox class="menubox"></MenuBox>
    </div>
  </div>
</template>



<style lang="scss">
.cantainer {
  .menu {
  
  }
  
  .body {
    .header {
      
    }
    .menubox {

    }
  }
  
}
</style>
