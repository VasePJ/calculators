<template>
    <div class=" grid grid-flow-row grid-cols-2 grid-rows-1 gap-4 mx-auto ">
      <label class="mr-8 md:text-lg font-extrabold leading-tight" >{{label}}</label>
      <input type="number" v-bind:placeholder="placeholder"  v-on:keyup="keymonitor" v-bind:readonly="readonly" v-bind:disabled="readonly"
        :value='modelValue' @input='$emit("update:modelValue", $event.target.value)'
        class="border-4 border-primary rounded-lg w-36 h-10 py-1 px-2"
        > 
    </div>
</template>

<script>
export default {
     name: 'InputField',
     props: {
       modelValue: String,
       label: String,
       placeholder: String,
       readonly: Boolean
       
     },
      methods:{
        keymonitor: function() {
          this.$emit('valueChanged');
        },
      }
    }
</script>