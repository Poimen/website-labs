<template>
  <div>
    <navbar></navbar>
  </div>
</template>

<script>
import NavBar from './components/Navbar';

export default {
  name: 'app',
  components: {
    'navbar': NavBar
  }
}
</script>

<style src="./assets/tailwind.css">
