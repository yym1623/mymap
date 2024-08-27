<script setup lang="ts">
import { ref } from 'vue'
import Menu from 'primevue/menu' 

// emit
const emit = defineEmits<{
  (e: 'fadeInBtn', id: boolean): void
}>()


const iconList = ref(['pi pi-search', 'pi pi-bell', 'pi pi-sun', 'pi pi-user'])

const menu = ref();
const items = ref([
  {
    items: [
      {
        label: 'Info',
        icon: 'pi pi-info-circle'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out'
      }
    ]
  }
]);

function toggle(index : number, evnet:object): void {
  if(index === 3) {
    // menu.value.toggle(event);
    console.log(menu.value.toggle(evnet))
  }
};



// data
const fadeIn = ref(false)

// fun
function menuFadeInBtn() {
  fadeIn.value = !fadeIn.value;
  
  emit('fadeInBtn', fadeIn.value)
}




</script>


<template>
  <div class="flex">
    <div>
      <span @click="menuFadeInBtn()" class="material-symbols-outlined icon-setting">menu</span>
    </div>
    <ui class="topbar-items">
      <li v-for="(icon, index) in iconList" :key="icon">
        <div :class="icon" @click="toggle(index, $event)" class="icon-setting"></div>
        <!-- <span class="material-symbols-outlined">{{ icon }}</span> -->
      </li>
    </ui>
    <Menu ref="menu" id="overlay_menu" class="user-icon-setting" :model="items" :popup="true" />
  </div>
</template>


<style lang="scss" scoped>
.icon-setting {
  cursor: pointer;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .topbar-items {
    display: flex;
    list-style-type: none;
    gap: 1.5rem;
    &:last-child {
      margin-right: 1rem;
    }
  }
}
</style>