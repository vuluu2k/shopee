<script setup>
import { defineProps, ref, onMounted } from 'vue';

import freeship_icon from '@/assets/icon/freeship_icon.svg?component';
import arrow_down_icon from '@/assets/icon/arrow_down_icon.svg?component';
import plus_icon from '@/assets/icon/plus_icon.svg?component';
import add_to_cart_icon from '@/assets/icon/add_to_cart_icon.svg?component';
import chat_icon from '@/assets/icon/chat_icon.svg?component';
import watch_shop_icon from '@/assets/icon/watch_shop_icon.svg?component';
import mall_icon from '@/assets/icon/mall_icon.svg?component';
import heart_icon from '@/assets/icon/heart_icon.svg?component';
import star_fill_icon from '@/assets/icon/star_fill_icon.svg?component';
import icon_loading_image from '@/assets/icon/icon_loading_image.svg?component';
import like_button from '@/assets/icon/like_button.svg?component';
import arrow_left_icon from '@/assets/icon/arrow_left_icon.svg?component';

const route = useRoute();
const { slug } = route.params;

const { data } = await useFetch(
  `http://127.0.0.1:8000/api/v1/products/${slug}`,
);
console.log(data.value);
const { name, price, feedbacks, variations } = data.value;

const feedbackCount = feedbacks.length;
const images = data.value.images.map(s => s.trim());

const groupedVariations = ref([]);

onMounted(() => {
  const groups = {};
  data.value.variations.forEach(variation => {
    variation.tier_variation.forEach(tierVariation => {
      if (!groups[tierVariation.name]) {
        groups[tierVariation.name] = {
          name: tierVariation.name,
          variations: [],
        };
      }
      groups[tierVariation.name].variations.push(variation);
    });
  });
  groupedVariations.value = Object.values(groups);
});
</script>

