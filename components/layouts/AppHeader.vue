<script setup>
import ShopeeIcon from '@/assets/icon/shopee_icon.svg?component';
</script>

<template>
  <header class="shopee-top shopee-top--sticky">
    <div class="navbar-wrapper container-wrapper">
      <div class="container navbar">
        <div class="flex items-center">
          <a href="//banhang.shopee.vn" target="_blank" rel="noopener noreferrer"
            class="navbar-item navbar-item-vertical">Kênh Người Bán</a>
          <a href="/seller/signup" class="flex navbar-item navbar-item-vertical" title="Trở thành Người bán Shopee">Trở
            thành Người bán Shopee</a>
          <div class="shopee-drawer navbar-item-vertical" id="pc-drawer-id-2">
            <a class="navbar-item" href="/web/" target="_blank" rel="noopener noreferrer" id="temporaryId">Tải ứng
              dụng</a>
          </div>
          <div class="flex navbar-item navbar-item-vertical iExH-m">
            Kết nối
          </div>
          <div class="flex navbar-item Bh4XFF">
            <a class="FwW7qD header-navbar-background header-navbar-facebook-png" href="https://facebook.com/ShopeeVN"
              target="_blank" rel="noopener noreferrer" title="Kết nối Facebook"></a><a
              href="https://instagram.com/Shopee_VN" target="_blank" rel="noopener noreferrer"
              class="B2Z752 header-navbar-background header-navbar-instagram-png" title="Kết nối Instagram!"></a>
          </div>
        </div>
        <div class="navbar-spacer"></div>
        <ul class="navbar-links">
          <li class="navbar__link--notification navbar__link navbar__link--hoverable navbar__link--tappable">
            <div class="stardust-popover" id="stardust-popover1" tabindex="0">
              <div role="button" class="stardust-popover__target">
                <a class="W-2aSq _6qcVOX" tabindex="-1" href="/user/notifications/order"><svg viewBox="3 2.5 14 14" x="0"
                    y="0" class="shopee-svg-icon icon-notification-2">
                    <path
                      d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z">
                    </path>
                    <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z"></path>
                  </svg><span class="i4da+9">Thông báo</span></a>
              </div>
            </div>
          </li>
          <a class="navbar__link navbar__link--tappable navbar__link--hoverable navbar__link--help"
            href="https://help.shopee.vn/vn/s" target="_blank" rel="noopener noreferrer" tabindex="0">
            <div class="navbar__help-center-icon">
              <svg height="16" viewBox="0 0 16 16" width="16" class="shopee-svg-icon icon-help-center">
                <g fill="none" fill-rule="evenodd" transform="translate(1)">
                  <circle cx="7" cy="8" r="7" stroke="currentColor"></circle>
                  <path fill="currentColor"
                    d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z">
                  </path>
                </g>
              </svg>
            </div>
            <span class="navbar__link-text navbar__link--tappable navbar__link--hoverable">Hỗ Trợ</span>
          </a>
          <li class="navbar__link--notification navbar__link navbar__link--hoverable navbar__link--tappable">
            <div class="stardust-popover" id="stardust-popover0" tabindex="0">
              <div role="button" class="stardust-popover__target">
                <div class="soQgfE">
                  <div class="wXMVzP">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path
                        d="M5.33464 8.00004C5.33464 11.6819 6.52854 14.6667 8.0013 14.6667C9.47406 14.6667 10.668 11.6819 10.668 8.00004C10.668 4.31814 9.47406 1.33337 8.0013 1.33337C6.52854 1.33337 5.33464 4.31814 5.33464 8.00004Z"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.33398 8H14.6673" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      </path>
                    </svg>
                  </div>
                  <span class="_5PZYKa">Tiếng Việt</span><svg viewBox="0 0 12 12" fill="none" width="12" height="12"
                    color="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
          </li>
          <a class="navbar__link navbar__link--account navbar__link--signup navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium navbar__link-text--normal-case"
            href="/buyer/signup?next=https%3A%2F%2Fshopee.vn%2F">Đăng Ký</a>
          <div class="navbar__link-separator"></div>
          <a class="navbar__link navbar__link--account navbar__link--login navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium navbar__link-text--normal-case"
            href="/buyer/login?next=https%3A%2F%2Fshopee.vn%2F">Đăng Nhập</a>
        </ul>
      </div>
    </div>
    <div class="container-wrapper header-with-search-wrapper">
      <div class="container header-with-search">
        <a class="header-with-search__logo-section" href="/">
          <div class="header-with-search__logo-wrapper">
            <shopee-icon />
          </div>
        </a>
        <div class="header-with-search__search-section">
          <form role="search" autocomplete="off" class="shopee-searchbar">
            <div class="shopee-searchbar__main">
              <div class="shopee-searchbar-input">
                <input aria-label="Shopee bao ship 0Đ - Đăng ký ngay!" class="shopee-searchbar-input__input"
                  maxlength="128" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" autocomplete="off"
                  aria-autocomplete="list" aria-controls="shopee-searchbar-listbox" aria-expanded="false" role="combobox"
                  value="" />
              </div>
            </div>
            <button type="button" class="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button">
              <svg height="19" viewBox="0 0 19 19" width="19" class="shopee-svg-icon">
                <g fill-rule="evenodd" stroke="none" stroke-width="1">
                  <g transform="translate(-1016 -32)">
                    <g>
                      <g transform="translate(405 21)">
                        <g transform="translate(611 11)">
                          <path
                            d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z">
                          </path>
                          <path
                            d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z">
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </form>
          <div class="izQVw1">
            <div class="IA7yZn">
              <a class="_28pwjb" href="/search?keyword=%C3%A1o%200%C4%91">Áo 0đ</a><a class="_28pwjb"
                href="/search?keyword=d%C3%A9p%200%C4%91">Dép 0đ</a><a class="_28pwjb"
                href="/search?keyword=%C3%A1o%20kho%C3%A1c%201k%20freeship">Áo Khoác 1k Freeship</a><a class="_28pwjb"
                href="/search?keyword=s%C4%83n%20sale%20iphone%2014%20pro%20max%201k">Săn Sale iPhone 14 Pro Max 1k</a><a
                class="_28pwjb" href="/search?keyword=pot%20%C4%91i%E1%BB%87n%20t%E1%BB%AD%20h%C3%BAt">Pot Điện Tử
                Hút</a><a class="_28pwjb" href="/search?keyword=v%E1%BB%A3t%20c%E1%BA%A7u%20l%C3%B4ng">Vợt Cầu Lông</a><a
                class="_28pwjb"
                href="/search?keyword=gi%C3%A0y%20%C4%91%C3%A1%20b%C3%B3ng%20gi%C3%A1%20r%E1%BA%BB%201k">Giày Đá Bóng Giá
                Rẻ 1k</a><a class="_28pwjb" href="/search?keyword=d%C3%A9p%200%20%C4%91%E1%BB%93ng">Dép 0 Đồng</a><a
                class="_28pwjb" href="/search?keyword=%C4%91%C6%A1n%200k">Đơn 0k</a><a class="_28pwjb"
                href="/search?keyword=h%C3%A0ng%20bom%20gi%C3%A1%20r%E1%BA%BB%201k">Hàng Bom Giá Rẻ 1k</a><a
                class="_28pwjb" href="/search?keyword=s%C3%BAng%20m1887">Súng M1887</a><a class="_28pwjb"
                href="/search?keyword=0%C4%91">0đ</a><a class="_28pwjb"
                href="/search?keyword=s%C4%83n%20%C4%91%E1%BB%93%200%C4%91">Săn Đồ 0đ</a><a class="_28pwjb"
                href="/search?keyword=th%C6%B0%E1%BB%9Bc%20k%E1%BA%BB%20free%20fire">Thước Kẻ Free Fire</a><a
                class="_28pwjb" href="/search?keyword=h%C3%A0ng%20boom%201k">Hàng Boom 1k</a><a class="_28pwjb"
                href="/search?keyword=g%E1%BA%A5u%20b%C3%B4ng%201k">Gấu Bông 1k</a><a class="_28pwjb"
                href="/search?keyword=set%20%C4%91%E1%BB%93%20n%E1%BB%AF%201k%20freeship">Set Đồ Nữ 1k Freeship</a><a
                class="_28pwjb" href="/search?keyword=h%C3%A0ng%200%20%C4%91%E1%BB%93ng">Hàng 0 Đồng</a><a class="_28pwjb"
                href="/search?keyword=acc%20fruit">Acc Fruit</a><a class="_28pwjb"
                href="/search?keyword=acc%20free%20free">Acc Free Free</a><a class="_28pwjb"
                href="/search?keyword=%C3%A1o%20kho%C3%A1c%201k">Áo Khoác 1k</a><a class="_28pwjb"
                href="/search?keyword=iphone%200%20%C4%91%E1%BB%93ng">iPhone 0 Đồng</a><a class="_28pwjb"
                href="/search?keyword=h%E1%BB%8Dc%20t%E1%BA%ADp">Học Tập</a><a class="_28pwjb"
                href="/search?keyword=set%20%C4%91%E1%BB%93">Set Đồ</a><a class="_28pwjb"
                href="/search?keyword=ip%2011%201k">IP 11 1k</a><a class="_28pwjb"
                href="/search?keyword=s%C4%83n%20sale%201k%20iphone">Săn Sale 1k iPhone</a><a class="_28pwjb"
                href="/search?keyword=0k">0k</a><a class="_28pwjb" href="/search?keyword=v%C3%A1y%201k">Váy 1k</a><a
                class="_28pwjb" href="/search?keyword=%C3%A1o%200%20%C4%91%E1%BB%93ng">Áo 0 Đồng</a><a class="_28pwjb"
                href="/search?keyword=son">Son</a>
            </div>
          </div>
        </div>
        <div class="header-with-search__cart-wrapper">
          <div class="stardust-popover" id="cart_drawer_target_id">
            <div role="button" class="stardust-popover__target">
              <div class="cart-drawer-container">
                <a class="cart-drawer flex v-center" id="cart_drawer_target_id" href="/cart"><svg viewBox="0 0 26.6 25.6"
                    class="shopee-svg-icon navbar__link-icon icon-shopping-cart-2">
                    <title>Shopping Cart Icon</title>
                    <polyline fill="none" points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1" stroke-linecap="round"
                      stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"></polyline>
                    <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
                    <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
                  </svg><span class="a11y-hidden">Shopping Cart number of items in cart 0</span></a>
              </div>
            </div>
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

.shopee-top--sticky {
  // position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform: translateZ(0);
  z-index: 100;
}

.container-wrapper {
  width: inherit;
}

.navbar-wrapper {
  height: 3.4rem;
  z-index: 400;
  background: transparent;
  position: relative;

  .navbar {
    color: #fff;
    display: flex;
    align-items: center;

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

    .navbar-spacer {
      flex: 1;
    }

    .navbar-links {
      display: flex;
      align-items: center;
    }
  }
}

.header-with-search-wrapper {
  min-width: inherit;
  background: transparent;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  z-index: 300;
  color: #fff;

  .header-with-search {
    display: flex;
  }

  .header-with-search__logo-section {
    position: relative;
    top: -0.1875rem;
    padding-right: 2.5rem;
  }

  .header-with-search__logo-wrapper {
    padding: 2px;
    margin: -2px;
    border-radius: 2px;
  }

  .header-with-search__shopee-logo {
    width: 162px;
    height: 50px;
  }
}
</style>
