<script setup lang="ts">
import { ref, onMounted } from "vue";

import { useRouter } from 'vue-router'

import { ProductService } from '@/modules/ProductService';


onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();

  ProductService.getProducts().then((data) => (products.value = data));
});

// data
const products = ref();

const chartData = ref();
const chartOptions = ref();

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



// tabs data
const tabs = ref([
    { 
      title: 'Unshipped Cart', 
      content: [
        {
          cardTitle: '신규등록1',
          CardContent: '신규설명1'
        },
        {
          cardTitle: '신규등록2',
          CardContent: '신규설명2'
        },
        {
          cardTitle: '신규등록2',
          CardContent: '신규설명2'
        },
        {
          cardTitle: '신규등록2',
          CardContent: '신규설명2'
        },
      ]
    },
    { 
      title: 'Unshipped message', 
      content: [
        {
          cardTitle: '신규메세지1',
          CardContent: '신규메세지1'
        }
      ]
    },
]);

// func
function saveMapRouter(name : string) : void {
  router.push({ name })

}
const setChartData = () =>  {
  const documentStyle = getComputedStyle(document.documentElement);

    return {
      labels: [1,2,3,4,5,6,7,8,9,10],
      datasets: [
        {
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
          data: [50, 25, 12, 48, 90, 76, 42, 55, 33, 65]
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
          data: [21, 84, 24, 75, 37, 65, 34, 11, 43, 54]
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
          data: [41, 52, 24, 74, 23, 21, 32, 43, 55, 12]
        }
      ]
    };
};
const setChartOptions = () =>  {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

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
        <Chart type="bar" class="height-20rem" :data="chartData" :options="chartOptions" />
      </div>
  
      <!-- item tab -->
      <div class="grid-item">
        <div class="row-grid">
          <div class="box-item second-grid">
            <div class="header-item">Waiting Actions</div>
            <TabView>
              <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <ScrollPanel Panel style="height: 250px">
                  <div class="card-style" v-for="item in tab.content" :key="item.cardTitle">
                    <div class="card-title">{{ item.cardTitle }}</div>
                    <div class="card-content">{{ item.CardContent }}</div>
                  </div>
                </ScrollPanel>
              </TabPanel>
            </TabView>
          </div>
          <div class="box-item second-grid">
            <div class="header-item">Waiting Actions</div>
            <TabView>
              <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <ScrollPanel Panel style="height: 250px">
                  <div class="card-style" v-for="item in tab.content" :key="item.cardTitle">
                    <div class="card-title">{{ item.cardTitle }}</div>
                    <div class="card-content">{{ item.CardContent }}</div>
                  </div>
                </ScrollPanel>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
      
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
* {
  font-size: 13px;
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
        .box-item {
          padding: 0;
        }
      }
      &:nth-child(2) {
        grid-column: span 3 / span 3;
        .box-item {
          padding: 0;
        }
      }
      &:nth-child(3) {
        grid-column: span 3 / span 3;
        .box-item {
          padding: 0;
        }
      }
      &:nth-child(4) {
        grid-column: span 3 / span 3;
        .box-item {
          padding: 0;
        }
      }
      &:nth-child(5) {
        grid-column: span 8 / span 8;
      }
      &:nth-child(6) {
        grid-column: span 4 / span 4;
        .row-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 1rem;
          .second-grid {
            grid-column: span 12 / span 12;
          }
        }

        .card-style {
          margin-bottom: .5rem;
          border-radius: 5px;
          background: #ecfdf5;
          padding: 1rem;
          .card-title {
            font-size: 14px;
          }
          .card-content {
            font-size: 12px;
            margin-top: 1rem;
            color: #94a3b8
          }
        }
      }
      &:nth-child(7) {
        grid-column: span 12 / span 12;
      }
      

      /* 전역 */
      // -> 나중엔 전역들을 따로 스타일로 빼고 -> 현 파일에선 scoped로 일단 사용했지만 내부 ui framwork 요소에 style 입힐려면 scoped 해제로 적용이 가능하여 일단 전역이 아닌 해당 특정요소 안쪽으로 넣어서 중첩되지 않게 만든다
      .height-100 {
        height: 100%;
      }
      .height-20rem {
        height: 44rem;
      }
      .img-size {
        width: 100%;
      }
      .header-item {
        margin-bottom: .5rem;
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
        &:nth-child(5) {
          grid-column: span 12 / span 12;
        }
        &:nth-child(6) {
          grid-column: span 12 / span 12;
        }
        &:nth-child(7) {
          grid-column: span 12 / span 12;
        }
      }
    }
  }
}
</style>