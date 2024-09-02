<script setup lang="ts">
import { ref } from 'vue';
import { NaverMap } from 'vue3-naver-maps'
import { NaverMarker } from 'vue3-naver-maps'

import Calendar from 'primevue/calendar';

const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 13,
}

// data
const mapActive = ref(false)
const allCheck = ref(false)

const inputValue = ref()
const dataValue = ref();
const editValue = ref();
const mapValue = ref('address');


// func 
function mapChange() {
  mapActive.value = !mapActive.value
}

function allCheckBtn() {
  allCheck.value = !allCheck.value
}
</script>

<template>
  <div class="edit-container">
    <div class="grid">

      <div class="grid-item">
        <div v-if="!mapActive" class="box-item map">
          <Button icon="pi pi-map" severity="contrast" text raised rounded aria-label="Map" @click="mapChange()" />
        </div>
        <div v-else class="box-item map">
          <div class="map-btn-left">
            <Button v-if="!allCheck" @click="allCheckBtn()" icon="pi pi-arrow-up-right-and-arrow-down-left-from-center" severity="success" rounded aria-label="all" />
            <Button v-else @click="allCheckBtn()" icon="pi pi-arrow-down-left-and-arrow-up-right-to-center" severity="success" rounded aria-label="no-all" />
          </div>
          <div class="map-btn-right">
            <Button icon="pi pi-map-marker" severity="success" rounded aria-label="Marker" />
            <Button class="margin-left" icon="pi pi-plus" severity="success" rounded aria-label="Plus" />
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

      <div class="grid-item">
        <InputText class="input" type="text" placeholder="제목" v-model="inputValue" />
      </div>
      
      <div class="grid-item">
        <Calendar class="input" v-model="dataValue" showIcon iconDisplay="input" />
      </div>

      <div class="grid-item">
        <Editor v-model="editValue" editorStyle="height: 320px" />
      </div>


      <div class="grid-item">
        <div class="row-grid">
          <div class="second-grid">
            <TabView>
              <TabPanel header="위치정보">
                <FloatLabel class="address-info">
                    <InputText class="input" readonly id="username" v-model="mapValue" />
                    <label for="username">주소</label>
                </FloatLabel>

                <FloatLabel class="address-info">
                    <InputText class="input" readonly id="username" v-model="mapValue" />
                    <label for="username">주소</label>
                </FloatLabel>
              </TabPanel>
            </TabView>
          </div>
          <div class="second-grid">
            <Button class="input" label="Success" severity="success" />
          </div>
        </div>

      </div>




    </div>
  </div>
</template>

<style lang="scss">
/* 프레임워크 스타일 수정 */
.p-tabview .p-tabview-panels {
  padding: 2rem 0;
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
      &:nth-child(1) {
        grid-column: span 12 / span 12;
        height: 30rem;
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

      &:nth-child(2) {
        grid-column: span 8 / span 8;
        .input {
          width: 100%;
        }
      }
      &:nth-child(3) {
        grid-column: span 4 / span 4;
        .input {
          width: 100%;
        }
      }

      &:nth-child(4) {
        grid-column: span 8 / span 8;
      }

      &:nth-child(5) {
        grid-column: span 4 / span 4;
        .row-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 1rem;
          .second-grid {
            grid-column: span 12 / span 12;
            .address-info {
              .input {
                width: 100%;
                font-size: 12px;
              }
              &:nth-child(2) {
                margin-top: 2rem;
              }
            }
            &:nth-child(2) {
              .input {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
