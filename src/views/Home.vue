<template>
  <div>
    <div>
      <div class="flex justify-between">
        <div
          class="text-blue-800 dark:text-gray-100 text-2xl md:text-3xl font-bold"
        >
          Posts
        </div>
        <button
          @click="openModal"
          class="flex items-center px-2 py-1 bg-blue-700 hover:bg-blue-00 border border-transparent rounded-lg font-semibold text-md text-gray-100 hover:text-white tracking-wide shadow-lg cursor-pointer focus:outline-none focus:border-blue-900 focus:shadow-outline-blue transition ease-in-out duration-150"
        >
          Create Post
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
      <div
        v-show="posts"
        v-for="post in posts.data"
        :key="post.id"
        class="mt-2"
      >
        <div @click="getPost(post.id)">
          <div
            class="my-4 w-full px-2 md:px-4 py-4 md:py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md cursor-pointer transform hover:-translate-y-1 transition duration-500 ease-in-out"
          >
            <div
              class="text-gray-800 dark:text-gray-100 text-md md:text-xl font-semibold"
            >
              {{ post.title }}
            </div>
            <div class="relative h-24 overflow-hidden">
              <div
                class="mt-2 text-gray-700 dark:text-gray-200 text-sm md:text-md font-medium"
              >
                {{ post.description }}
              </div>
              <div
                class="absolute inset-x-0 bottom-0 block h-6 md:h-8 pointer-events-none z-10 bg-gradient-to-t from-white dark:from-gray-800"
              ></div>
            </div>
            <div
              class="flex justify-between h-8 md:h-10 w-full py-2 content-center"
            >
              <div class="flex">
                <div
                  class="flex items-center px-2 py-2 bg-gray-50 dark:bg-gray-700 text-sm text-gray-500 dark:text-gray-400 rounded-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <div class="ml-2">
                    {{ post.comments_count + " Comments" }}
                  </div>
                </div>
                <div
                  class="ml-4 flex items-center px-2 py-1 bg-gray-50 dark:bg-gray-700 text-sm text-gray-500 dark:text-gray-400 rounded-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div class="ml-2">{{ post.created_at }}</div>
                </div>
              </div>
              <div class="-space-x-3">
                <img
                  class="relative z-10 inline h-8 w-8 rounded-full object-cover border-2 border-white dark:border-gray-800"
                  src="../assets/whip.png"
                  alt="P"
                />
                <img
                  class="relative z-10 inline h-8 w-8 rounded-full object-cover border-2 border-white dark:border-gray-800"
                  src="../assets/whip.png"
                  alt="P"
                />
                <img
                  class="relative z-10 inline h-8 w-8 rounded-full object-cover border-2 border-white dark:border-gray-800"
                  src="../assets/whip.png"
                  alt="P"
                />
                <div
                  class="text-sm text-blue-800 dark:text-blue-700 bg-white dark:bg-gray-800 relative z-10 inline w-6 h-6 border-2 border-white dark:border-gray-800 rounded-full"
                >
                  +3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="!posts">No posts</div>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal">
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="min-h-screen px-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay
                class="fixed inset-0 bg-gray-700 dark:bg-gray-900 bg-opacity-50"
              />
            </TransitionChild>

            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <div
                class="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100"
                >
                  New Post
                </DialogTitle>
                <div class="mt-2">
                  <div class="space-y-2">
                    <Label for="title" value="Title" />
                    <Input
                      id="title"
                      type="text"
                      placeholder="Title"
                      class="block w-full"
                      v-model="form.title"
                      required
                      autofocus
                      autocomplete="title"
                    />
                  </div>
                  <div class="space-y-2">
                    <Label for="description" value="Title" />
                    <textarea
                      class="mt-2 block w-full px-3 py-2 placeholder-gray-500 text-base text-gray-700 dark:text-gray-200 font-normal bg-gray-100 dark:bg-gray-700 bg-clip-padding border border-solid border-gray-300 dark:border-gray-600 rounded transition ease-in-out focus:text-gray-700 dark:focus:text-gray-200 focus:bg-gray-50 darkfocus::bg-gray-700 focus:border-black focus:outline-none"
                      id="description"
                      rows="4"
                      v-model="form.description"
                      placeholder="Write a description..."
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="mt-4 flex justify-between">
                  <button
                    @click="closeModal"
                    type="button"
                    class="flex items-center px-2 py-1 bg-gray-500 hover:bg-gray-600 border border-transparent rounded-lg font-semibold text-md text-gray-100 hover:text-white tracking-wide shadow-lg cursor-pointer focus:outline-none focus:border-blue-900 focus:shadow-outline-blue transition ease-in-out duration-150"
                  >
                    Cancel
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
                        stroke-width="3"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <button
                    @click="post"
                    class="flex items-center px-2 py-1 bg-blue-700 hover:bg-blue-00 border border-transparent rounded-lg font-semibold text-md text-gray-100 hover:text-white tracking-wide shadow-lg cursor-pointer focus:outline-none focus:border-blue-900 focus:shadow-outline-blue transition ease-in-out duration-150"
                  >
                    Create
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
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import Label from "@/components/Label.vue";
import Input from "@/components/Input.vue";

export default {
  name: "Home",
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    Label,
    Input,
  },
  data() {
    return {
      isOpen: false,
      error: null,
      form: {
        title: null,
        desctiption: null,
      },
    };
  },
  methods: {
    closeModal() {
      this.isOpen = false;
    },
    openModal() {
      this.isOpen = true;
    },
    async post() {
      try {
        await this.$store.dispatch("addPost", this.form);
      } catch (error) {
        this.error = error;
      } finally {
        this.isOpen = false;
      }
    },
    async getPost(id) {
      try {
        await this.$store.dispatch("fetchPost", id);
        await this.$router.push({ name: "Comments", params: { id: id } });
      } catch (error) {
        this.error = error;
      }
    },
    ...mapActions(["fetchPosts"]),
  },
  computed: mapGetters(["posts"]),
  created() {
    this.fetchPosts();
  },
};
</script>
