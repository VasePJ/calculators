<template>
  <div class="font-extrabold container mx-auto">
    <h1 class="p-6 md:text-5xl text-2xl text-accent pt-36">Welcome to Calculators Page!</h1>
    <div class="flex md:flex-row flex-col justify-center p-4">
    <router-link to="/growth-calculator" class="md:text-2xl text-xl border-4 border-primary rounded-lg p-8 md:mr-4 md:mb-0 mb-4">Growth Calculator</router-link>
    <router-link to="/lifetime-calculator" class="md:text-2xl text-xl border-4 border-primary rounded-lg p-8">Lifetime Calculator</router-link>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
