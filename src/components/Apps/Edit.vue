<script setup lang="ts">
import { ref } from 'vue';
import { NaverMap } from 'vue3-naver-maps'
import { NaverMarker } from 'vue3-naver-maps'

import Calendar from 'primevue/calendar';

const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 13,

  // 지도 유형 컨트롤 표시 여부
  // mapTypeControl: true,
  // 지도 데이터 저작권 컨트롤 표시 여부
  mapDataControl: false,
}

// data
const mapActive = ref<boolean>(false)
const allCheck = ref<boolean>(false)
const myPoint = ref<boolean>(false)
const myPlus = ref<boolean>(false)

const inputValue = ref<string | undefined>()
const dataValue = ref<Date | Date[] | (Date | null)[] | null | undefined>();
const editValue = ref<string | undefined>();


// func 
function mapChange(): void {
  mapActive.value = !mapActive.value
}

function allCheckBtn(): void {
  allCheck.value = !allCheck.value
}

function myPointBtn(): void {
  myPoint.value = !myPoint.value
}

function myPlusBtn(): void {
  myPlus.value = !myPlus.value
}


</script>

<template>
  <div class="edit-container">
    <div class="grid">
      <div class="grid-item" :class="{ allCheck : allCheck }">
        <div v-if="!mapActive" class="box-item map">
          <Button icon="pi pi-map" severity="contrast" text raised rounded aria-label="Map" @click="mapChange()" />
        </div>
        <div v-else class="box-item map">
          <div class="map-btn-left">
            <Button v-if="!allCheck" @click="allCheckBtn()" icon="pi pi-arrow-up-right-and-arrow-down-left-from-center" severity="success" rounded aria-label="all" />
            <Button v-else @click="allCheckBtn()" icon="pi pi-arrow-down-left-and-arrow-up-right-to-center" severity="success" rounded aria-label="no-all" />
          </div>
          <div class="map-btn-right">
            <Button icon="pi pi-map-marker" severity="success" rounded aria-label="Marker" @click="myPointBtn()" />
            <Button class="margin-left" icon="pi pi-plus" severity="success" rounded aria-label="Plus" @click="myPlusBtn()" />
          </div>
          <naver-map
            class="map-size"
            :map-options="mapOptions"
            >
            <naver-marker
            :latitude="mapOptions.latitude"
            :longitude="mapOptions.longitude"
            />
          </naver-map>
        </div>
      </div>
    </div>


    <Dialog class="dialog-margin" v-model:visible="myPlus" :style="{ width: '25rem' }" position="bottomright" >
      <TabView>
        <TabPanel header="위치등록">
          <FloatLabel class="address-info">
            <InputText class="input" type="text" placeholder="제목" v-model="inputValue" />
      
            <Calendar class="input" v-model="dataValue" showIcon iconDisplay="input" />

            <Editor class="input" v-model="editValue" editorStyle="height: 320px" />
          </FloatLabel>
        </TabPanel>
      </TabView>

      <div class="flex gap-2 justify-content-end">
          <Button type="button" label="Cancel" severity="secondary" @click="myPlus = false"></Button>
          <Button type="button" label="Save"></Button>
      </div>
    </Dialog>
  </div>
</template>

<style lang="scss">
/* 프레임워크 스타일 수정 */
.p-tabview .p-tabview-panels {
  padding: 2rem 0;
}
.p-dialog-header {
  padding: .5rem 1.5rem;
}
.p-dialog-header-icons {
  display: none;
}

/* 전역 */
.dialog-margin {
  margin: 3rem 2rem;
  border-radius: 6px;
}
.input {
  width: 100%;
  margin-top: 1rem;
  &:nth-child(1) {
    margin-top: 0;
  }
}

.edit-container {
  /* 전역 */
  .margin-left {
    margin-left: 7px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2rem;
    align-content: center;
    .grid-item {
      grid-column: span 12 / span 12;
      height: 50rem;
      .map {
        position: relative;
        background: #f1f5f9;
        display: flex;
        justify-content: center;
        align-items: center;
        .map-size {
          width: 100%;
          height: 100%;
        }
        .map-btn-left {
          position: absolute;
          left: 10px;
          top: 10px;
          z-index: 10;            
        }
        .map-btn-right {
          position: absolute;
          right: 10px;
          top: 10px;
          z-index: 10;
        }
      }
      .box-item {
        padding: 0;
      }
    }
    .grid-item.allCheck {
      &:nth-child(1) {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
