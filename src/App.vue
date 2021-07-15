<template>
  <div class="mx-auto">
    <nav class="flex md:flex-row flex-col text-center w-full shadow-md">
      <router-link to="/#" class="text-xl	hover:bg-light hover:text-primary p-6" v-bind:class = "(currentRouteName == 'home')?'bg-primary text-white':'text-primary'">Home</router-link>
      <router-link to="/growth-calculator" class="text-xl hover:bg-light hover:text-primary p-6" v-bind:class = "(currentRouteName == 'growthCalculator')?'bg-primary text-white':'text-primary'">Growth Calculator</router-link>
      <router-link to="/lifetime-calculator" class="text-xl hover:bg-light	hover:text-primary p-6" v-bind:class = "(currentRouteName == 'lifetimeCalculator')?'bg-primary text-white':'text-primary'">Lifetime Calculator</router-link>
    </nav>
    <div id="body" class="mt-8 bg-contain bg-no-repeat bg-center w-full" v-bind:style="{ 'background-image': 'url(' + require('./assets/BG.svg') + ')', 'min-height': '600px' }">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HomePage,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
