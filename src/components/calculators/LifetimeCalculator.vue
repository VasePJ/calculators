<template>
    <div class="md:p-6 p-2">
      <h1 class="mb-4 md:text-5xl text-2xl">Client Lifetime Value Calculator</h1>
    </div> 
    <div class="flex flex-col">
        <div class="mx-auto">
            <img src="../../assets/Top.svg" class="w-5 ml-36">
        </div>
        <div v-for="(field, index) in fields" :key="field.name" class="mx-auto w-full">
          <InputField v-model.number="field.value" @value-changed="calculate" v-bind:label="field.label" v-bind:showCurrency="field.showCurrency"></InputField>
          <div class="flex justify-center">
            <img v-if="index != fields.length - 1 && Boolean(field.value)" src="../../assets/Seperator.svg" class="ml-36">
            <img v-if="index == fields.length - 1 && Boolean(field.value)" src="../../assets/Bottom.svg" class="ml-36">
            <img v-if="index != fields.length - 1 && !Boolean(field.value)" src="../../assets/Seperator-gray.svg" class="ml-36">
            <img v-if="index == fields.length - 1 && !Boolean(field.value)" src="../../assets/Bottom-gray.svg" class="ml-36">
          </div>
        </div>
    </div> 
    <div>
      <div class="ml-36 md:mt-4 mt-2 bg-contain bg-no-repeat bg-center font-black md:text-5xl text-3xl" 
          v-bind:style="{ 'background-image': 'url(' + require('../../assets/highlight.svg') + ')' }"> {{lifetimeValue}}</div> 
        <div class="md:ml-36 ml-28 text-2xl font-black tracking-wide ">Client Lifetime Value</div>
        <div class="text-red-500">{{validation}}</div>
    </div>
</template>

<script>
import InputField from '../common/InputField.vue'

export default {
  name: 'LifetimeCalculator',
  data() {
      return {
    
        fields: [
          {
            name: 'mgmFee',
            label: 'Average Annual Management Fee',
            value: '',
            showCurrency: true
          },
          {
            name: 'annualFee',
            label: 'Other Annual Fees',
            value: '',
            showCurrency: true

          },
          {
            name: 'yearsManaged',
            label: 'Average # of Years Managed',
            value: ''
          },
          {
            name: 'leasingFee',
            label: 'Average Leasing Fee',
            value: '',
            showCurrency: true
          },
          {
            name: 'tenantTurnover',
            label: 'Average Tenant Turnover',
            value: ''
          }
        ],
        lifetimeValue: '$',
        validation:''
      
      };
    },
  components: {
    InputField
  },
  methods:{
    calculate(){
      for(let field of this.fields){
        if(!field.value){
          this.validation = 'Please fill all input fields.'
            this.lifetimeValue = '$';
             return;
        }
      }
      const mgmFee = this.fields.find(field => field.name == 'mgmFee').value;
      const annualFee = this.fields.find(field => field.name == 'annualFee').value;
      const yearsManaged = this.fields.find(field => field.name == 'yearsManaged').value;
      const leasingFee = this.fields.find(field => field.name == 'leasingFee').value;
      const tenantTurnover = this.fields.find(field => field.name == 'tenantTurnover').value;

      this.lifetimeValue = (mgmFee + annualFee) * yearsManaged + (leasingFee * tenantTurnover);
      this.lifetimeValue = '$ ' + this.lifetimeValue;
      this.validation = '';
    }
  },
}
</script>
