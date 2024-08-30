<script setup lang="ts">

import { ref } from 'vue'
import Menu from 'primevue/menu' 


const items = ref([
  {
    label: 'Dashboards',
    items: [
      {
        label: 'Dashboards',
        icon: 'pi pi-home',
        path: '/'
      },
    ]
  },
  {
    label: 'Apps',
    items: [
      {
        label: 'Map',
        icon: 'pi pi-map',
        path: '/Apps/Map'
      },
      {
        label: 'Calendar',
        icon: 'pi pi-calendar',
        path: '/Apps/Calendar'
      },
    ]
  }
]);


</script>


<template>
  <Menu :model="items">
    <template #item="{ item, props }">
        <router-link  v-slot="{ href, navigate }" :to="item.path" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon"></span>
              <span style="margin-left: 10px;">{{ item.label }}</span>
            </a>
        </router-link>
      </template>
  </Menu>
</template>


<style lang="scss" scoped>

</style>