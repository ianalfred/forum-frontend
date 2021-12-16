<template>
  <div
    class="flex justify-center items-center rounded-full font-semibold text-md text-blue-600 bg-blue-300"
  >
    {{ generateInitials }}
  </div>
</template>

<script>
export default {
  props: ["name"],
  computed: {
    generateInitials() {
      let fullName = this.name;
      return fullName
        .match(/(^\S\S?|\b\S)?/g)
        .join("")
        .match(/(^\S|\S$)?/g)
        .join("")
        .toUpperCase();
    },
  },
};
</script>