<template>
  <div class="container">
    <div class="flex bg-white">
      <div class="thumbnail ml-6">
        <div class="flex flex-col">
          <div>
            <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lofawhoqcyk3f3" alt=""
              style="width: 450px; height: auto" />
          </div>
          <div class="mt-4">
            <div class="last:mr-0">
              <div v-for="(image, index) in images" :key="index" class="inline-block box-border w-1/5 mr-2"
                :class="{ 'mr-0': index === images.length - 1 }">
                <img :src="image" :alt="`image-${index}`" style="width: 100px; height: auto" />
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center" style="margin-top: 15px">
            <div class="flex items-center px-7.5">
              <div class="text-2xl text-black">Chia sẻ:</div>
              <button class="sprite-product-sharing sprite-product-sharing-fm tSCitv"
                aria-label="Share on Messenger"></button><button
                class="sprite-product-sharing sprite-product-sharing-fb tSCitv"
                aria-label="Share on Facebook"></button><button
                class="sprite-product-sharing sprite-product-sharing-pinterest tSCitv"
                aria-label="Share on Pinterest"></button><button
                class="sprite-product-sharing sprite-product-sharing-twitter tSCitv"
                aria-label="Share on Twitter"></button>
            </div>
            <div class="flex items-center _3jkKrB">
              <button class="IYjGwk" tabindex="0">
                <heart_icon />0
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto flex-col ml-4">
        <div class="title">
          <mall_icon /><span>{{ name }}</span>
        </div>
        <div class="flex-auto">
          <div class="flex mt-12 mr-5">
            <button class="flex pr-10">
              <div class="underline text-red-600 text-2xl">5.0</div>
              <div class="nTpKes">
                <star-rating :value="2.8" />
              </div>
            </button>
            <div>
              <button class="flex px-10">
                <div class="text-2xl border-b-2">{{ feedbackCount }}</div>
                <div class="text-2xl ml-2">Đánh giá</div>
              </button>
            </div>
            <button class="flex px-10">
              <div class="text-2xl border-b-2">2k9</div>
              <div class="text-2xl ml-2">Đã bán</div>
            </button>
            <div class="ml-auto">
              <button class="text-2xl">Tố cáo</button>
            </div>
          </div>
        </div>
        <div style="margin-top: 10px">
          <div class="flex flex-col">
            <div class="flex flex-col px-4 py-5">
              <section class="flex items-center" aria-live="polite">
                <div class="flex items-center price">
                  <div class="flex items-center">
                    <div class="text-red-700 text-5xl font-medium">
                      {{ price }} đ
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="mt-10 py-8">
          <div class="flex flex-col">
            <section class="flex items-start -mt-1 -ml-1 mb-6 p-1">
              <h3 class="w-40 px-4 mt-4">Vận chuyển</h3>
              <div class="h-auto" style="width: 51.5rem">
                <div class="flex"></div>
                <div class="grid grid-cols-[auto,1fr]">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                    height="20" class="justify-self-center col-start-1" />
                  <div class="col-start-2 ml-[0.7rem]">
                    <div class="flex items-center mt-4">
                      <div>Miễn phí vận chuyển</div>
                    </div>
                    <div class="text-gray-600 font-light mt-[0.2rem]">
                      Miễn phí vận chuyển cho đơn hàng trên ₫99.000
                    </div>
                  </div>
                  <div class="justify-self-center row-start-2 col-start-1">
                    <freeship_icon />
                  </div>
                  <div class="flex flex-col row-start-2 col-start-2 ml-[0.7rem]">
                    <div class="flex items-center">
                      <div class="text-[#636363] w-[110px] mr-2.5 capitalize">
                        Vận chuyển tới
                      </div>
                      <div class="flex items-center relative">
                        <div class="flex items-center">
                          <div class="relative">
                            <button class="flex items-center">
                              <span class="jtext-black font-medium">Phường Thịnh Quang, Quận Đống Đa</span>
                              <arrow_down_icon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="text-[#636363] w-[110px] mr-2.5 capitalize">
                        phí vận chuyển
                      </div>
                      <div>
                        <div class="shopee-drawer" id="pc-drawer-id-0" tabindex="0">
                          <div class="flex items-center cursor-pointer select-none text-black">
                            ₫0
                            <arrow_down_icon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="flex mb-0 last:mb-0 pb-3.75">
              <div class="flex flex-col">
                <section v-for="(group, index) in groupedVariations" :key="index" class="flex items-center"
                  style="margin-bottom: 24px; align-items: baseline">
                  <h3
                    class="text-[#757575] w-[110px] capitalize flex-shrink-0 items-center font-normal m-0 w-40 px-4 mt-4">
                    {{ group.name }}
                  </h3>
                  <div
                    class="flex items-center flex flex-wrap overflow-y-auto mt-[-8px] w-[515px] max-w-[515px] max-h-[220px]">
                    <button v-for="(variation, variationIndex) in group.variations" :key="variationIndex"
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed" :aria-label="variation.name"
                      aria-disabled="true">
                      {{ variation.tier_variation[0].options[0] }}
                    </button>
                  </div>
                </section>
                <section class="flex items-center text-[#757575] mt-4">
                  <h3
                    class="text-[#757575] w-[110px] capitalize flex-shrink-0 items-center font-normal m-0 w-40 px-4 mt-4">
                    Số lượng
                  </h3>
                  <div class="flex items-center">
                    <div style="margin-right: 15px">
                      <div class="flex items-center shopee-input-quantity">
                        <button aria-label="Decrease"
                          class="outline-none cursor-pointer border-0 text-sm font-light flex items-center justify-center transition-colors duration-100 ease-in-out border border-[rgba(0,0,0,.09)] rounded-sm bg-transparent text-[rgba(0,0,0,.8)] w-8 h-8">
                          <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="shopee-svg-icon">
                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                          </svg></button><input
                          class="text-lg outline-none border-0 leading-none tracking-tighter flex items-center justify-center transition-colors duration-100 ease-in-out border-[rgba(0,0,0,.09)] rounded-sm bg-transparent text-[rgba(0,0,0,.8)] w-8 h-8 w-[50px] h-[32px] border-l-0 border-r-0 text-lg box-border text-center cursor-text rounded-none appearance-none"
                          type="text" role="spinbutton" aria-live="assertive" aria-valuenow="1" value="1" /><span
                          aria-live="polite" class="m-0 h-1 overflow-hidden absolute w-1 whitespace-nowrap z-[-1000]">Số
                          lượng 1</span><button aria-label="Increase"
                          class="outline-none cursor-pointer border-0 text-base font-light flex items-center justify-center transition-colors duration-100 ease-in-out border border-[rgba(0,0,0,.09)] rounded-sm bg-transparent text-[rgba(0,0,0,.8)] w-8 h-8">
                          <plus_icon />
                        </button>
                      </div>
                    </div>
                    <div>16544 sản phẩm có sẵn</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 15px">
          <div class="pl-8">
            <div class="flex">
              <button type="button"
                class="p-11 border-solid btn btn-tinted btn--l mr-2.5 text-[var(--brand-primary-color,#ee4d2d)] stroke-current text-xl flex items-center"
                aria-disabled="false">
                <add_to_cart_icon />
                <span>thêm vào giỏ hàng</span>
              </button><button type="button"
                class="p-11 px-20 btn btn-tinted btn--l mr-2.5 text-white stroke-current text-xl flex items-center bg-red-600"
                aria-disabled="false">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-10 mt-16">
          <div>
            <div class="relative flex" id="pc-drawer-id-2" tabindex="0">
              <div class="w-full text-2xl text-[#4a4a4a] cursor-help overflow-hidden flex items-center">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/6c502a2641457578b0d5f5153b53dd5d.png"
                  class="w-12 h-12" />
                <div class="overflow-hidden overflow-ellipsis whitespace-nowrap">
                  7 ngày miễn phí trả hàng
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative flex" id="pc-drawer-id-2" tabindex="0">
              <div class="w-full text-2xl text-[#4a4a4a] cursor-help overflow-hidden flex items-center">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/511aca04cc3ba9234ab0e4fcf20768a2.png"
                  class="w-12 h-12" />
                <div class="overflow-hidden overflow-ellipsis whitespace-nowrap">
                  Hàng chính hãng 100%
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative flex" id="pc-drawer-id-2" tabindex="0">
              <div class="w-full text-2xl text-[#4a4a4a] cursor-help overflow-hidden flex items-center">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/16ead7e0a68c3cff9f32910e4be08122.png"
                  class="w-12 h-12" />
                <div class="overflow-hidden overflow-ellipsis whitespace-nowrap">
                  Miễn phí vận chuyển
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="flex justify-between items-center p-10 page-product__shop">
      <div class="pr-10 box-border border-r border-[rgba(0,0,0,.05)] flex max-w-[44rem]">
        <a class="mr-5 relative" href="/zbagmall?categoryId=100016&amp;entryPoint=ShopByPDP&amp;itemId=19195447056">
          <div class="w-32 h-32">
            <div class="w-full relative pt-full bg-[#f5f5f5] rounded-full overflow-hidden">
              <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"
                class="shopee-svg-icon stroke-[#c6c6c6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-normal leading-10 icon-headshot">
                <g>
                  <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
                  <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10">
                  </path>
                </g>
              </svg>
            </div>
            <img alt="click here to visit shop"
              src="https://down-vn.img.susercontent.com/file/c95bc8800cefcda327ada50c7d8dc3ad_tn" />
          </div>
          <div class="absolute bottom-0 w-full text-center">
            <div class="official-shop-new-badge">
              <img class="h-4 w-16"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/483071c49603aa7163a7f51708bff61b.png"
                loading="lazy" width="64" height="16" />
            </div>
          </div>
        </a>
        <div class="flex-grow flex flex-col justify-between">
          <div
            class="font-normal text-base text-[rgba(0,0,0,.87)] m-0 overflow-hidden overflow-ellipsis whitespace-nowrap">
            ZBAG MALL
          </div>
          <div class="flex items-center text-[#757575] text-lg">
            <div class="text-lg text-[rgba(0,0,0,.54)] capitalize">
              Online 42 phút trước
            </div>
          </div>
          <div class="mt-2 flex">
            <button type="button" class="btn btn-tinted btn--s btn--inline flex-row capitalize">
              <chat_icon />
              <span>Chat ngay</span>
            </button><a class="btn btn-light btn--s btn--inline btn-light--link Vf+pt4"
              href="/zbagmall?categoryId=100016&amp;entryPoint=ShopByPDP&amp;itemId=19195447056">
              <watch_shop_icon />
              <span>xem shop</span>
            </a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-x-12 gap-y-5 pl-6 text-[rgba(0,0,0,.4)] flex-grow">
        <div class="cursor-default flex justify-between relative">
          <label class="capitalize text-[rgba(0,0,0,.4)] mr-3">Đánh giá</label><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right">61,2k</span>
        </div>
        <div class="cursor-default flex justify-between relative">
          <label class="capitalize text-[rgba(0,0,0,.4)] mr-3">tỉ lệ phản hồi</label><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right">87%</span>
        </div>
        <div class="cursor-default flex justify-between relative">
          <label class="capitalize text-[rgba(0,0,0,.4)] mr-3">tham gia</label><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right">9 tháng trước</span>
        </div>
        <a class="cursor-default flex justify-between relative p48aHT" href="/zbagmall#product_list"><label
            class="capitalize text-[rgba(0,0,0,.4)] mr-3">Sản phẩm</label><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right">24</span></a>
        <div class="cursor-default flex justify-between relative">
          <label class="capitalize text-[rgba(0,0,0,.4)] mr-3">thời gian phản hồi</label><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right">trong vài giờ</span>
        </div>
        <div class="cursor-default flex justify-between relative">
          <label class="capitalize text-[rgba(0,0,0,.4)] mr-3">Người theo dõi</label><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right">1,6k</span>
        </div>
      </div>
    </section>
    <div>
      <div class="page-product__content">
        <div class="page-product__content--left">
          <div class="product-detail page-product__detail">
            <section class="p-6 pb-0">
              <h2 class="bg-[rgba(0,0,0,.02)] text-[rgba(0,0,0,.87)] text-xl font-normal m-0 p-3.5 capitalize">
                CHI TIẾT SẢN PHẨM
              </h2>
              <div class="m-12 mx-6 mb-6">
                <div class="flex mb-7">
                  <label class="text-[rgba(0,0,0,.4)] text-lg box-border w-56 pr-3">Danh Mục</label>
                  <div class="flex items-center RnKf-X">
                    <a class="text-[#05a] text-xl no-underline" href="/">Shopee</a><svg enable-background="new 0 0 11 11"
                      viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon xprSzi icon-arrow-right">
                      <path
                        d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                      </path>
                    </svg><a class="text-[#05a] text-xl no-underline" href="/Túi-Ví-Nữ-cat.11035761">Túi Ví Nữ</a><svg
                      enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0"
                      class="shopee-svg-icon xprSzi icon-arrow-right">
                      <path
                        d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                      </path>
                    </svg><a class="text-[#05a] text-xl no-underline" href="/Ba-Lô-Nữ-cat.11035761.11035762">Ba Lô Nữ</a>
                  </div>
                </div>
                <div class="flex mb-7">
                  <label class="text-[rgba(0,0,0,.4)] text-lg box-border w-56 pr-3">Thương hiệu</label><a
                    class="text-[#05a]" href="/search?brands=3648799">ZBAG</a>
                </div>
                <div class="flex mb-7">
                  <label class="text-[rgba(0,0,0,.4)] text-lg box-border w-56 pr-3 eqeCX7">Loại bảo hành</label>
                  <div>Bảo hành nhà sản xuất</div>
                </div>
                <div class="flex mb-7">
                  <label class="text-[rgba(0,0,0,.4)] text-lg box-border w-56 pr-3 eqeCX7">Kho hàng</label>
                  <div>16534</div>
                </div>
                <div class="flex mb-7">
                  <label class="text-[rgba(0,0,0,.4)] text-lg box-border w-56 pr-3 eqeCX7">Gửi từ</label>
                  <div>Hà Nội</div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <div style="display: contents">
              <div class="product-ratings" data-nosnippet="true">
                <div class="product-ratings__header">
                  <div class="product-ratings__header_score">
                    ĐÁNH GIÁ SẢN PHẨM
                  </div>
                </div>
                <div class="product-rating-overview">
                  <div class="product-rating-overview__briefing">
                    <div class="product-rating-overview__score-wrapper">
                      <span class="product-rating-overview__rating-score">5</span><span
                        class="product-rating-overview__rating-score-out-of">
                        trên 5
                      </span>
                    </div>
                    <div class="shopee-rating-stars product-rating-overview__stars">
                      <div class="shopee-rating-stars__stars">
                        <div class="shopee-rating-stars__star-wrapper">
                          <div class="shopee-rating-stars__lit" style="width: 100%">
                            <star_fill_icon />
                          </div>
                          <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"
                            class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                            <polygon fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                          </svg>
                        </div>
                        <div class="shopee-rating-stars__star-wrapper">
                          <div class="shopee-rating-stars__lit" style="width: 100%">
                            <star_fill_icon />
                          </div>
                          <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"
                            class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                            <polygon fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                          </svg>
                        </div>
                        <div class="shopee-rating-stars__star-wrapper">
                          <div class="shopee-rating-stars__lit" style="width: 100%">
                            <star_fill_icon />
                          </div>
                          <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"
                            class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                            <polygon fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                          </svg>
                        </div>
                        <div class="shopee-rating-stars__star-wrapper">
                          <div class="shopee-rating-stars__lit" style="width: 100%">
                            <star_fill_icon />
                          </div>
                          <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"
                            class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                            <polygon fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                          </svg>
                        </div>
                        <div class="shopee-rating-stars__star-wrapper">
                          <div class="shopee-rating-stars__lit" style="width: 100%">
                            <star_fill_icon />
                          </div>
                          <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"
                            class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                            <polygon fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="product-rating-overview__filters">
                    <div class="product-rating-overview__filter product-rating-overview__filter--active">
                      tất cả
                    </div>
                    <div class="product-rating-overview__filter">
                      5 Sao (1,5k)
                    </div>
                    <div class="product-rating-overview__filter">4 Sao (0)</div>
                    <div class="product-rating-overview__filter">3 Sao (0)</div>
                    <div class="product-rating-overview__filter">2 Sao (0)</div>
                    <div class="product-rating-overview__filter">1 Sao (0)</div>
                    <div class="product-rating-overview__filter">
                      Có Bình luận (67)
                    </div>
                    <div class="product-rating-overview__filter">
                      Có hình ảnh / video (11)
                    </div>
                  </div>
                </div>
                <div class="product-ratings__list" style="opacity: 1">
                  <div class="shopee-product-comment-list">
                    <div v-for="(feedback, index) in   feedbacks  " :key="index">
                      <div class="shopee-product-rating">
                        <Avatar :value="feedback.user.avatar" />
                        <div class="shopee-product-rating__main">
                          <div class="shopee-product-rating__author-name">
                            {{ feedback.user.username }}
                          </div>
                          <div class="repeat-purchase-con">
                            <div class="shopee-product-rating__rating">
                              <star-rating :value="feedback.star" />
                            </div>
                          </div>
                          <div class="shopee-product-rating__time">
                            2023-12-12 21:55 | Phân loại hàng: Túi hút ẩm
                          </div>
                          <div style="
                            position: relative;
                            box-sizing: border-box;
                            margin: 15px 0px;
                            font-size: 14px;
                            line-height: 20px;
                            color: rgba(0, 0, 0, 0.87);
                            word-break: break-word;
                            white-space: pre-wrap;
                          ">
                            {{ feedback.message }}
                            <div style="
                              position: absolute;
                              right: 0px;
                              bottom: 0px;
                              background: linear-gradient(
                                to left,
                                rgb(255, 255, 255) 75%,
                                rgba(255, 255, 255, 0)
                              );
                              padding-left: 24px;
                            "></div>
                          </div>
                          <div class="shopee-product-rating__image-list-wrapper">
                            <div class="rating-media-list">
                              <div class="rating-media-list__container">
                                <div class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                  <div class="shopee-rating-media-list-image__wrapper">
                                    <div class="shopee-rating-media-list-image__place-holder">
                                      <icon_loading_image />
                                    </div>
                                    <div class="shopee-rating-media-list-image__content"
                                      style="background-image: url(&quot;https://down-bs-sg.img.susercontent.com/vn-11110103-7r98o-lp6pm8wfy60d64&quot;);">
                                      <div class="shopee-rating-media-list-image__content--blur"> </div>
                                    </div>
                                  </div>
                                  <div class="rating-media-list__video-cover"><svg width="23" height="18"
                                      viewBox="0 0 23 18" fill="none">
                                      <g filter="url(#filter0_d)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z"
                                          fill="white"></path>
                                      </g>
                                      <defs>
                                        <filter id="filter0_d" x="0" y="0" width="22.1667" height="18"
                                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                          <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                          <feOffset></feOffset>
                                          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                          <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix>
                                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow">
                                          </feBlend>
                                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow"
                                            result="shape"></feBlend>
                                        </filter>
                                      </defs>
                                    </svg>
                                    <span>0:07</span>
                                  </div>
                                </div>
                                <div v-for="(image, attachmentIndex) in feedback.attachment.split(',').map(s => s.trim())"
                                  :key="`attachment-${attachmentIndex}`"
                                  class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive">
                                  <div class="shopee-rating-media-list-image__wrapper">
                                    <div class="shopee-rating-media-list-image__place-holder">
                                      <icon_loading_image />
                                    </div>
                                    <div class="shopee-rating-media-list-image__content"
                                      :style="{ backgroundImage: `url('${image}')` }">
                                      <div class="shopee-rating-media-list-image__content--blur"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="shopee-product-rating__actions" style="justify-content: space-between">
                          <div style="display: flex">
                            <div class="shopee-product-rating__like-button">
                              <like_button />
                            </div>
                            <div class="shopee-product-rating__like-count">
                              hữu ích?
                            </div>
                          </div>
                          <div style="display: flex">
                            <div class="shopee-product-rating__report-menu-button">
                              <div class="stardust-dropdown">
                                <div class="stardust-dropdown__item-header">
                                  <div>
                                    <svg width="4px" height="16px" viewBox="0 0 4 16" version="1.1"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <defs></defs>
                                      <g stroke="none" stroke-width="1" fill-rule="evenodd">
                                        <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                          <g transform="translate(155.000000, 92.000000)">
                                            <g transform="translate(40.000000, 184.000000)">
                                              <g transform="translate(0.000000, 161.000000)">
                                                <g>
                                                  <g transform="translate(50.000000, 2.000000)">
                                                    <path
                                                      d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111">
                                                    </path>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div class="stardust-dropdown__item-body">
                                  <div class="shopee-product-rating__report-menu-dropdown">
                                    báo cáo
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shopee-page-controller product-ratings__page-controller">
                  <button class="shopee-icon-button shopee-icon-button--left">
                    <arrow_left_icon />
                  </button><button class="shopee-button-solid shopee-button-solid--primary">
                    1</button><button class="shopee-button-no-outline">2</button><button
                    class="shopee-button-no-outline">3</button><button class="shopee-button-no-outline">4</button><button
                    class="shopee-button-no-outline">5</button><button
                    class="shopee-button-no-outline shopee-button-no-outline--non-click">
                    ...</button><button class="shopee-icon-button shopee-icon-button--right">
                    <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0"
                      class="shopee-svg-icon icon-arrow-right">
                      <path
                        d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style="height: 1px"></div>
        </div>
      </div>
      <div class="page-product__content--right">
        <div style="display: contents"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 500;
  margin: 0;
  vertical-align: sub;
  max-height: 4.8rem;
  line-height: 2.6rem;
  max-width: 66.5rem;
  font-size: 2rem;
  overflow-wrap: break-word;
  gap: 10px;
}

