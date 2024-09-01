
<template>
  <div class="card-container box-item">
    <DataView :value="products" :layout="layout" paginator :rows="4" :sortOrder="sortOrder" :sortField="sortField">
      <template #header>
        <div class="flex justify-content-between">
          <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
          <DataViewLayoutOptions v-model="layout" />
        </div>
      </template>

      <!-- list -->
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
            <div class="flex gap-3 p-4 flex-column sm:flex-row sm:align-items-center" :class="{ 'border-top-1 surface-border': index !== 0 }">
              <div class="relative md:w-10rem">
                <img class="block w-full mx-auto xl:block border-round" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                <Tag value="지역" class="absolute" style="left: 4px; top: 4px"></Tag>
              </div>
              <div class="flex flex-1 gap-4 flex-column md:flex-row justify-content-between md:align-items-center">
                <div class="flex flex-row gap-2 md:flex-column justify-content-between align-items-start">
                  <div>
                    <span class="text-sm font-medium text-secondary">제목</span>
                    <div class="mt-2 text-lg font-medium text-900">상세설명</div>
                  </div>
                </div>
                <div class="flex gap-5 flex-column md:align-items-end">
                  <div class="flex flex-row-reverse gap-2 md:flex-row">
                    <Button icon="pi pi-map" label="상세보기" class="flex-auto white-space-nowrap"></Button>
                    <!-- <Button icon="pi pi-heart" outlined></Button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- grid -->
      <template #grid="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="p-2 col-12 sm:col-6 md:col-6 xl:col-6">
            <div class="flex p-4 border-1 surface-border surface-card border-round flex-column">
              <div class="flex p-3 surface-50 justify-content-center border-round">
                <div class="relative mx-auto">
                  <img class="w-full border-round" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" style="max-width: 300px"/>
                  <Tag value="지역" class="absolute" style="left: 4px; top: 4px"></Tag>
                </div>
              </div>
              <div class="pt-4">
                <div class="flex flex-row gap-2 justify-content-between align-items-start">
                  <div>
                    <span class="text-sm font-medium text-secondary">제목</span>
                    <div class="mt-2 text-lg font-medium text-900">상세설명</div>
                  </div>
                </div>
                <div class="flex gap-4 mt-4 flex-column">
                  <div class="flex gap-2">
                    <Button icon="pi pi-map" label="상세보기" class="flex-auto white-space-nowrap"></Button>
                    <!-- <Button icon="pi pi-heart" outlined></Button> -->
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

// modules
import { ProductService } from '../../modules/ProductService.ts';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';


onMounted(() => {
  ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();
const layout = ref('grid')
// const layout = ref<'grid' | 'list' | undefined>('grid');


// data view sort
const sortOrder = ref();
const sortField = ref();
const sortKey = ref();
const sortOptions = ref([
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'},
]);

const onSortChange = (event) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf('!') === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  } else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};
</script>


<style lang="scss" scoped>

</style>