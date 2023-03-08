import React from "react";
import sc_logo from "../../assets/small/logo/sc_logo-nobg.png";

function Nav() {
  return (
    <header className="m-0 header-image lg:h-80 md:h-48 sm:h-32 overflow-hidden">
      <nav
        className="inline-flex w-full py-2 md:flex-wrap"
        data-te-navbar-ref
      >
        <div className="inline-flex flex-wrap px-6">
          <div className="inline-flex ">
            <button
              className="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentX"
              aria-controls="navbarSupportedContentX"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div
            className="!visible hidden grow basis-[100%] lg:!inline-flex lg:basis-auto justify-between align-middle"
            id="navbarSupportedContentX"
            data-te-collapse-item
          >
            <ul
              className="mr-auto inline-flex flex-col lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out font-pirata text-xl text-black hover:text-goldenrod focus:text-tea-green disabled:text-black/30 dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Home
                </a>
              </li>
              <li data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out font-pirata text-xl hover:text-goldenrod focus:text-tea-green disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  About Us
                </a>
              </li>
              <li data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out font-pirata text-xl hover:text-goldenrod focus:text-tea-green disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Menu
                </a>
              </li>
              <li data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out font-pirata text-xl hover:text-goldenrod focus:text-tea-green disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Locations
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="inline-block items-center">
          <a
            className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
            href="#!"
            data-te-nav-link-ref
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              src={sc_logo}
              className="md:h-11 md:w-11 sm:h-7 sm:w-7 justify-end"
              alt="logo"
            ></img>
          </a>
        </div>
      </nav>

      <div className="relative inline-flex  align-middle">
         <h1 className="font-zen font-medium text-9xl tracking-widest align-middle">
            
        </h1>
      </div>
    </header>
  );
}

export default Nav;
