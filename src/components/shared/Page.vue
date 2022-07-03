<template>
  <main class="page constraining-container" :class="classes">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "Page",
  props: {
    classes: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
}
</style>
