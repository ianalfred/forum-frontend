<template>
  <div>
    <header
      class="flex content-center bg-white dark:bg-gray-800 py-3 px-4 md:px-6 lg:px-8 border-b-2 h-16 border-gray-100 dark:border-gray-800 shadow-md"
    >
      <div class="flex md:w-1/2">
        <div class="lg:w-48">
          <router-link :to="{ name: 'Home' }">
            <ApplicationLogo />
          </router-link>
        </div>
        <div
          class="relative ml-3 md:ml-0 flex-1 flex items-center max-w-xl focus-within:text-blue-800"
        >
          <div class="absolute inset-y-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-blue-800 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            class="w-full pl-8 py-1 text-md text-gray-600 dark:text-gray-200 font-medium placeholder-gray-500 bg-gray-100 dark:bg-gray-700 border-0 border-gray-200 focus:border-blue-800 rounded-lg focus:outline-none"
            type="text"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
      </div>
      <div class="flex justify-end w-1/2">
        <div class="hidden md:flex my-2 mx-6">
          <router-link to="/">
            <NavItem>Posts</NavItem>
          </router-link>
        </div>
        <ThemeToggler />
        <div class="hidden md:flex ml-3">
          <div v-if="user" class="text-right">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="inline-flex items-center px-3 pl-1 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:text-gray-700 focus:outline-none transition"
                >
                  <img
                    v-if="photo"
                    class="h-8 w-8 rounded-full object-cover"
                    src="{{ photo }}"
                    alt="P"
                  />
                  <NoImage
                    v-else
                    :name="'John Doe'"
                    class="inline-flex items-center w-8 h-8"
                  />
                  <div class="inline-flex ml-2">
                    <div class="hidden md:block">John Doe</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-2 -mr-0.5 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 z-20 w-40 mt-2 origin-top-right bg-white dark:bg-gray-700 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div v-show="user" class="px-1 py-1">
                    <MenuItem>
                      <button
                        @click="logout"
                        class="group flex rounded-md text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 items-center w-full px-2 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        Logout
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div v-else class="flex text-right">
            <button
              type="submit"
              class="flex items-center px-2 py-1 bg-blue-700 hover:bg-blue-800 border border-transparent rounded-lg font-semibold text-md text-gray-100 hover:text-white tracking-wide shadow-lg cursor-pointer focus:outline-none focus:border-blue-900 focus:shadow-outline-blue transition ease-in-out duration-150"
            >
              Register
            </button>
            <button
              class="ml-3 flex items-center px-2 py-1 bg-gray-500 hover:bg-gray-600 border border-transparent rounded-lg font-semibold text-md text-gray-100 hover:text-white tracking-wide shadow-lg cursor-pointer focus:outline-none focus:border-blue-900 focus:shadow-outline-blue transition ease-in-out duration-150"
            >
              Login
            </button>
          </div>
        </div>
        <Menu as="div" class="relative inline-block text-left">
          <MenuButton
            class="inline-flex items-center px-3 pl-1 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:text-gray-700 focus:outline-none transition"
          >
            <button
              class="md:hidden flex-shrink-0 my-1 text-blue-700 hover:text-blue-800 dark:text-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
          </MenuButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 z-20 w-40 mt-2 origin-top-right bg-white dark:bg-gray-700 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem>
                  <router-link to="/">
                    <button
                      class="group flex rounded-md text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 items-center w-full px-2 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Posts
                    </button></router-link
                  >
                </MenuItem>
                <MenuItem v-show="user">
                  <button
                    @click="logout"
                    class="group flex rounded-md text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 items-center w-full px-2 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </button>
                </MenuItem>
                <MenuItem v-show="!user">
                  <router-link
                    :to="{ name: 'Register' }"
                    class="group flex rounded-md text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 items-center w-full px-2 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    Register
                  </router-link>
                </MenuItem>
                <MenuItem v-show="!user">
                  <router-link
                    :to="{ name: 'Login' }"
                    class="group flex rounded-md text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 items-center w-full px-2 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    Login
                  </router-link>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </header>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import ApplicationLogo from "@/components/ApplicationLogo.vue";
import NavItem from "@/components/NavItem.vue";
import NoImage from "@/components/NoImage.vue";
import ThemeToggler from "@/components/ThemeToggler.vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ApplicationLogo,
    NavItem,
    NoImage,
    ThemeToggler,
  },
  data() {
    return {
      photo: null,
    };
  },
};
</script>
