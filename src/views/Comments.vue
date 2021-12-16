<template>
  <div>
    <div
      class="w-full px-2 md:px-4 py-4 md:py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <div
        class="text-gray-800 dark:text-gray-100 text-md md:text-xl font-semibold"
      >
        {{ post.data.title }}
      </div>
      <div class="mt-2 flex justify-between items-center">
        <div
          @click="this.$router.go(-1)"
          class="mt-2 flex items-center text-blue-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-gray-100 font-semibold text-sm cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          Back To Posts
        </div>
        <Menu as="div" class="relative inline-block text-left">
          <MenuButton
            class="ml-4 flex items-center px-2 py-1 bg-blue-200 dark:bg-blue-400 text-sm font-semibold text-blue-600 dark:text-blue-700 rounded-xl cursor-pointer transform hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-600 dark:text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <div class="ml-2">Share</div>
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
              class="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white dark:bg-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem>
                  <a
                    href="https://twitter.com/intent/tweet"
                    target="_blank"
                    class="group flex rounded-md text-blue-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 items-center w-full px-2 py-2 text-sm font-medium hover:bg-blue-300 dark:hover:bg-gray-800"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter-square"
                      class="h-5 w-5 text-blue-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                      ></path>
                    </svg>
                    Twitter
                  </a>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem>
                  <a
                    href="https://www.facebook.com/sharer.php"
                    target="_blank"
                    class="group flex rounded-md text-blue-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 items-center w-full px-2 py-2 text-sm font-medium hover:bg-blue-300 dark:hover:bg-gray-800"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-messenger"
                      class="h-5 w-5 text-blue-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
                      ></path>
                    </svg>
                    Facebook
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div class="mt-4 flex">
        <div class="md:ml-4 w-24">
          <img
            v-if="photo"
            class="h-12 w-12 rounded-full object-cover"
            src="{{ photo }}"
            alt="P"
          />
          <NoImage
            v-else
            :name="'John Doe'"
            class="inline-flex items-center w-12 h-12"
          />
        </div>
        <div class="flex-1">
          <div class="flex">
            <div
              class="py-2 text-gray-800 dark:text-gray-300 font-semibold text-sm"
            >
              John Doe
            </div>
            <div
              class="ml-3 py-2 text-gray-600 dark:text-gray-400 font-medium text-sm"
            >
              {{ post.data.created_at }}
            </div>
          </div>
          <div
            class="mt-2 text-gray-700 dark:text-gray-200 text-sm md:text-md font-medium"
          >
            {{ post.data.description }}
          </div>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="md:ml-4 w-24">
          <img
            v-if="photo"
            class="-mr-4 h-10 w-10 rounded-full object-cover"
            src="{{ photo }}"
            alt="P"
          />
          <NoImage
            v-else
            :name="'John Doe'"
            class="-mr-4 inline-flex items-center w-10 h-10"
          />
        </div>
        <div class="flex-1">
          <div>
            <textarea
              class="mt-2 block w-full md:w-96 px-3 py-2 placeholder-gray-500 text-base text-gray-700 dark:text-gray-200 font-normal bg-gray-100 dark:bg-gray-700 bg-clip-padding border border-solid border-gray-300 dark:border-gray-600 rounded transition ease-in-out focus:text-gray-700 dark:focus:text-gray-200 focus:bg-gray-50 darkfocus::bg-gray-700 focus:border-blue-800 focus:outline-none"
              id="comment"
              rows="4"
              v-model="form.description"
              placeholder="Add Comment..."
              required
            ></textarea>
            <button
              @click="comment"
              class="mt-3 flex items-center px-2 py-1 bg-blue-700 hover:bg-blue-800 border border-transparent rounded-xl font-semibold text-md text-gray-100 hover:text-white tracking-wide shadow-lg focus:outline-none focus:border-blue-900 focus:shadow-outline-blue transition ease-in-out duration-150"
            >
              Post Comment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 h-4 w-4 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-5 md:ml-4">
        <div
          class="text-gray-800 dark:text-gray-100 text-md md:text-lg font-semibold"
        >
          {{ post.data.comments_count + " Comments" }}
        </div>
        <div
          v-for="comment in post.data.comments"
          :key="comment.id"
          class="flex mt-2"
        >
          <div>
            <img
              v-if="photo"
              class="-mr-4 h-8 w-8 rounded-full object-cover"
              src="{{ photo }}"
              alt="P"
            />
            <NoImage
              v-else
              :name="'John Doe'"
              class="inline-flex items-center w-8 h-8"
            />
          </div>
          <div class="ml-4 flex-1">
            <div
              class="mr-3 text-gray-800 dark:text-gray-100 text-sm md:text-md font-base"
            >
              <strong>John Doe</strong> {{ comment.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import NoImage from "@/components/NoImage.vue";
export default {
  name: "Post",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    NoImage,
  },
  data() {
    return {
      error: null,
      form: {
        post_id: this.$route.params.id,
        description: null,
      },
    };
  },
  methods: {
    async comment() {
      try {
        await this.$store.dispatch("addComment", this.form);
        this.form.description = null;
      } catch (error) {
        this.error = error;
      }
    },
  },
  computed: mapGetters(["post"]),
};
</script>