.price {
  flex-wrap: wrap;
  width: 625px;
  flex-basis: 625px;
  min-height: 3rem;
}

.hUWqqt {
  overflow: visible;
  cursor: pointer;
  min-width: 5rem;
  min-height: 2.5rem;
  box-sizing: border-box;
  padding: 0.5rem;
  margin: 8px 8px 0 0;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  position: relative;
  background: #fff;
  outline: 0;
  word-break: break-word;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn.btn-tinted {
  position: relative;
  overflow: visible;
  outline: 0;
}

.btn-tinted {
  border: 1px solid var(--brand-primary-color);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.03);
}

.btn--l {
  min-width: 80px;
  max-width: 250px;
  font-size: 16px;
  height: 48px;
}

.btn {
  outline: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  outline: 0;
}

.btn-solid-primary {
  position: relative;
  overflow: visible;
  outline: 0px;
}

.btn--s {
  height: 34px;
  padding: 0 15px;
  min-width: 60px;
  max-width: 190px;
}

.btn--inline {
  display: inline-flex;
}

.page-product__content {
  min-height: 40rem;
  display: flex;
}

.page-product__content--left {
  flex: 1;
  min-width: 0;
}

.product-ratings {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.125rem;
  overflow: hidden;
  background: #fff;
  margin-top: 0.9375rem;
  padding: 1.5625rem;
  overflow: visible;
}

