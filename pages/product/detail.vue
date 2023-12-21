<script setup>
const images = [
  'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lofawhoqcyk3f3',
  'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lofawhoqed4j42_tn',
  'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lofawhoqcyk3f3',
];
</script>

<template>
  <div class="container">
    <div class="flex bg-white">
      <div class="thumbnail ml-6">
        <div class="flex flex-col">
          <div>
            <img
              src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lofawhoqcyk3f3"
              alt=""
              style="width: 450px; height: auto"
            />
          </div>
          <div class="mt-4">
            <div class="last:mr-0">
              <div
                v-for="(image, index) in images"
                :key="index"
                class="inline-block box-border w-1/5 mr-2"
                :class="{ 'mr-0': index === images.length - 1 }"
              >
                <img
                  :src="image"
                  :alt="`image-${index}`"
                  style="width: 100px; height: auto"
                />
              </div>
            </div>
          </div>
          <div
            class="flex justify-center items-center"
            style="margin-top: 15px"
          >
            <div class="flex items-center px-7.5">
              <div class="text-2xl text-black">Chia sẻ:</div>
              <button
                class="sprite-product-sharing sprite-product-sharing-fm tSCitv"
                aria-label="Share on Messenger"
              ></button
              ><button
                class="sprite-product-sharing sprite-product-sharing-fb tSCitv"
                aria-label="Share on Facebook"
              ></button
              ><button
                class="sprite-product-sharing sprite-product-sharing-pinterest tSCitv"
                aria-label="Share on Pinterest"
              ></button
              ><button
                class="sprite-product-sharing sprite-product-sharing-twitter tSCitv"
                aria-label="Share on Twitter"
              ></button>
            </div>
            <div class="flex items-center _3jkKrB">
              <button class="IYjGwk" tabindex="0">
                <svg width="24" height="20" class="x0F377">
                  <path
                    d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                    stroke="#FF424F"
                    stroke-width="1.5"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                  ></path></svg
                >0
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto flex-col ml-4">
        <div class="title">
          <svg
            width="30"
            height="16"
            viewBox="0 0 30 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="BSp+Yo"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 2C0 0.895431 0.895431 0 2 0L28 0C29.1046 0 30 0.895431 30 2V14C30 15.1046 29.1046 16 28 16H2C0.89543 16 0 15.1046 0 14L0 2Z"
              fill="#D0011B"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8045 3.00128H10.8673C10.8403 3.00132 10.8137 3.00752 10.7895 3.01939C10.7652 3.03126 10.744 3.0485 10.7274 3.0698L10.151 3.70154C10.1108 3.74133 10.0736 3.78149 10.0397 3.82129L10.0109 3.85512L9.73645 4.1559C9.26611 4.63346 8.55272 5.15874 7.50601 5.1696H7.47399C6.35562 5.1696 5.61724 4.53545 5.18223 4.084L4.2545 3.06788C4.23787 3.04676 4.21666 3.02968 4.19249 3.01792C4.16831 3.00617 4.14178 3.00004 4.1149 3H3.17803C3.13084 3.00008 3.08561 3.01887 3.05224 3.05223C3.01887 3.0856 3.00008 3.13084 3 3.17803V12.8198C3.00008 12.867 3.01887 12.9123 3.05224 12.9456C3.08561 12.979 3.13084 12.9978 3.17803 12.9979H4.11458C4.16177 12.9978 4.207 12.979 4.24037 12.9456C4.27373 12.9123 4.29252 12.867 4.2926 12.8198V5.00726C4.51669 5.20068 4.74894 5.38439 4.9887 5.55788C5.57807 5.9956 6.40375 6.40585 7.47655 6.40585H7.51722C8.53818 6.3953 9.32642 6.03468 9.89137 5.64233L9.89877 5.64155L9.97012 5.58642C10.0506 5.52802 10.1262 5.46926 10.1969 5.41116L10.689 5.03095V12.8198C10.6892 12.867 10.708 12.9122 10.7413 12.9455C10.7747 12.9789 10.8199 12.9977 10.867 12.9979H11.8042C11.8514 12.9977 11.8966 12.9789 11.9299 12.9455C11.9633 12.9122 11.9821 12.867 11.9822 12.8198V3.17931C11.9821 3.1322 11.9633 3.08706 11.93 3.05372C11.8967 3.02038 11.8516 3.00153 11.8045 3.00128ZM19.3506 6.74843H18.4154C18.3682 6.74851 18.3229 6.76729 18.2896 6.80066C18.2562 6.83403 18.2374 6.87926 18.2373 6.92645V7.5172C17.6712 7.03692 16.8957 6.70776 16.087 6.70776C14.307 6.70776 12.8639 8.11659 12.8639 9.85105C12.8639 11.5855 14.307 12.9947 16.087 12.9947C16.8743 12.9882 17.6348 12.7074 18.2373 12.2006V12.8195C18.2372 12.843 18.2417 12.8663 18.2506 12.888C18.2595 12.9097 18.2726 12.9295 18.2891 12.9461C18.3057 12.9628 18.3253 12.976 18.347 12.9851C18.3686 12.9941 18.3919 12.9988 18.4154 12.9988H19.3522C19.3994 12.9987 19.4446 12.98 19.478 12.9466C19.5114 12.9132 19.5302 12.868 19.5303 12.8208V6.92933C19.5306 6.90559 19.5262 6.88202 19.5173 6.86C19.5084 6.83798 19.4952 6.81796 19.4785 6.80111C19.4618 6.78426 19.4418 6.77092 19.4199 6.76187C19.3979 6.75283 19.3744 6.74825 19.3506 6.74843ZM16.1455 11.8375C14.9929 11.8375 14.0586 10.9493 14.0586 9.85425C14.0586 8.75921 14.9929 7.87133 16.1455 7.87133C17.2982 7.87133 18.2329 8.75921 18.2329 9.85425C18.2329 10.9493 17.2982 11.8375 16.1455 11.8375ZM23.7506 12.02C23.7618 11.9746 23.7547 11.9266 23.7307 11.8865C23.7067 11.8464 23.6678 11.8174 23.6225 11.8058L23.2034 11.7005L23.1918 11.6976C22.5499 11.5653 22.3174 11.354 22.287 10.769V3.17897C22.2866 3.13204 22.2677 3.08715 22.2344 3.05414C22.201 3.02114 22.1559 3.0027 22.109 3.00287H21.2445C21.1975 3.0027 21.1524 3.02114 21.1191 3.05414C21.0857 3.08715 21.0668 3.13204 21.0664 3.17897V10.4472C21.0082 12.1513 21.9818 12.6863 22.8857 12.8864L23.3174 12.9947C23.363 13.0061 23.4113 12.999 23.4517 12.975C23.4922 12.951 23.5216 12.9121 23.5335 12.8666L23.6318 12.4888C23.6348 12.4786 23.6374 12.4681 23.6399 12.4576L23.6427 12.4465L23.7506 12.02ZM26.9708 11.8864C26.9948 11.9266 27.0019 11.9746 26.9905 12.02L26.8826 12.4465C26.8794 12.4606 26.8759 12.475 26.8718 12.4888L26.7738 12.8666C26.7618 12.9121 26.7324 12.9511 26.6918 12.975C26.6513 12.999 26.603 13.0061 26.5573 12.9947L26.1257 12.8864C25.2218 12.6863 24.2485 12.1513 24.3064 10.4472V3.17897C24.3067 3.13204 24.3257 3.08715 24.359 3.05414C24.3924 3.02114 24.4375 3.0027 24.4844 3.00287H25.3489C25.3959 3.0027 25.441 3.02114 25.4743 3.05414C25.5077 3.08715 25.5266 3.13204 25.527 3.17897V10.769C25.5574 11.354 25.7914 11.5653 26.4318 11.6976C26.436 11.6982 26.4395 11.7005 26.4437 11.7005L26.8625 11.8058C26.9078 11.8173 26.9468 11.8463 26.9708 11.8864Z"
              fill="white"
            ></path></svg
          ><span
            >Gói hút ẩm Balo nữ đi học ZBAG cặp sách vải dù thời trang có ngăn
            chống sốc đựng vừa laptop 15 6 inch BL26</span
          >
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
                <div class="text-2xl border-b-2">1k3</div>
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
                      ₫300.000
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
                    height="20"
                    class="justify-self-center col-start-1"
                  />
                  <div class="col-start-2 ml-[0.7rem]">
                    <div class="flex items-center mt-4">
                      <div>Miễn phí vận chuyển</div>
                    </div>
                    <div class="text-gray-600 font-light mt-[0.2rem]">
                      Miễn phí vận chuyển cho đơn hàng trên ₫99.000
                    </div>
                  </div>
                  <div class="justify-self-center row-start-2 col-start-1">
                    <svg
                      enable-background="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      class="shopee-svg-icon icon-free-shipping-line"
                    >
                      <g>
                        <line
                          fill="none"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          x1="8.6"
                          x2="4.2"
                          y1="9.8"
                          y2="9.8"
                        ></line>
                        <circle
                          cx="3"
                          cy="11.2"
                          fill="none"
                          r="2"
                          stroke-miterlimit="10"
                        ></circle>
                        <circle
                          cx="10"
                          cy="11.2"
                          fill="none"
                          r="2"
                          stroke-miterlimit="10"
                        ></circle>
                        <line
                          fill="none"
                          stroke-miterlimit="10"
                          x1="10.5"
                          x2="14.4"
                          y1="7.3"
                          y2="7.3"
                        ></line>
                        <polyline
                          fill="none"
                          points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        ></polyline>
                        <polyline
                          fill="none"
                          points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        ></polyline>
                      </g>
                    </svg>
                  </div>
                  <div
                    class="flex flex-col row-start-2 col-start-2 ml-[0.7rem]"
                  >
                    <div class="flex items-center">
                      <div class="text-[#636363] w-[110px] mr-2.5 capitalize">
                        Vận chuyển tới
                      </div>
                      <div class="flex items-center relative">
                        <div class="flex items-center">
                          <div class="relative">
                            <button class="flex items-center">
                              <span class="jtext-black font-medium"
                                >Phường Thịnh Quang, Quận Đống Đa</span
                              ><svg
                                enable-background="new 0 0 11 11"
                                viewBox="0 0 11 11"
                                x="0"
                                y="0"
                                class="shopee-svg-icon icon-arrow-down"
                              >
                                <g>
                                  <path
                                    d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"
                                  ></path>
                                </g>
                              </svg>
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
                        <div
                          class="shopee-drawer"
                          id="pc-drawer-id-0"
                          tabindex="0"
                        >
                          <div
                            class="flex items-center cursor-pointer select-none text-black"
                          >
                            ₫0<svg
                              enable-background="new 0 0 11 11"
                              viewBox="0 0 11 11"
                              x="0"
                              y="0"
                              class="shopee-svg-icon icon-arrow-down"
                            >
                              <g>
                                <path
                                  d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"
                                ></path>
                              </g>
                            </svg>
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
                <section
                  class="flex items-center"
                  style="margin-bottom: 24px; align-items: baseline"
                >
                  <h3
                    class="text-[#757575] w-[110px] capitalize flex-shrink-0 items-center font-normal m-0 w-40 px-4 mt-4"
                  >
                    Phân loại
                  </h3>
                  <div
                    class="flex items-center flex flex-wrap overflow-y-auto mt-[-8px] w-[515px] max-w-[515px] max-h-[220px]"
                  >
                    <button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Balo đen"
                      aria-disabled="true"
                    >
                      Balo đen</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Balo trắng"
                      aria-disabled="true"
                    >
                      Balo trắng</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Balo xanh dương"
                      aria-disabled="true"
                    >
                      Balo xanh dương</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Balo xanh lá"
                      aria-disabled="true"
                    >
                      Balo xanh lá</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Đen + hải âu"
                      aria-disabled="true"
                    >
                      Đen + hải âu</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Đen + bò sữa"
                      aria-disabled="true"
                    >
                      Đen + bò sữa</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Đen + vịt trắng"
                      aria-disabled="true"
                    >
                      Đen + vịt trắng</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Đen + ếch xanh"
                      aria-disabled="true"
                    >
                      Đen + ếch xanh</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Đen + gấu trắng"
                      aria-disabled="true"
                    >
                      Đen + gấu trắng</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Đen + gấu nâu"
                      aria-disabled="true"
                    >
                      Đen + gấu nâu</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Trắng + hải âu"
                      aria-disabled="true"
                    >
                      Trắng + hải âu</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Trắng + bò sữa"
                      aria-disabled="true"
                    >
                      Trắng + bò sữa</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Trắng + vịt trắng"
                      aria-disabled="true"
                    >
                      Trắng + vịt trắng</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Trắng + ếch xanh"
                      aria-disabled="true"
                    >
                      Trắng + ếch xanh</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Trắng + gấu trắng"
                      aria-disabled="true"
                    >
                      Trắng + gấu trắng</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Trắng + gấu nâu"
                      aria-disabled="true"
                    >
                      Trắng + gấu nâu</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh dương + hải âu"
                      aria-disabled="true"
                    >
                      Xanh dương + hải âu</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh dương + bò sữa"
                      aria-disabled="true"
                    >
                      Xanh dương + bò sữa</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh dươg +vịt trắng"
                      aria-disabled="true"
                    >
                      Xanh dươg +vịt trắng</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh dương +ếch xanh"
                      aria-disabled="true"
                    >
                      Xanh dương +ếch xanh</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh dươg +gấu trắng"
                      aria-disabled="true"
                    >
                      Xanh dươg +gấu trắng</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh dương + gấu nâu"
                      aria-disabled="true"
                    >
                      Xanh dương + gấu nâu</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh lá + hải âu"
                      aria-disabled="true"
                    >
                      Xanh lá + hải âu</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh lá + bò sữa"
                      aria-disabled="true"
                    >
                      Xanh lá + bò sữa</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh lá + vịt trắng"
                      aria-disabled="true"
                    >
                      Xanh lá + vịt trắng</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh lá + ếch xanh"
                      aria-disabled="true"
                    >
                      Xanh lá + ếch xanh</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh lá + gấu trắng"
                      aria-disabled="true"
                    >
                      Xanh lá + gấu trắng</button
                    ><button
                      class="hUWqqt text-[rgba(0,0,0,.26)] bg-[#fafafa] cursor-not-allowed"
                      aria-label="Xanh lá + gấu nâu"
                      aria-disabled="true"
                    >
                      Xanh lá + gấu nâu</button
                    ><button
                      class="hUWqqt"
                      aria-label="Gói hút ẩm"
                      aria-disabled="false"
                    >
                      Gói hút ẩm</button
                    ><button
                      class="hUWqqt"
                      aria-label="Túi hút ẩm"
                      aria-disabled="false"
                    >
                      Túi hút ẩm
                    </button>
                  </div>
                </section>
                <section class="flex items-center text-[#757575] mt-4">
                  <h3
                    class="text-[#757575] w-[110px] capitalize flex-shrink-0 items-center font-normal m-0 w-40 px-4 mt-4"
                  >
                    Số lượng
                  </h3>
                  <div class="flex items-center">
                    <div style="margin-right: 15px">
                      <div class="flex items-center shopee-input-quantity">
                        <button
                          aria-label="Decrease"
                          class="outline-none cursor-pointer border-0 text-sm font-light flex items-center justify-center transition-colors duration-100 ease-in-out border border-[rgba(0,0,0,.09)] rounded-sm bg-transparent text-[rgba(0,0,0,.8)] w-8 h-8"
                        >
                          <svg
                            enable-background="new 0 0 10 10"
                            viewBox="0 0 10 10"
                            x="0"
                            y="0"
                            class="shopee-svg-icon"
                          >
                            <polygon
                              points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"
                            ></polygon>
                          </svg></button
                        ><input
                          class="text-lg outline-none border-0 leading-none tracking-tighter flex items-center justify-center transition-colors duration-100 ease-in-out border-[rgba(0,0,0,.09)] rounded-sm bg-transparent text-[rgba(0,0,0,.8)] w-8 h-8 w-[50px] h-[32px] border-l-0 border-r-0 text-lg box-border text-center cursor-text rounded-none appearance-none"
                          type="text"
                          role="spinbutton"
                          aria-live="assertive"
                          aria-valuenow="1"
                          value="1"
                        /><span
                          aria-live="polite"
                          class="m-0 h-1 overflow-hidden absolute w-1 whitespace-nowrap z-[-1000]"
                          >Số lượng 1</span
                        ><button
                          aria-label="Increase"
                          class="outline-none cursor-pointer border-0 text-base font-light flex items-center justify-center transition-colors duration-100 ease-in-out border border-[rgba(0,0,0,.09)] rounded-sm bg-transparent text-[rgba(0,0,0,.8)] w-8 h-8"
                        >
                          <svg
                            enable-background="new 0 0 10 10"
                            viewBox="0 0 10 10"
                            x="0"
                            y="0"
                            class="shopee-svg-icon icon-plus-sign"
                          >
                            <polygon
                              points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"
                            ></polygon>
                          </svg>
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
              <button
                type="button"
                class="p-11 border-solid btn btn-tinted btn--l mr-2.5 text-[var(--brand-primary-color,#ee4d2d)] stroke-current text-xl flex items-center"
                aria-disabled="false"
              >
                <svg
                  enable-background="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x="0"
                  y="0"
                  class="shopee-svg-icon tDviDD icon-add-to-cart"
                >
                  <g>
                    <g>
                      <polyline
                        fill="none"
                        points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                      ></polyline>
                      <circle cx="6" cy="13.5" r="1" stroke="none"></circle>
                      <circle cx="11.5" cy="13.5" r="1" stroke="none"></circle>
                    </g>
                    <line
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="7.5"
                      x2="10.5"
                      y1="7"
                      y2="7"
                    ></line>
                    <line
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="9"
                      x2="9"
                      y1="8.5"
                      y2="5.5"
                    ></line>
                  </g></svg
                ><span>thêm vào giỏ hàng</span></button
              ><button
                type="button"
                class="p-11 px-20 btn btn-tinted btn--l mr-2.5 text-white stroke-current text-xl flex items-center bg-red-600"
                aria-disabled="false"
              >
                Mua ngay
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-10 mt-16">
          <div>
            <div class="relative flex" id="pc-drawer-id-2" tabindex="0">
              <div
                class="w-full text-2xl text-[#4a4a4a] cursor-help overflow-hidden flex items-center"
              >
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/6c502a2641457578b0d5f5153b53dd5d.png"
                  class="w-12 h-12"
                />
                <div
                  class="overflow-hidden overflow-ellipsis whitespace-nowrap"
                >
                  7 ngày miễn phí trả hàng
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative flex" id="pc-drawer-id-2" tabindex="0">
              <div
                class="w-full text-2xl text-[#4a4a4a] cursor-help overflow-hidden flex items-center"
              >
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/511aca04cc3ba9234ab0e4fcf20768a2.png"
                  class="w-12 h-12"
                />
                <div
                  class="overflow-hidden overflow-ellipsis whitespace-nowrap"
                >
                  Hàng chính hãng 100%
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative flex" id="pc-drawer-id-2" tabindex="0">
              <div
                class="w-full text-2xl text-[#4a4a4a] cursor-help overflow-hidden flex items-center"
              >
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/16ead7e0a68c3cff9f32910e4be08122.png"
                  class="w-12 h-12"
                />
                <div
                  class="overflow-hidden overflow-ellipsis whitespace-nowrap"
                >
                  Miễn phí vận chuyển
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="flex justify-between items-center p-10 page-product__shop">
      <div
        class="pr-10 box-border border-r border-[rgba(0,0,0,.05)] flex max-w-[44rem]"
      >
        <a
          class="mr-5 relative"
          href="/zbagmall?categoryId=100016&amp;entryPoint=ShopByPDP&amp;itemId=19195447056"
        >
          <div class="w-32 h-32">
            <div
              class="w-full relative pt-full bg-[#f5f5f5] rounded-full overflow-hidden"
            >
              <svg
                enable-background="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                class="shopee-svg-icon stroke-[#c6c6c6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-normal leading-10 icon-headshot"
              >
                <g>
                  <circle
                    cx="7.5"
                    cy="4.5"
                    fill="none"
                    r="3.8"
                    stroke-miterlimit="10"
                  ></circle>
                  <path
                    d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  ></path>
                </g>
              </svg>
            </div>
            <img
              alt="click here to visit shop"
              src="https://down-vn.img.susercontent.com/file/c95bc8800cefcda327ada50c7d8dc3ad_tn"
            />
          </div>
          <div class="absolute bottom-0 w-full text-center">
            <div class="official-shop-new-badge">
              <img
                class="h-4 w-16"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/483071c49603aa7163a7f51708bff61b.png"
                loading="lazy"
                width="64"
                height="16"
              />
            </div>
          </div>
        </a>
        <div class="flex-grow flex flex-col justify-between">
          <div
            class="font-normal text-base text-[rgba(0,0,0,.87)] m-0 overflow-hidden overflow-ellipsis whitespace-nowrap"
          >
            ZBAG MALL
          </div>
          <div class="flex items-center text-[#757575] text-lg">
            <div class="text-lg text-[rgba(0,0,0,.54)] capitalize">
              Online 42 phút trước
            </div>
          </div>
          <div class="mt-2 flex">
            <button
              type="button"
              class="btn btn-tinted btn--s btn--inline flex-row capitalize"
            >
              <svg viewBox="0 0 16 16" class="shopee-svg-icon mr-1.25">
                <g fill-rule="evenodd">
                  <path
                    d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z"
                  ></path>
                </g></svg
              ><span>Chat ngay</span></button
            ><a
              class="btn btn-light btn--s btn--inline btn-light--link Vf+pt4"
              href="/zbagmall?categoryId=100016&amp;entryPoint=ShopByPDP&amp;itemId=19195447056"
              ><svg
                enable-background="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                stroke-width="0"
                class="shopee-svg-icon mr-1.25"
              >
                <path
                  d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"
                ></path></svg
              ><span>xem shop</span></a
            >
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-3 gap-x-12 gap-y-5 pl-6 text-[rgba(0,0,0,.4)] flex-grow"
      >
        <div class="cursor-default flex justify-between relative">
          <label class="capitalize text-[rgba(0,0,0,.4)] mr-3">Đánh giá</label
          ><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right"
            >61,2k</span
          >
        </div>
        <div class="cursor-default flex justify-between relative">
          <label class="capitalize text-[rgba(0,0,0,.4)] mr-3"
            >tỉ lệ phản hồi</label
          ><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right"
            >87%</span
          >
        </div>
        <div class="cursor-default flex justify-between relative">
          <label class="capitalize text-[rgba(0,0,0,.4)] mr-3">tham gia</label
          ><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right"
            >9 tháng trước</span
          >
        </div>
        <a
          class="cursor-default flex justify-between relative p48aHT"
          href="/zbagmall#product_list"
          ><label class="capitalize text-[rgba(0,0,0,.4)] mr-3">Sản phẩm</label
          ><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right"
            >24</span
          ></a
        >
        <div class="cursor-default flex justify-between relative">
          <label class="capitalize text-[rgba(0,0,0,.4)] mr-3"
            >thời gian phản hồi</label
          ><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right"
            >trong vài giờ</span
          >
        </div>
        <div class="cursor-default flex justify-between relative">
          <label class="capitalize text-[rgba(0,0,0,.4)] mr-3"
            >Người theo dõi</label
          ><span
            class="text-[var(--brand-primary-color)] whitespace-nowrap text-right"
            >1,6k</span
          >
        </div>
      </div>
    </section>
    <div>
      <div class="page-product__content">
        <div class="page-product__content--left">
          <div class="product-detail page-product__detail">
            <section class="p-6 pb-0">
              <h2
                class="bg-[rgba(0,0,0,.02)] text-[rgba(0,0,0,.87)] text-xl font-normal m-0 p-3.5 capitalize"
              >
                CHI TIẾT SẢN PHẨM
              </h2>
              <div class="m-12 mx-6 mb-6">
                <div class="flex mb-7">
                  <label
                    class="text-[rgba(0,0,0,.4)] text-lg box-border w-56 pr-3"
                    >Danh Mục</label
                  >
                  <div class="flex items-center RnKf-X">
                    <a class="text-[#05a] text-xl no-underline" href="/"
                      >Shopee</a
                    ><svg
                      enable-background="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x="0"
                      y="0"
                      class="shopee-svg-icon xprSzi icon-arrow-right"
                    >
                      <path
                        d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"
                      ></path></svg
                    ><a
                      class="text-[#05a] text-xl no-underline"
                      href="/Túi-Ví-Nữ-cat.11035761"
                      >Túi Ví Nữ</a
                    ><svg
                      enable-background="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x="0"
                      y="0"
                      class="shopee-svg-icon xprSzi icon-arrow-right"
                    >
                      <path
                        d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"
                      ></path></svg
                    ><a
                      class="text-[#05a] text-xl no-underline"
                      href="/Ba-Lô-Nữ-cat.11035761.11035762"
                      >Ba Lô Nữ</a
                    >
                  </div>
                </div>
                <div class="flex mb-7">
                  <label
                    class="text-[rgba(0,0,0,.4)] text-lg box-border w-56 pr-3"
                    >Thương hiệu</label
                  ><a class="text-[#05a]" href="/search?brands=3648799">ZBAG</a>
                </div>
                <div class="flex mb-7">
                  <label
                    class="text-[rgba(0,0,0,.4)] text-lg box-border w-56 pr-3 eqeCX7"
                    >Loại bảo hành</label
                  >
                  <div>Bảo hành nhà sản xuất</div>
                </div>
                <div class="flex mb-7">
                  <label
                    class="text-[rgba(0,0,0,.4)] text-lg box-border w-56 pr-3 eqeCX7"
                    >Kho hàng</label
                  >
                  <div>16534</div>
                </div>
                <div class="flex mb-7">
                  <label
                    class="text-[rgba(0,0,0,.4)] text-lg box-border w-56 pr-3 eqeCX7"
                    >Gửi từ</label
                  >
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
                      <span class="product-rating-overview__rating-score"
                        >5</span
                      ><span
                        class="product-rating-overview__rating-score-out-of"
                      >
                        trên 5
                      </span>
                    </div>
                    <div
                      class="shopee-rating-stars product-rating-overview__stars"
                    >
                      <div class="shopee-rating-stars__stars">
                        <div class="shopee-rating-stars__star-wrapper">
                          <div
                            class="shopee-rating-stars__lit"
                            style="width: 100%"
                          >
                            <svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                            >
                              <polygon
                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              ></polygon>
                            </svg>
                          </div>
                          <svg
                            enable-background="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x="0"
                            y="0"
                            class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating"
                          >
                            <polygon
                              fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            ></polygon>
                          </svg>
                        </div>
                        <div class="shopee-rating-stars__star-wrapper">
                          <div
                            class="shopee-rating-stars__lit"
                            style="width: 100%"
                          >
                            <svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                            >
                              <polygon
                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              ></polygon>
                            </svg>
                          </div>
                          <svg
                            enable-background="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x="0"
                            y="0"
                            class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating"
                          >
                            <polygon
                              fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            ></polygon>
                          </svg>
                        </div>
                        <div class="shopee-rating-stars__star-wrapper">
                          <div
                            class="shopee-rating-stars__lit"
                            style="width: 100%"
                          >
                            <svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                            >
                              <polygon
                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              ></polygon>
                            </svg>
                          </div>
                          <svg
                            enable-background="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x="0"
                            y="0"
                            class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating"
                          >
                            <polygon
                              fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            ></polygon>
                          </svg>
                        </div>
                        <div class="shopee-rating-stars__star-wrapper">
                          <div
                            class="shopee-rating-stars__lit"
                            style="width: 100%"
                          >
                            <svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                            >
                              <polygon
                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              ></polygon>
                            </svg>
                          </div>
                          <svg
                            enable-background="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x="0"
                            y="0"
                            class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating"
                          >
                            <polygon
                              fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            ></polygon>
                          </svg>
                        </div>
                        <div class="shopee-rating-stars__star-wrapper">
                          <div
                            class="shopee-rating-stars__lit"
                            style="width: 100%"
                          >
                            <svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                            >
                              <polygon
                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              ></polygon>
                            </svg>
                          </div>
                          <svg
                            enable-background="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x="0"
                            y="0"
                            class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating"
                          >
                            <polygon
                              fill="none"
                              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            ></polygon>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="product-rating-overview__filters">
                    <div
                      class="product-rating-overview__filter product-rating-overview__filter--active"
                    >
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
                    <div class="shopee-product-rating">
                      <div class="shopee-product-rating__avatar">
                        <div class="shopee-avatar">
                          <div class="shopee-avatar__placeholder">
                            <svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon icon-headshot"
                            >
                              <g>
                                <circle
                                  cx="7.5"
                                  cy="4.5"
                                  fill="none"
                                  r="3.8"
                                  stroke-miterlimit="10"
                                ></circle>
                                <path
                                  d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-miterlimit="10"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="shopee-product-rating__main">
                        <div class="shopee-product-rating__author-name">
                          t*****o
                        </div>
                        <div class="repeat-purchase-con">
                          <div class="shopee-product-rating__rating">
                            <svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon icon-rating-solid--active icon-rating-solid"
                            >
                              <polygon
                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              ></polygon></svg
                            ><svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon icon-rating-solid--active icon-rating-solid"
                            >
                              <polygon
                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              ></polygon></svg
                            ><svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon icon-rating-solid--active icon-rating-solid"
                            >
                              <polygon
                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              ></polygon></svg
                            ><svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon icon-rating-solid--active icon-rating-solid"
                            >
                              <polygon
                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              ></polygon></svg
                            ><svg
                              enable-background="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x="0"
                              y="0"
                              class="shopee-svg-icon icon-rating-solid--active icon-rating-solid"
                            >
                              <polygon
                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              ></polygon>
                            </svg>
                          </div>
                        </div>
                        <div class="shopee-product-rating__time">
                          2023-12-12 21:55 | Phân loại hàng: Túi hút ẩm
                        </div>
                        <div
                          style="
                            position: relative;
                            box-sizing: border-box;
                            margin: 15px 0px;
                            font-size: 14px;
                            line-height: 20px;
                            color: rgba(0, 0, 0, 0.87);
                            word-break: break-word;
                            white-space: pre-wrap;
                          "
                        >
                          mới đầu nhìn thì nghĩ bé thế nhưng mà đựng đc nhiều đồ
                          lắm các bạn ơi khá là nhiều ngăn trông cũng rất đẹp
                          với 1 đứa thích sự đơn giản như mình, chất lượng oke
                          mà giá thì rẻ nên mua nha, giao hàng cũng rất nhanh 💯
                          <div
                            style="
                              position: absolute;
                              right: 0px;
                              bottom: 0px;
                              background: linear-gradient(
                                to left,
                                rgb(255, 255, 255) 75%,
                                rgba(255, 255, 255, 0)
                              );
                              padding-left: 24px;
                            "
                          ></div>
                        </div>
                        <div class="shopee-product-rating__image-list-wrapper">
                          <div class="rating-media-list">
                            <div class="rating-media-list__container">
                              <div
                                class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive"
                              >
                                <div
                                  class="shopee-rating-media-list-image__wrapper"
                                >
                                  <div
                                    class="shopee-rating-media-list-image__place-holder"
                                  >
                                    <svg
                                      enable-background="new 0 0 15 15"
                                      viewBox="0 0 15 15"
                                      x="0"
                                      y="0"
                                      class="shopee-svg-icon icon-loading-image"
                                    >
                                      <g>
                                        <rect
                                          fill="none"
                                          height="8"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          width="10"
                                          x="1"
                                          y="4.5"
                                        ></rect>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="1"
                                          x2="11"
                                          y1="6.5"
                                          y2="6.5"
                                        ></line>
                                        <rect
                                          fill="none"
                                          height="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          width="3"
                                          x="11"
                                          y="6.5"
                                        ></rect>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="1"
                                          x2="11"
                                          y1="14.5"
                                          y2="14.5"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="6"
                                          x2="6"
                                          y1=".5"
                                          y2="3"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="3.5"
                                          x2="3.5"
                                          y1="1"
                                          y2="3"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="8.5"
                                          x2="8.5"
                                          y1="1"
                                          y2="3"
                                        ></line>
                                      </g>
                                    </svg>
                                  </div>
                                  <div
                                    class="shopee-rating-media-list-image__content"
                                    style="
                                      background-image: url('https://down-ws-sg.img.susercontent.com/vn-11110103-7r98o-lp6pm8wfy60d64');
                                    "
                                  >
                                    <div
                                      class="shopee-rating-media-list-image__content--blur"
                                    ></div>
                                  </div>
                                </div>
                                <div class="rating-media-list__video-cover">
                                  <svg
                                    width="23"
                                    height="18"
                                    viewBox="0 0 23 18"
                                    fill="none"
                                  >
                                    <g filter="url(#filter0_d)">
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z"
                                        fill="white"
                                      ></path>
                                    </g>
                                    <defs>
                                      <filter
                                        id="filter0_d"
                                        x="0"
                                        y="0"
                                        width="22.1667"
                                        height="18"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                      >
                                        <feFlood
                                          flood-opacity="0"
                                          result="BackgroundImageFix"
                                        ></feFlood>
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        ></feColorMatrix>
                                        <feOffset></feOffset>
                                        <feGaussianBlur
                                          stdDeviation="2"
                                        ></feGaussianBlur>
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
                                        ></feColorMatrix>
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropShadow"
                                        ></feBlend>
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_dropShadow"
                                          result="shape"
                                        ></feBlend>
                                      </filter>
                                    </defs></svg
                                  ><span>0:07</span>
                                </div>
                              </div>
                              <div
                                class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive"
                              >
                                <div
                                  class="shopee-rating-media-list-image__wrapper"
                                >
                                  <div
                                    class="shopee-rating-media-list-image__place-holder"
                                  >
                                    <svg
                                      enable-background="new 0 0 15 15"
                                      viewBox="0 0 15 15"
                                      x="0"
                                      y="0"
                                      class="shopee-svg-icon icon-loading-image"
                                    >
                                      <g>
                                        <rect
                                          fill="none"
                                          height="8"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          width="10"
                                          x="1"
                                          y="4.5"
                                        ></rect>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="1"
                                          x2="11"
                                          y1="6.5"
                                          y2="6.5"
                                        ></line>
                                        <rect
                                          fill="none"
                                          height="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          width="3"
                                          x="11"
                                          y="6.5"
                                        ></rect>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="1"
                                          x2="11"
                                          y1="14.5"
                                          y2="14.5"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="6"
                                          x2="6"
                                          y1=".5"
                                          y2="3"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="3.5"
                                          x2="3.5"
                                          y1="1"
                                          y2="3"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="8.5"
                                          x2="8.5"
                                          y1="1"
                                          y2="3"
                                        ></line>
                                      </g>
                                    </svg>
                                  </div>
                                  <div
                                    class="shopee-rating-media-list-image__content"
                                    style="
                                      background-image: url('https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lp6pifabsg2687_tn.webp');
                                    "
                                  >
                                    <div
                                      class="shopee-rating-media-list-image__content--blur"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive"
                              >
                                <div
                                  class="shopee-rating-media-list-image__wrapper"
                                >
                                  <div
                                    class="shopee-rating-media-list-image__place-holder"
                                  >
                                    <svg
                                      enable-background="new 0 0 15 15"
                                      viewBox="0 0 15 15"
                                      x="0"
                                      y="0"
                                      class="shopee-svg-icon icon-loading-image"
                                    >
                                      <g>
                                        <rect
                                          fill="none"
                                          height="8"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          width="10"
                                          x="1"
                                          y="4.5"
                                        ></rect>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="1"
                                          x2="11"
                                          y1="6.5"
                                          y2="6.5"
                                        ></line>
                                        <rect
                                          fill="none"
                                          height="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          width="3"
                                          x="11"
                                          y="6.5"
                                        ></rect>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="1"
                                          x2="11"
                                          y1="14.5"
                                          y2="14.5"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="6"
                                          x2="6"
                                          y1=".5"
                                          y2="3"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="3.5"
                                          x2="3.5"
                                          y1="1"
                                          y2="3"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="8.5"
                                          x2="8.5"
                                          y1="1"
                                          y2="3"
                                        ></line>
                                      </g>
                                    </svg>
                                  </div>
                                  <div
                                    class="shopee-rating-media-list-image__content"
                                    style="
                                      background-image: url('https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lp6pifac7wb2fd_tn.webp');
                                    "
                                  >
                                    <div
                                      class="shopee-rating-media-list-image__content--blur"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive"
                              >
                                <div
                                  class="shopee-rating-media-list-image__wrapper"
                                >
                                  <div
                                    class="shopee-rating-media-list-image__place-holder"
                                  >
                                    <svg
                                      enable-background="new 0 0 15 15"
                                      viewBox="0 0 15 15"
                                      x="0"
                                      y="0"
                                      class="shopee-svg-icon icon-loading-image"
                                    >
                                      <g>
                                        <rect
                                          fill="none"
                                          height="8"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          width="10"
                                          x="1"
                                          y="4.5"
                                        ></rect>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="1"
                                          x2="11"
                                          y1="6.5"
                                          y2="6.5"
                                        ></line>
                                        <rect
                                          fill="none"
                                          height="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          width="3"
                                          x="11"
                                          y="6.5"
                                        ></rect>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="1"
                                          x2="11"
                                          y1="14.5"
                                          y2="14.5"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="6"
                                          x2="6"
                                          y1=".5"
                                          y2="3"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="3.5"
                                          x2="3.5"
                                          y1="1"
                                          y2="3"
                                        ></line>
                                        <line
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          x1="8.5"
                                          x2="8.5"
                                          y1="1"
                                          y2="3"
                                        ></line>
                                      </g>
                                    </svg>
                                  </div>
                                  <div
                                    class="shopee-rating-media-list-image__content"
                                    style="
                                      background-image: url('https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lp6pifabsfh71c_tn.webp');
                                    "
                                  >
                                    <div
                                      class="shopee-rating-media-list-image__content--blur"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="rating-media-list__zoomed-image">
                              <div
                                class="rating-media-list-image-carousel"
                                style="transition: all 0ms ease 0s"
                              >
                                <div
                                  class="rating-media-list-image-carousel__item-list-wrapper"
                                >
                                  <ul
                                    class="rating-media-list-image-carousel__item-list"
                                    style="
                                      margin-top: 0px;
                                      transform: translateX(0px);
                                      transition: all 0ms ease 0s;
                                    "
                                  >
                                    <li
                                      class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid"
                                      style="padding: 0px 0.625rem"
                                    >
                                      <div class="yc2MHR">
                                        <video
                                          src="https://down-cvs-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke15-lp6pm6dpmlhq91.default.mp4"
                                          controls=""
                                          class="k9wD+V rating-media-list__zoomed-video-item"
                                          controlslist="nodownload"
                                        ></video>
                                      </div>
                                    </li>
                                    <li
                                      class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid"
                                      style="padding: 0px 0.625rem"
                                    >
                                      <img
                                        src="https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lp6pifabsg2687.webp"
                                        alt="rating"
                                        class="rating-media-list__zoomed-image-item"
                                      />
                                    </li>
                                    <li
                                      class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid"
                                      style="padding: 0px 0.625rem"
                                    >
                                      <img
                                        src="https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lp6pifac7wb2fd.webp"
                                        alt="rating"
                                        class="rating-media-list__zoomed-image-item"
                                      />
                                    </li>
                                    <li
                                      class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid"
                                      style="padding: 0px 0.625rem"
                                    >
                                      <img
                                        src="https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lp6pifabsfh71c.webp"
                                        alt="rating"
                                        class="rating-media-list__zoomed-image-item"
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  class="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--prev rating-media-list-carousel-arrow--hint rating-media-list-carousel-arrow--hidden"
                                  role="button"
                                  tabindex="0"
                                  style="
                                    opacity: 1;
                                    visibility: hidden;
                                    transform: translateX(calc(-50% + 0px));
                                  "
                                >
                                  <svg
                                    enable-background="new 0 0 13 20"
                                    viewBox="0 0 13 20"
                                    x="0"
                                    y="0"
                                    class="shopee-svg-icon icon-arrow-left-bold"
                                  >
                                    <polygon
                                      points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"
                                    ></polygon>
                                  </svg>
                                </div>
                                <div
                                  class="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--next rating-media-list-carousel-arrow--hint"
                                  role="button"
                                  tabindex="0"
                                  style="
                                    opacity: 1;
                                    visibility: visible;
                                    transform: translateX(calc(50% + 0px));
                                  "
                                >
                                  <svg
                                    enable-background="new 0 0 13 21"
                                    viewBox="0 0 13 21"
                                    x="0"
                                    y="0"
                                    class="shopee-svg-icon icon-arrow-right-bold"
                                  >
                                    <polygon
                                      points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"
                                    ></polygon>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="shopee-product-rating__actions"
                          style="justify-content: space-between"
                        >
                          <div style="display: flex">
                            <div class="shopee-product-rating__like-button">
                              <svg
                                width="14px"
                                height="13px"
                                viewBox="0 0 14 13"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <defs></defs>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Product-Ratings-Working"
                                    transform="translate(-245.000000, -855.000000)"
                                    fill-rule="nonzero"
                                  >
                                    <g
                                      transform="translate(155.000000, 92.000000)"
                                    >
                                      <g
                                        transform="translate(40.000000, 184.000000)"
                                      >
                                        <g
                                          transform="translate(0.000000, 326.000000)"
                                        >
                                          <g
                                            transform="translate(50.000000, 253.000000)"
                                          >
                                            <g>
                                              <path
                                                d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"
                                              ></path>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="shopee-product-rating__like-count">
                              hữu ích?
                            </div>
                          </div>
                          <div style="display: flex">
                            <div
                              class="shopee-product-rating__report-menu-button"
                            >
                              <div class="stardust-dropdown">
                                <div class="stardust-dropdown__item-header">
                                  <div>
                                    <svg
                                      width="4px"
                                      height="16px"
                                      viewBox="0 0 4 16"
                                      version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <defs></defs>
                                      <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill-rule="evenodd"
                                      >
                                        <g
                                          transform="translate(-1301.000000, -550.000000)"
                                          fill="#CCCCCC"
                                        >
                                          <g
                                            transform="translate(155.000000, 92.000000)"
                                          >
                                            <g
                                              transform="translate(40.000000, 184.000000)"
                                            >
                                              <g
                                                transform="translate(0.000000, 161.000000)"
                                              >
                                                <g>
                                                  <g
                                                    transform="translate(50.000000, 2.000000)"
                                                  >
                                                    <path
                                                      d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111"
                                                    ></path>
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
                                  <div
                                    class="shopee-product-rating__report-menu-dropdown"
                                  >
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
                  <div
                    class="shopee-page-controller product-ratings__page-controller"
                  >
                    <button class="shopee-icon-button shopee-icon-button--left">
                      <svg
                        enable-background="new 0 0 11 11"
                        viewBox="0 0 11 11"
                        x="0"
                        y="0"
                        class="shopee-svg-icon icon-arrow-left"
                      >
                        <g>
                          <path
                            d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z"
                          ></path>
                        </g>
                      </svg></button
                    ><button
                      class="shopee-button-solid shopee-button-solid--primary"
                    >
                      1</button
                    ><button class="shopee-button-no-outline">2</button
                    ><button class="shopee-button-no-outline">3</button
                    ><button class="shopee-button-no-outline">4</button
                    ><button class="shopee-button-no-outline">5</button
                    ><button
                      class="shopee-button-no-outline shopee-button-no-outline--non-click"
                    >
                      ...</button
                    ><button
                      class="shopee-icon-button shopee-icon-button--right"
                    >
                      <svg
                        enable-background="new 0 0 11 11"
                        viewBox="0 0 11 11"
                        x="0"
                        y="0"
                        class="shopee-svg-icon icon-arrow-right"
                      >
                        <path
                          d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"
                        ></path>
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
</style>
