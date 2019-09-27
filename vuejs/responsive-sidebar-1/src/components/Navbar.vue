<template>
  <header class="bg-green-800">
    <div class="flex items-center justify-between h-24">
      <div>
        <img class="h-12 w-12" src="../assets/logo.png" alt="logo">
      </div>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-gray-900 focus:outline-none">
          <svg class="h-12 w-12 fill-current" viewBox="0 0 24 24">
            <path v-show="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-show="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="sm:flex sm:p-0 sm:block">
      <a href="#" class="block px-2 py-2 text-white font-semibold rounded hover:bg-gray-600">Dashboard</a>
      <a href="#" class="block px-2 py-2 text-white font-semibold rounded hover:bg-gray-600">Contact Us</a>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
