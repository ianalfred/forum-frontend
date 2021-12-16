<template>
  <div class="relative antialiased bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="sticky top-0 z-20">
      <Navbar />
    </div>
    <div class="py-6 md:py-8 px-4 md:px-6 lg:px-8">
      <div class="md:grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
        <div class="col-span-1">
          <div class="md:ml-4 mt-4 md:mt-0">
            <div
              class="w-full px-3 py-5 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <div
                class="text-gray-800 dark:text-gray-100 text-lg md:text-xl font-bold"
              >
                Top Contributors
              </div>
              <div
                class="mt-2 text-gray-600 dark:text-gray-400 font-medium text-sm lg:w-60"
              >
                People who have actively participated in discussions.
              </div>
              <div
                class="mt-3 text-gray-600 dark:text-gray-400 font-medium text-sm w-60"
              >
                <div class="mb-2 flex items-center">
                  <img
                    v-if="photo"
                    class="h-9 w-9 rounded-full object-cover"
                    src="{{ photo }}"
                    alt="P"
                  />
                  <NoImage
                    v-else
                    :name="'John Doe'"
                    class="inline-flex items-center w-9 h-9"
                  />
                  <div
                    class="ml-2 py-2 text-gray-800 dark:text-gray-300 font-semibold text-sm"
                  >
                    John Doe
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-2 h-5 w-5 text-gray-600 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                  <div
                    class="py-2 text-gray-600 dark:text-gray-400 font-medium text-sm"
                  >
                    12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar.vue";
import NoImage from "@/components/NoImage.vue";

export default {
  components: {
    Navbar,
    NoImage,
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
};
</script>
