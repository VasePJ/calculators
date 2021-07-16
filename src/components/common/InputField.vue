<template>
    <div class=" grid grid-flow-row grid-cols-2 grid-rows-1 gap-4 mx-auto ">
      <label class="mr-8 md:text-lg font-extrabold leading-tight justify-self-end" >{{label}}</label>
      <div class="w-36 h-10 relative">
        <input type="number" v-bind:placeholder="placeholder"  v-on:keyup="keymonitor" v-bind:readonly="readonly" v-bind:disabled="readonly"
          :value='modelValue' @input='$emit("update:modelValue", $event.target.value)'
          class="border-4 border-gray-600 rounded-lg py-0.5 pr-2 w-full text-primary font-black text-lg outline-none transition-colors duration-300"
          v-bind:class="{'pl-6': showCurrency, 'pl-2': !showCurrency, 'border-gray-600': !filled, 'border-primary': filled}"> 
        <span v-show="showCurrency" class="absolute left-0 w-8 align-right top-1.5 text-primary font-black text-lg">$</span>
      </div>


    </div>
</template>

<script>
export default {
     name: 'InputField',
     props: {
      modelValue: Number,
      label: String,
      placeholder: String,
      readonly: Boolean,
      showCurrency: Boolean
       
     },
      methods:{
        keymonitor: function() {
          this.$emit('valueChanged');
        },
      },
      computed: {
        filled() {
          return Boolean(this.modelValue);
        }
      }
    }
</script>
