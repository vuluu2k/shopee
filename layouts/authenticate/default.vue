<template>
  <div>
    <buyer-header />
    <div class="bg-[#ee4d2d] flex justify-center items-center">
      <div
        class="content bg-background-authenticate bg-contain bg-no-repeat min-h-[600px] w-[1040px] h-[600px] bg-center flex justify-end items-center"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
