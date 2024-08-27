<script setup lang="ts">

import { ref } from 'vue'
import Menu from 'primevue/menu' 

const items = ref([
  {
    label: 'Dashboards',
    items: [
      {
        label: 'Dashboards',
        icon: 'pi pi-home'
      },
    ]
  },
  {
    label: 'Apps',
    items: [
      {
        label: 'Map',
        icon: 'pi pi-map'
      },
      {
        label: 'Calendar',
        icon: 'pi pi-calendar'
      },
    ]
  }
]);

</script>


<template>
  <Menu :model="items" />
</template>


<style lang="scss" scoped>

</style>