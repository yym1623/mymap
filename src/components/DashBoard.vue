<script setup lang="ts">
import { ref, onMounted } from "vue";

import { useRoute, useRouter } from 'vue-router'

import { ProductService } from '@/modules/ProductService';


onMounted(() => {
  chartData1.value = setChartData('left');
  chartData2.value = setChartData('right');
  chartOptions1.value = setChartOptions('left');
  chartOptions2.value = setChartOptions('right');

  ProductService.getProducts().then((data) => (products.value = data));
});

// data
const products = ref();

const chartData1 = ref();
const chartData2 = ref();
const chartOptions1 = ref();
const chartOptions2 = ref();

const router = useRouter()


// scroll data
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

// history data
const events = ref([
  { status: '제목1', date: '2024/00/00', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
  { status: '제목2', date: '2024/00/00', icon: 'pi pi-cog', color: '#673AB7' },
  { status: '제목3', date: '2024/00/00', icon: 'pi pi-shopping-cart', color: '#FF9800' },
  { status: '제목4', date: '2024/00/00', icon: 'pi pi-check', color: '#607D8B' },
]);

// func
function saveMapRouter(name : string) : void {
  router.push({ name })

}
const setChartData = (type : string) =>  {
  const documentStyle = getComputedStyle(document.documentElement);

  if(type === 'left') {
    return {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
          data: [50, 25, 12, 48, 90, 76, 42]
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
          data: [21, 84, 24, 75, 37, 65, 34]
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
          data: [41, 52, 24, 74, 23, 21, 32]
        }
      ]
    };
  } else {
    return {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--gray-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--gray-400')]
        }
      ]
    }
  }
};
const setChartOptions = (type : string) =>  {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  if(type === 'left') {
    return {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false
        },
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  } else {
    return {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }
}



</script>


<template>
  <div class="dashboard-container">
    <div class="grid">

      <div class="grid-item">
        <Card class="box-item">
          <template #title>제목</template>
          <template #content>
            <p class="m-0">상세</p>
          </template>
        </Card>
      </div>

      <div class="grid-item">
        <Card class="box-item">
          <template #title>제목</template>
          <template #content>
            <p class="m-0">상세</p>
          </template>
        </Card>
      </div>

      <div class="grid-item">
        <Card class="box-item">
          <template #title>제목</template>
          <template #content>
            <p class="m-0">상세</p>
          </template>
        </Card>
      </div>

      <div class="grid-item">
        <Card class="box-item">
          <template #title>제목</template>
          <template #content>
            <p class="m-0">상세</p>
          </template>
        </Card>
      </div>


      <!-- item - graph -->
      <div class="grid-item box-item">
        <div class="header-item">Chart Over View</div>
        <Chart type="bar" class="height-20rem" :data="chartData1" :options="chartOptions1" />
      </div>
  
      <!-- item history -->
      <div class="grid-item box-item">
        <div class="header-item">History over view</div>
        <Timeline class="flex justify-content-center align-items-center height-100 history" :value="events">
          <template #opposite="slotProps">
            <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
          </template>
          <template  #content="slotProps">
            <div class="cursor-pointer" @click="saveMapRouter('Apps / Cart')">{{slotProps.item.status}}</div>
          </template>
        </Timeline>
      </div>

      <!-- item - graph -->
      <!-- <div class="grid-item box-item">
        <Chart type="pie" :data="chartData2" class="height-100" :options="chartOptions2" />
      </div> -->

      <!-- item scroll -->
      <div class="grid-item box-item">
        <div class="header-item">Scroll over view</div>
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
          <template #item="slotProps">
            <div class="p-4 m-2 border rounded border-surface-200 dark:border-surface-700">
              <div class="mb-4">
                <div class="relative mx-auto">
                  <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                  <Tag value="주소" class="absolute" style="left:5px; top: 5px"/>
                </div>
              </div>
              <div class="mb-4 font-medium">제목</div>
              <div class="flex flex-row-reverse gap-2 md:flex-row">
                <Button icon="pi pi-map" label="상세보기" @click="saveMapRouter('Apps / Cart')" class="flex-auto white-space-nowrap"></Button>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
/* 전역 */
.height-100 {
  height: 100%;
}
.height-20rem {
  height: 20rem;
}
.img-size {
  width: 100%;
}



.dashboard-container {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2rem;
    align-content: center;
    .grid-item {
      &:nth-child(1) {
        grid-column: span 3 / span 3;
      }
      &:nth-child(2) {
        grid-column: span 3 / span 3;
      }
      &:nth-child(3) {
        grid-column: span 3 / span 3;
      }
      &:nth-child(4) {
        grid-column: span 3 / span 3;
      }
      &:nth-child(5) {
        grid-column: span 8 / span 8;
      }
      &:nth-child(6) {
        grid-column: span 4 / span 4;
      }
      &:nth-child(7) {
        grid-column: span 12 / span 12;
      }
      .history {
        padding-bottom: 1rem;
      }
    }
  }
}


/* media query */
@media only screen and (max-width: 767px) {
  .dashboard-container {
    .grid {
      .grid-item {
        &:nth-child(1) {
        grid-column: span 12 / span 12;
      }
      &:nth-child(2) {
        grid-column: span 12 / span 12;
      }
      &:nth-child(3) {
        grid-column: span 12 / span 12;
      }
      &:nth-child(4) {
        grid-column: span 12 / span 12;
      }
      }
    }
  }
}
</style>