.product-ratings__header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 1rem;
}

.product-ratings__header_score {
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.87);
  margin-right: 2rem;
  text-transform: capitalize;
}

.product-rating-overview__score-wrapper {
  color: #d0011b;
}

.product-rating-overview__rating-score {
  font-size: 3rem;
}

.product-rating-overview {
  background-color: #fffbf8;
  min-height: 8rem;
  border: 1px solid #f9ede5;
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  border-radius: 3.2px;
  box-sizing: border-box;
  padding: 3rem;
}

.product-rating-overview__briefing {
  text-align: center;
  margin-right: 3rem;
}

.shopee-product-rating:first-child {
  padding-top: 0;
}

.shopee-product-rating__author-name {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.2rem;
}

.shopee-product-rating__main .repeat-purchase-con {
  display: flex;
}

.shopee-product-rating__rating {
  margin-top: 0.6rem;
}

.shopee-product-rating {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  padding: 1.6rem 0 1.6rem 2rem;
  align-items: flex-start;
}

.shopee-product-rating__rating .icon-rating-solid {
  color: #d0011b;
}

.shopee-product-rating__rating .icon-rating-solid {
  margin-right: 0.2rem;
  color: #ee4d2d;
}

.shopee-product-rating__main {
  flex: 1;
}

.shopee-product-rating__avatar .shopee-avatar {
  border: 0;
  width: 4rem;
  height: 4rem;
}

