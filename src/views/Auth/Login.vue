<template>
  <div>
    <div class="flex justify-between">
      <div
        class="text-blue-800 dark:text-gray-100 text-2xl md:text-3xl font-bold"
      >
        Login
      </div>
      <div
        v-if="loading"
        class="text-blue-600 dark:text-gray-400 text-lg md:text-xl font-semibold animate-pulse"
      >
        loading
      </div>
    </div>
    <div
      class="mt-3 w-full px-6 py-4 overflow-hidden bg-white dark:bg-gray-800 shadow-md rounded-lg"
    >
      <!-- <ValidationErrors class="mb-4" /> -->
      <div v-if="error" class="mb-4 text-red-600">{{ error }}</div>
      <form @submit.prevent="login">
        <div class="grid gap-6">
          <div class="space-y-2">
            <Label for="email" value="Email" />
            <InputIconWrapper>
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </template>
              <Input
                withIcon
                id="email"
                type="email"
                class="block w-full"
                placeholder="Email"
                v-model="form.email"
                required
                autocomplete="username"
              />
            </InputIconWrapper>
          </div>

          <div class="space-y-2">
            <Label for="password" value="Password" />
            <InputIconWrapper>
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </template>
              <Input
                withIcon
                id="password"
                type="password"
                class="block w-full"
                placeholder="Password"
                v-model="form.password"
                required
                autocomplete="new-password"
              />
            </InputIconWrapper>
          </div>
        </div>
        <div class="mt-4 flex justify-between">
          <button
            @click="this.$router.go(-1)"
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
            type="submit"
            class="flex items-center px-2 py-1 bg-blue-700 hover:bg-blue-800 border border-transparent rounded-lg font-semibold text-md text-gray-100 hover:text-white tracking-wide shadow-lg cursor-pointer focus:outline-none focus:border-blue-900 focus:shadow-outline-blue transition ease-in-out duration-150"
          >
            Login
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
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputIconWrapper from "@/components/InputIconWrapper.vue";
// import ValidationErrors from "@/components/ValidationErrors.vue";
import Label from "@/components/Label.vue";
import Input from "@/components/Input.vue";
export default {
  name: "Login",
  components: {
    InputIconWrapper,
    Label,
    Input,
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      error: null,
      loading: false,
    };
  },
  methods: {
    async login() {
      this.error = null;
      try {
        await this.$store.dispatch("login", this.form);
        await this.$router.push({ name: "Home" });
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
