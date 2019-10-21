<template>
  <div>
    <navbar></navbar>
    <div class="px-4">
      <div class="max-w-3xl bg-white rounded-lg mx-auto my-16 p-12">
        <h1 class="text-2xl font-medium">Responsive NavBar #1</h1>
        <h2 class="text-sm font-medium text-indigo-400 uppercase tracking-wide my-2">Response NavBar</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias impedit ipsum voluptatum quam accusamus eveniet, magni aliquam. Quos unde eum ad sit, autem, adipisci expedita ea quibusdam voluptates molestiae ex?
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/Navbar';

export default {
  name: 'Home',
  components: {
    'navbar': NavBar
  }
}
</script>

<style>
</style>
