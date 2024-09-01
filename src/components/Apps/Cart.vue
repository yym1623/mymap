
<template>
  <div class="card">
      <DataView :value="products" :layout="layout">
          <template #header>
              <div class="flex justify-content-end">
                  <DataViewLayoutOptions v-model="layout" />
              </div>
          </template>

          <template #list="slotProps">
              <div class="grid grid-nogutter">
                  <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                      <div class="flex gap-3 p-4 flex-column sm:flex-row sm:align-items-center" :class="{ 'border-top-1 surface-border': index !== 0 }">
                          <div class="relative md:w-10rem">
                              <img class="block w-full mx-auto xl:block border-round" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                              <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                          </div>
                          <div class="flex flex-1 gap-4 flex-column md:flex-row justify-content-between md:align-items-center">
                              <div class="flex flex-row gap-2 md:flex-column justify-content-between align-items-start">
                                  <div>
                                      <span class="text-sm font-medium text-secondary">{{ item.category }}</span>
                                      <div class="mt-2 text-lg font-medium text-900">{{ item.name }}</div>
                                  </div>
                                  <div class="p-1 surface-100" style="border-radius: 30px">
                                      <div class="flex gap-2 px-2 py-1 surface-0 align-items-center justify-content-center" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                          <span class="text-sm font-medium text-900">{{ item.rating }}</span>
                                          <i class="text-yellow-500 pi pi-star-fill"></i>
                                      </div>
                                  </div>
                              </div>
                              <div class="flex gap-5 flex-column md:align-items-end">
                                  <span class="text-xl font-semibold text-900">${{ item.price }}</span>
                                  <div class="flex flex-row-reverse gap-2 md:flex-row">
                                      <Button icon="pi pi-heart" outlined></Button>
                                      <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </template>

          <template #grid="slotProps">
              <div class="grid grid-nogutter">
                  <div v-for="(item, index) in slotProps.items" :key="index" class="p-2 col-12 sm:col-6 md:col-4 xl:col-6">
                      <div class="flex p-4 border-1 surface-border surface-card border-round flex-column">
                          <div class="flex p-3 surface-50 justify-content-center border-round">
                              <div class="relative mx-auto">
                                  <img class="w-full border-round" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" style="max-width: 300px"/>
                                  <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                              </div>
                          </div>
                          <div class="pt-4">
                              <div class="flex flex-row gap-2 justify-content-between align-items-start">
                                  <div>
                                      <span class="text-sm font-medium text-secondary">{{ item.category }}</span>
                                      <div class="mt-1 text-lg font-medium text-900">{{ item.name }}</div>
                                  </div>
                                  <div class="p-1 surface-100" style="border-radius: 30px">
                                      <div class="flex gap-2 px-2 py-1 surface-0 align-items-center justify-content-center" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                          <span class="text-sm font-medium text-900">{{ item.rating }}</span>
                                          <i class="text-yellow-500 pi pi-star-fill"></i>
                                      </div>
                                  </div>
                              </div>
                              <div class="flex gap-4 mt-4 flex-column">
                                  <span class="text-2xl font-semibold text-900">${{ item.price }}</span>
                                  <div class="flex gap-2">
                                      <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto white-space-nowrap"></Button>
                                      <Button icon="pi pi-heart" outlined></Button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </template>
      </DataView>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '../../modules/ProductService.ts';

import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
onMounted(() => {
  ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();
const layout = ref('grid');

const getSeverity = (product) => {
  switch (product.inventoryStatus) {
      case 'INSTOCK':
          return 'success';

      case 'LOWSTOCK':
          return 'warning';

      case 'OUTOFSTOCK':
          return 'danger';

      default:
          return null;
  }
}

</script>
