<template>
  <input
    :class="[
      'py-2 border-gray-400 bg-gray-100 dark:bg-gray-700 border border-solid rounded-md',
      'focus:border-blue-800',
      'dark:border-gray-600 dark:bg-dark-eval-1 dark:text-gray-300',
      {
        'px-4': !withIcon,
        'pl-11 pr-4': withIcon,
      },
    ]"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
    withIcon: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:modelValue"],

  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>
