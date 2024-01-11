import type { stringify } from 'postcss'; import type { StarRating } from
'#build/components';
<script setup>
import StarIcon from '@/assets/icon/star_icon.svg?component';
import StarFillIcon from '@/assets/icon/star_fill_icon.svg?component';

const props = defineProps({
  value: {
    type: Number,
    default: 5,
  },
});

const value = props.value;
const stars = Array.from({ length: 5 }, (_, i) => i + 1).map((index) => {
  if (index < value) return 100;
  else if (index - value > 1) return 0;
  else {
    const minus = index - value;
    return Math.round((1 - minus / 1) * 100);
  }
});
</script>
<template>
  <div>
    <div class="shopee-rating-stars">
      <div class="shopee-rating-stars__stars">
        <div
          v-for="(star, index) in stars"
          :key="index"
          class="shopee-rating-stars__star-wrapper"
        >
          <div class="shopee-rating-stars__lit" :style="{ width: `${star}%` }">
            <star-fill-icon />
          </div>
          <star-icon />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