.shopee-avatar__placeholder {
  width: 100%;
  position: relative;
  padding-top: 100%;
  background-color: #f5f5f5;
  border-radius: 50%;
  overflow: hidden;
}

.product-ratings__page-controller {
  margin-top: 2rem;
  text-align: right;
  justify-content: flex-end;
}

.product-rating-overview__stars {
  font-size: 2rem;
  margin-top: 1rem;
}

.shopee-rating-stars {
  display: inline-block;
  position: relative;
}

.shopee-rating-stars__stars {
  display: flex;
}

.product-rating-overview__filters {
  flex: 1;
  margin-left: 1.5rem;
}

.product-rating-overview__filter {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  height: 5.2rem;
  line-height: 3.2rem;
  min-width: 10rem;
  text-align: center;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.8);
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  display: inline-block;
  margin-right: 0.8rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  text-transform: capitalize;
  border-radius: 2px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.product-rating-overview__filter--active {
  border-color: var(--brand-primary-color, #ee4d2d);
  fill: var(--brand-primary-color, #ee4d2d);
  color: var(--brand-primary-color, #ee4d2d);
}

.shopee-product-rating__image-list-wrapper {
  margin-top: 1.5rem;
}

.rating-media-list__container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.rating-media-list__image-wrapper--inactive {
  cursor: zoom-in;
}

.rating-media-list__image-wrapper {
  height: 7.2rem;
  margin: 1rem 1rem 0;
  position: relative;
  width: 7.2rem;
}

.shopee-rating-media-list-image__wrapper {
  position: relative;
}

.shopee-rating-media-list-image__content,
.shopee-rating-media-list-image__wrapper {
  height: 100%;
  width: 100%;
}

.shopee-rating-media-list-image__place-holder {
  background-color: #fafafa;
  height: 100%;
  position: relative;
  width: 100%;
}

.shopee-rating-media-list-image__content {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  left: 0;
  position: absolute;
  top: 0;
}

.shopee-rating-media-list-image__content,
.shopee-rating-media-list-image__wrapper {
  height: 100%;
  width: 100%;
}

.shopee-rating-media-list-image__content--blur {
  height: 100%;
  width: 100%;
}

.rating-media-list__zoomed-image {
  display: none;
  height: 100%;
  margin-left: -.96rem;
  max-height: 50rem;
  max-width: 51.6rem;
  width: 100%;
}

.rating-media-list-image-carousel {
  height: 100%;
  position: relative;
  width: 100%;
}


.rating-media-list-image-carousel__item-list-wrapper {
  height: 100%;
  overflow: hidden;
}

.rating-media-list-image-carousel__item-list {
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}

.rating-media-list-image-carousel__item--fluid {
  flex: 0 1 auto;
  overflow-x: visible;
}

.rating-media-list-image-carousel__item {
  align-self: center;
  float: left;
  height: 100%;
  list-style: none;
}

.rating-media-list-image-carousel__item a,
.rating-media-list-image-carousel__item img {
  -webkit-user-drag: none;
}

.rating-media-list__zoomed-image-item,
.rating-media-list__zoomed-video-item {
  max-height: 50rem;
  max-width: 51.6rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
</style>
