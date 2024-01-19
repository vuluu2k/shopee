<template>
  <div class="shopee-product-rating__avatar">
    <div class="shopee-avatar">
      <div class="shopee-avatar__placeholder">
        <headshot_icon />
      </div>
      <img v-if="value" class="shopee-avatar__img" :src="value">
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import headshot_icon from '@/assets/icon/headshot_icon.svg?component';

const props = defineProps({
  value: String,
});

const { value } = props;
</script>

<style lang="scss" scoped>
.shopee-product-rating__avatar {
  width: 4rem;
  margin-right: 1rem;
  text-align: center;
}

.shopee-product-rating__avatar .shopee-avatar {
  border: 0;
  width: 4rem;
  height: 4rem;
}

.shopee-avatar {
  display: inline-block;
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
}

.shopee-avatar__placeholder .icon-headshot {
  stroke: #c6c6c6;
  font-size: 2.4rem;
  font-weight: 400;
  left: 50%;
  line-height: 3.2rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
