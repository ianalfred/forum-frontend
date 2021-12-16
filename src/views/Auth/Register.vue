<template>
  <div>
    <div class="flex justify-between">
      <div
        class="text-blue-800 dark:text-gray-100 text-2xl md:text-3xl font-bold"
      >
        Register
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
      <form @submit.prevent="submit">
        <div class="grid gap-6">
          <div class="space-y-2">
            <Label for="name" value="Name" />
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </template>
              <Input
                withIcon
                id="name"
                type="text"
                placeholder="Name"
                class="block w-full"
                v-model="form.name"
                required
                autofocus
                autocomplete="name"
              />
            </InputIconWrapper>
          </div>

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

          <div class="space-y-2">
            <Label for="password_confirmation" value="Confirm Password" />
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
                id="password_confirmation"
                type="password"
                class="block w-full"
                placeholder="Confirm Password"
                v-model="form.password_confirmation"
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
            class="flex items-center px-2 py-1 bg-blue-700 hover:bg-blue-00 border border-transparent rounded-lg font-semibold text-md text-gray-100 hover:text-white tracking-wide shadow-lg cursor-pointer focus:outline-none focus:border-blue-900 focus:shadow-outline-blue transition ease-in-out duration-150"
          >
            Register
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
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </button>
        </div>
      </form>
      <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Already have an account?
        <router-link
          :to="{ name: 'Login' }"
          class="text-blue-500 hover:underline"
        >
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import InputIconWrapper from "@/components/InputIconWrapper.vue";
// import ValidationErrors from "@/components/ValidationErrors.vue";
import Label from "@/components/Label.vue";
import Input from "@/components/Input.vue";
export default {
  name: "Register",
  components: {
    InputIconWrapper,
    Label,
    Input,
  },
  data() {
    return {
      error: null,
      loading: false,
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },
  methods: {
    async submit() {
      this.error = null;
      try {
        await this.$store.dispatch("signup", this.form);
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
