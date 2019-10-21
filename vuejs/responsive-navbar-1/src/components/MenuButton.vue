<template>
  <button class="py-4 px-0 block border-b-2 border-transparent hover:text-indigo-400 hover:border-indigo-700 md:p-4 uppercase tracking-wide">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'MenuButton',
  data() {
    return {
    };
  }
}
</script>

<style lang="scss" scoped>
</style>
