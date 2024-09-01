<script setup lang="ts">
import { ref, onMounted } from "vue";



import { ProductService } from '@/modules/ProductService';


onMounted(() => {
  chartData1.value = setChartData('left');
  chartData2.value = setChartData('right');
  chartOptions1.value = setChartOptions('left');
  chartOptions2.value = setChartOptions('right');

  ProductService.getProducts().then((data) => (products.value = data));
  
});

const products = ref();

const chartData1 = ref();
const chartData2 = ref();
const chartOptions1 = ref();
const chartOptions2 = ref();

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
      <!-- item1 - graph -->
      <div class="grid-item box-item">
        <Chart type="bar" :data="chartData1" class="height-100" :options="chartOptions1" />
      </div>
  
      <!-- item2 - graph -->
      <div class="grid-item box-item">
        <Chart type="pie" :data="chartData2" class="height-100" :options="chartOptions2" />
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
/* 전역 */
.height-100 {
  height: 100%;
}
.img-size {
  width: 100%;
}
.box-item {
  background: #fff;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 4px 30px rgba(221, 224, 255, .54);
  border-radius: 12px;
  height: 100%;
  padding: 1rem;
}

.dashboard-container {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2rem;
    align-content: center;
    .grid-item {
      &:nth-child(1) {
        grid-column: span 9 / span 9;
  
      }
      &:nth-child(2) {
        grid-column: span 3 / span 3;
        
      }
      &:nth-child(3) {
        grid-column: span 3 / span 3; 
      }
    }
  }
}
</style>