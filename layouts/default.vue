<template>
  <div style="display: contents">
    <AppHeader />
    <div class="content">
      <div class="content-inner">
        <slot />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.content {
  transition: margin-top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-overflow-scrolling: touch;

  .content-inner {
    min-height: 100vh;
  }
}
</style>
