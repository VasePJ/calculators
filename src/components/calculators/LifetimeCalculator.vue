<template>
    <div class="md:p-6 p-2">
      <h1 class="mb-4 md:text-5xl text-2xl">Client Lifetime Value Calculator</h1>
    </div> 
    <div class="flex flex-col">
        <div class="mx-auto">
            <img src="../../assets/Top.svg" class="w-5 ml-36">
        </div>
        <InputField v-model="mgmFee" @value-changed="calculate" label="Average Annual Management Fee"></InputField>
        <div class="mx-auto">
          <img src="../../assets/Seperator.svg" class=" ml-36">
        </div>
        <InputField v-model="annualFee" @value-changed="calculate" label="Other Annual Fees"></InputField>
        <div class="mx-auto">
          <img src="../../assets/Seperator.svg" class=" ml-36" >
       </div>
        <InputField v-model="yearsManaged" @value-changed="calculate" label="Average # of Years Managed"></InputField>
        <div class="mx-auto">
          <img src="../../assets/Seperator.svg" class=" ml-36">
        </div>
        <InputField v-model="leasingFee" @value-changed="calculate" label="Average Leasing Fee"></InputField>
        <div class="mx-auto">
          <img src="../../assets/Seperator.svg" class=" ml-36">
        </div>
        <InputField v-model="tenantTurnover" @value-changed="calculate" label="Average Tenant Turnover"></InputField>
        <div class="mx-auto">
          <img src="../../assets/Bottom.svg" class=" ml-36">
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
        mgmFee: '',
        annualFee: '',
        yearsManaged: '',
        leasingFee: '',
        tenantTurnover: '',
        lifetimeValue: '$',
        validation:''
      
      };
    },
  components: {
    InputField
  },
  methods:{
    calculate(){
      if (isNaN(parseFloat(this.mgmFee)) ||
          isNaN(parseFloat(this.annualFee)) ||
          isNaN(parseFloat(this.yearsManaged)) ||
          isNaN(parseFloat(this.leasingFee)) ||
          isNaN(parseFloat(this.tenantTurnover)) ) {
            this.validation = 'Please fill all input fields.'
            this.lifetimeValue = '$';
            return;
      }
      this.lifetimeValue = (parseFloat(this.mgmFee) + parseFloat(this.annualFee))* 
        parseFloat(this.yearsManaged) + 
        ( parseFloat(this.leasingFee) * parseFloat(this.tenantTurnover));
      this.lifetimeValue = '$ ' + this.lifetimeValue;
        this.validation = '';
    }
  },
}
</script>
