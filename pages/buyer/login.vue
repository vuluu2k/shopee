<template>
  <NuxtLayout>
    <div
      class="h-full w-screen lg:w-[400px] lg:h-[482px] bg-[#fff] lg:shadow-form lg:rounded"
    >
      <div
        class="w-full min-h-[80px] flex justify-center items-center p-[30px]"
      >
        <p class="text-[2rem] text-[#222]">Đăng nhập</p>
      </div>
      <div class="px-[30px] pb-[30px] overflow-hidden">
        <form action="">
          <div class="mb-[10px]">
            <div class="styles-input-wrapper">
              <input
                type="text"
                name="info-user"
                class="styles-input"
                placeholder="Email/Tên đăng nhập"
              />
            </div>
            <div class="error error-message"></div>
          </div>
          <div class="mb-[10px]">
            <div class="styles-input-wrapper">
              <input
                :type="isTypePassword ? 'password' : 'text'"
                name="password"
                class="styles-input"
                placeholder="Mật khẩu"
              />
              <button type="button" @click.prevent="changTypeInput">
                <Icon
                  v-if="isTypePassword"
                  name="streamline:interface-edit-view-eye-eyeball-open-view"
                  color="black"
                  size="16"
                />
                <Icon
                  v-else
                  name="streamline:interface-edit-view-off-disable-eye-eyeball-hide-off-view"
                  color="black"
                  size="16"
                />
              </button>
            </div>
            <div class="error error-message"></div>
          </div>
          <button
            type="submit"
            class="opacity-70 w-full text-white bg-[#ee4d2d] shadow-button p-[10px] rounded-sm flex justify-center items-center h-[40px] min-w-[140px]"
          >
            ĐĂNG NHẬP
          </button>
        </form>
        <div class="my-[10px] flex justify-between">
          <NuxtLink to="/" class="text-[12px] text-[#05a]"
            >Quên mật khẩu</NuxtLink
          >
          <NuxtLink to="/" class="text-[12px] text-[#05a]"
            >Đăng nhập với SMS</NuxtLink
          >
        </div>
        <div>
          <div class="pb-[14px] flex items-center uppercase">
            <div class="h-[1px] w-full bg-[#dbdbdb] flex-[1]"></div>
            <span class="text-[#ccc] px-[16px] text-[12px]">hoặc</span>
            <div class="h-[1px] w-full bg-[#dbdbdb] flex-[1]"></div>
          </div>
          <div class="mx-[-5px] flex justify-between flex-wrap">
            <button
              class="flex-[1] m-[5px] pr-[8px] border border-solid border-[rgba(0,0,0,.26)] flex justify-center items-center cursor-pointer rounded-[2px] text-[14px] h-[40px] w-full px-2 gap-3"
            >
              <Icon name="streamline:facebook-1-solid" size="20"></Icon>
              <div>Facebook</div>
            </button>
            <button
              class="flex-[1] m-[5px] pr-[8px] border border-solid border-[rgba(0,0,0,.26)] flex justify-center items-center cursor-pointer rounded-[2px] text-[14px] h-[40px] w-full px-2 gap-3"
            >
              <Icon name="streamline:google-solid" size="20"></Icon>
              <div>Google</div>
            </button>
          </div>
        </div>
      </div>
      <div class="mb-[30px] flex justify-center items-center text-[14px] gap-1">
        <p class="text-[rgba(0,0,0,0.26)]">Bạn mới biết đến Shopee?</p>
        <NuxtLink to="/buyer/register" class="text-[#ee4d2d] cursor-pointer"
          >Đăng kí</NuxtLink
        >
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'authenticate-default',
});
const isTypePassword = ref(true);
const changTypeInput = () => {
  isTypePassword.value = !isTypePassword.value;
};
</script>

<style lang="scss" scoped>
input[type='password']::-ms-reveal {
  display: none !important;
  width: 0;
  height: 0;
}
</style>
