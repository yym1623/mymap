<script setup lang="ts">
import { ref } from 'vue'

const iconList = ref(['pi pi-search', 'pi pi-bell', 'pi pi-sun', 'pi pi-user']) // primevue icon
// const iconList = ref(['search', 'notifications', 'wb_sunny', 'person']) // google icon
</script>


<template>
  <div class="flex">
    <div>
      <span class="material-symbols-outlined icon-setting">menu</span>
    </div>
    <ui class="topbar-items">
      <li v-for="icon in iconList" :key="icon" class="icon-setting">
        <div :class="icon" ></div>
        <!-- <span class="material-symbols-outlined">{{ icon }}</span> -->
      </li>
    </ui>
  </div>
</template>


<style lang="scss" scoped>
.icon-setting {
  cursor: pointer;
  /* &:hover {
    background: #333;
    color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
  } */
}

.flex {
  display: flex;
  justify-content: space-between;
  .topbar-items {
    display: flex;
    list-style-type: none;
    gap: 1rem;
    &:last-child {
      margin-right: 1rem;
    }
  }
}
</style>