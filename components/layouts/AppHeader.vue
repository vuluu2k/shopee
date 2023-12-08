<script setup></script>

<template>
  <header class="shopee-top container-wrapper">
    <div class="navbar-wrapper container-wrapper">
      <div class="container navbar">
        <div class="flex items-center">
          <a
            href="//banhang.shopee.vn"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar-item navbar-item-vertical"
            >Kênh Người Bán</a
          >
          <a
            href="/seller/signup"
            class="flex navbar-item navbar-item-vertical"
            title="Trở thành Người bán Shopee"
            >Trở thành Người bán Shopee</a
          >
          <div class="shopee-drawer navbar-item-vertical" id="pc-drawer-id-2">
            <a
              class="navbar-item"
              href="/web/"
              target="_blank"
              rel="noopener noreferrer"
              id="temporaryId"
              >Tải ứng dụng</a
            >
          </div>
          <div class="flex navbar-item navbar-item-vertical iExH-m">
            Kết nối
          </div>
          <div class="flex navbar-item Bh4XFF">
            <a
              class="FwW7qD header-navbar-background header-navbar-facebook-png"
              href="https://facebook.com/ShopeeVN"
              target="_blank"
              rel="noopener noreferrer"
              title="Kết nối Facebook"
            ></a
            ><a
              href="https://instagram.com/Shopee_VN"
              target="_blank"
              rel="noopener noreferrer"
              class="B2Z752 header-navbar-background header-navbar-instagram-png"
              title="Kết nối Instagram!"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scope>
.shopee-top {
  background: #f53d2d;
  background: linear-gradient(-180deg, #f53d2d, #f63);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.navbar-wrapper {
  height: 3.4rem;
  z-index: 400;
  background: transparent;
  position: relative;

  .navbar {
    color: #fff;

    .navbar-item {
      color: #fff;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: 300;
      padding: 0.25rem;
      position: relative;
      overflow: visible;
      outline: 0;
    }

    .navbar-item-vertical {
      &:not(:first-child) {
        margin-left: 1rem;
      }
      &:not(:first-child)::after {
        content: '';
        height: 1.5rem;
        width: 0;
        border-left: 1px solid hsla(0, 0%, 100%, 0.22);
        border-right: 1px solid hsla(0, 0%, 100%, 0.22);
        position: absolute;
        left: -6px;
        top: calc(50% - 7px);
      }
    }
  }
}
</style>
