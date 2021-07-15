<template>
  <div class="md:p-6 p-2">
    <h1 class="mb-4 md:text-5xl text-2xl">Growth Calculator</h1>
  </div> 
  <div class="flex flex-col">
    <div class="mx-auto my-4">
      <span class=" text-xl text-bold">Planning for Growth Calculator</span>
    </div>
    <InputField v-model="newDoors" @value-changed="calculate" label="How Many News Doors Do You Want to Add This Year" class="my-2" placeholder="Enter value"></InputField>
    <InputField v-model="averageLostdoors" @value-changed="calculate" label="How Many Doors Do You Lose on Average?" class="my-2" placeholder="Enter value"></InputField>
    <InputField v-model="aquirenewDoors" @value-changed="calculate" label="How Many Doors You Need to Acquire This Year" class="my-2" readonly="true"></InputField>
    <div class="mx-auto my-4">
      <span class=" text-xl text-bold">How Many Clients You Need to Add</span>
    </div>
    <InputField v-model="averageDoors" @value-changed="calculate" label="How Many Doors Does Your Average Client Have?" class="my-2" placeholder="Enter value"></InputField>
    <InputField v-model="newClientsNeeded" @value-changed="calculate" label="How Many Clients You Need to Add" class="my-2" readonly="true"></InputField>
    <div class="mx-auto my-4">
      <span class=" text-xl text-bold">How Many Leads You Need</span>
    </div>
    <InputField v-model="newClientsNeeded" @value-changed="calculate" label="Number of Clients Need to Add" class="my-2" readonly="true"></InputField>
    <InputField v-model="avrClosingRate" @value-changed="calculate" label="What Is Your Average Closing Rate" class="my-2" placeholder="Enter %"></InputField>
    <InputField v-model="neededLeeds" @value-changed="calculate" label="How Many Leads You Need to Generate" class="my-2" readonly="true"></InputField>
  </div> 
</template>

<script>
import InputField from '../common/InputField.vue'

export default {
  name: 'GrowthCalculator',
  data() {
    return {
      newDoors:'',
      averageLostdoors: '',
      aquirenewDoors: '',
      averageDoors: '',
      newClientsNeeded: '',
      newClientsToAdd: '',
      avrClosingRate: '',
      neededLeeds: '',
    
    };
    },
  components: {
    InputField
  },
  methods:{
    doors(){
      if (isNaN(parseFloat(this.newDoors)) ||
          isNaN(parseFloat(this.averageLostdoors)))
            {
            this.aquirenewDoors = '';
            return;
        }
      this.aquirenewDoors = parseFloat(parseFloat(this.newDoors) + parseFloat(this.averageLostdoors)).toFixed(2);
    },
    clients(){
      if (isNaN(parseFloat(this.averageDoors)) ||
        isNaN(parseFloat(this.aquirenewDoors)))
          {
          this.newClientsNeeded = '';
          return;
      }
    this.newClientsNeeded = parseFloat(parseFloat(this.aquirenewDoors) / parseFloat(this.averageDoors)).toFixed(2);
    },
    leeds(){
      if (isNaN(parseFloat(this.newClientsNeeded)) ||
          isNaN(parseFloat(this.avrClosingRate)))
           {
            this.neededLeeds = '';
            return;
        }
      this.neededLeeds = parseFloat((parseFloat(this.newClientsNeeded) / parseFloat(this.avrClosingRate)) * 100).toFixed(2);

    },
    calculate() {
      this.doors();
      this.clients();
      this.leeds();
    }
  },
}
</script>
