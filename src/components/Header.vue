<script setup lang="ts">
import { ref, watch } from 'vue'
import Menu from 'primevue/menu' 

import { useRoute, useRouter } from 'vue-router'



// data
const emit = defineEmits<{(e: 'fadeInBtn', id: boolean): void}>()

const route = useRoute()
// const router = useRouter()

const fadeIn = ref(false)

const iconList = ref(['pi pi-search', 'pi pi-bell', 'pi pi-sun', 'pi pi-user'])

const darkModeIcon = ref(false)


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


// watch
watch(darkModeIcon, (val:boolean) => {
  if(val) {
    iconList.value[2] = 'pi pi-moon'
  } else {
    iconList.value[2] = 'pi pi-sun'
  }
})

const page = ref<{label : string; route : string}>({
  label: 'DashBoard',
  route: '/',
});


watch(route, (val) => {
  // Breadcrumb
  if(val) {
    page.value.label = (val.name as string)
    page.value.route = (val.path as string)
  }
})


// fun
function menuFadeInBtn() {
  fadeIn.value = !fadeIn.value;
  
  emit('fadeInBtn', fadeIn.value)
}

function toggle(index : number, evnet:object): void {
  switch(index) {
    case 3:
      // menu.value.toggle(evnet)
      break
    case 2:
      darkModeIcon.value = !darkModeIcon.value
      break
    default:
      break
  }
};
</script>


<template>
  <div class="container">
    <div class="flex">
      <span @click="menuFadeInBtn()" class="material-symbols-outlined icon-setting">menu</span>

      <!-- 하나면 home만으로 -> 두개부턴 :model로 배열로해서 여러개 넣는다 -> 지금은 하나만 들어오니 이렇게 한다 -->
      <Breadcrumb class="breadcrumb" :home="page">
          <template #item="{ item, props }">
              <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                  <a :href="href" v-bind="props.action" @click="navigate">
                      <!-- <span :class="[item.icon, 'text-color']" /> -->
                      <span style="color:#000">{{ item.label }}</span>
                  </a>
              </router-link>
              <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
              </a>
          </template>
      </Breadcrumb>
      
    </div>
    <ui class="topbar-items">
      <li v-for="(icon, index) in iconList" :key="icon">
        <div :class="icon" @click="toggle(index, $event)" class="icon-setting"></div>
        <div v-if="index === 3">
          <Menu ref="menu" id="overlay_menu" class="user-icon-setting" :model="items" :popup="true" />
        </div>
      </li>
    </ui>
    <!-- <Menu ref="menu" id="overlay_menu" class="user-icon-setting" :model="items" :popup="true" /> -->
  </div>
</template>


<style lang="scss" scoped>
.icon-setting {
  cursor: pointer;
}

.flex {
  display: flex;
  align-items: center;
}

.container {
  .breadcrumb {
    margin-left: 20px;
    background: #f1f5f9;
  }
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