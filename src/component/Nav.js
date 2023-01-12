import React from "react";

export const Nav = () => {
  return (
    <div>
      <nav class="bg-light navbar navbar-expand-md navbar-light">
        <div class="container">
          <div class="logo">
            {" "}
            <a href="https://garantiwebtasarim.com/wordpress/wood/">
              <img
                src="https://garantiwebtasarim.com/wordpress/wood/wp-content/uploads/2022/08/wood-logo.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <div class="site-menu">
            <div class="btn-6">
              <div
                id="bs-example-navbar-collapse-2"
                class="collapse navbar-collapse"
              >
                <ul
                  id="menu-main-menu"
                  class="nav navbar-nav"
                  itemscope=""
                  itemtype="http://www.schema.org/SiteNavigationElement"
                >
                  <li
                    id="menu-item-322"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item active menu-item-322 nav-item"
                    style="opacity: 1;"
                  >
                    <a
                      itemprop="url"
                      href="https://garantiwebtasarim.com/wordpress/wood/"
                      class="nav-link"
                      aria-current="page"
                    >
                      <span itemprop="name">Home</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-329"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-329 nav-item"
                    style="opacity: 1;"
                  >
                    <a
                      itemprop="url"
                      href="https://garantiwebtasarim.com/wordpress/wood/about-us/"
                      class="nav-link"
                    >
                      <span itemprop="name">About Us</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-980"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-980 nav-item"
                    style="opacity: 1;"
                  >
                    <a
                      href="#"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      class="dropdown-toggle nav-link"
                      id="menu-item-dropdown-980"
                    >
                      <span itemprop="name">Services</span>
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="menu-item-dropdown-980"
                    >
                      <li
                        id="menu-item-2072"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2072 nav-item"
                        style="opacity: 1;"
                      >
                        <a
                          itemprop="url"
                          href="https://garantiwebtasarim.com/wordpress/wood/flooring/"
                          class="dropdown-item"
                        >
                          <span itemprop="name">Flooring</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-2071"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2071 nav-item"
                        style="opacity: 1;"
                      >
                        <a
                          itemprop="url"
                          href="https://garantiwebtasarim.com/wordpress/wood/floor-raising/"
                          class="dropdown-item"
                        >
                          <span itemprop="name">Floor Raising</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-2070"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2070 nav-item"
                        style="opacity: 1;"
                      >
                        <a
                          itemprop="url"
                          href="https://garantiwebtasarim.com/wordpress/wood/carpet-flooring/"
                          class="dropdown-item"
                        >
                          <span itemprop="name">Carpet Flooring</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-2069"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2069 nav-item"
                        style="opacity: 1;"
                      >
                        <a
                          itemprop="url"
                          href="https://garantiwebtasarim.com/wordpress/wood/pvc-flooring/"
                          class="dropdown-item"
                        >
                          <span itemprop="name">PVC Flooring</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-2068"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2068 nav-item"
                        style="opacity: 1;"
                      >
                        <a
                          itemprop="url"
                          href="https://garantiwebtasarim.com/wordpress/wood/wood-flooring/"
                          class="dropdown-item"
                        >
                          <span itemprop="name">Wood Flooring</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-364"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-364 nav-item"
                        style="opacity: 1;"
                      >
                        <a
                          itemprop="url"
                          href="https://garantiwebtasarim.com/wordpress/wood/all-services/"
                          class="dropdown-item"
                        >
                          <span itemprop="name">All Services</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-2491"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2491 nav-item"
                    style="opacity: 1;"
                  >
                    <a
                      itemprop="url"
                      href="https://garantiwebtasarim.com/wordpress/wood/packages/"
                      class="nav-link"
                    >
                      <span itemprop="name">Packages</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-354"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-354 nav-item"
                    style="opacity: 1;"
                  >
                    <a
                      itemprop="url"
                      href="https://garantiwebtasarim.com/wordpress/wood/blog/"
                      class="nav-link"
                    >
                      <span itemprop="name">Blog</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-353"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-353 nav-item"
                    style="opacity: 1;"
                  >
                    <a
                      itemprop="url"
                      href="https://garantiwebtasarim.com/wordpress/wood/contact/"
                      class="nav-link"
                    >
                      <span itemprop="name">Contact</span>
                    </a>
                  </li>
                </ul>
              </div>{" "}
            </div>
          </div> */}
          <div class="hamburger-menu">
            {" "}
            <span></span> <span></span> <span></span>{" "}
          </div>

          <div class="navbar-button">
            {" "}
            <div class="telh">
              <i class="flaticon-call iconp"></i>&nbsp;&nbsp;&nbsp;+1 (234) 567
              89 10
            </div>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
};
