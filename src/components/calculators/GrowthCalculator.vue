<template>
  <div class="md:p-6 p-2">
    <h1 class="mb-4 md:text-5xl text-2xl">Growth Calculator</h1>
  </div> 
  <div class="flex flex-col">
    <div v-for="field in fields" :key="field.name">
      <h2 v-if="field.title" class=" mt-8 text-xl text-bold">{{field.title}}</h2>
      <InputField v-model.number="field.value" @value-changed="calculate" 
        v-bind:label="field.label" class="my-2" v-bind:placeholder="field.placeholder" v-bind:readonly="field.readonly"></InputField>
    </div>
  </div> 

</template>

<script>
import InputField from '../common/InputField.vue'

export default {
  name: 'GrowthCalculator',
  data() {
    return {
        fields: [
          {
            name: 'newDoors',
            label: 'How Many News Doors Do You Want to Add This Year',
            value: '',
            placeholder: 'Enter value',
            title: 'Planning for Growth Calculator'
          },
          {
            name: 'averageLostdoors',
            label: 'How Many Doors Do You Lose on Average?',
            value: '',
            placeholder: 'Enter value',
          },
          {
            name: 'aquirenewDoors',
            label: 'How Many Doors You Need to Acquire This Year',
            value: '',
            readonly: true
          },
          {
            name: 'averageDoors',
            label: 'How Many Doors Does Your Average Client Have?',
            value: '',
            placeholder: 'Enter value',
            title: 'How Many Clients You Need to Add'
          },
          {
            name: 'newClientsNeeded',
            label: 'How Many Clients You Need to Add',
            value: '',
            readonly: true
          },
          {
            name: 'newClientsToAdd',
            label: 'Number of Clients Need to Add',
            value: '',
            title: 'How Many Leads You Need',
            readonly: true
          },
          {
            name: 'avrClosingRate',
            label: 'What Is Your Average Closing Rate',
            value: '',
            placeholder: 'Enter %',
          },
          {
            name: 'neededLeeds',
            label: 'How Many Leads You Need to Generate',
            value: '',
            readonly: true
          },
        ],
    };
    },
  components: {
    InputField
  },
  methods:{
    doors(){
      const newDoors = this.fields.find(field => field.name == 'newDoors').value;
      const averageLostdoors = this.fields.find(field => field.name == 'averageLostdoors').value;
      const aquirenewDoorsObj = this.fields.find(field => field.name == 'aquirenewDoors');

      if (!newDoors || !averageLostdoors)
        {
          aquirenewDoorsObj.value = '';
          return;
        }
      aquirenewDoorsObj.value = parseFloat(newDoors + averageLostdoors).toFixed(2);
    },
    clients(){
       const averageDoors = this.fields.find(field => field.name == 'averageDoors').value;
       const aquirenewDoors = this.fields.find(field => field.name == 'aquirenewDoors').value;
       const newClientsNeededObj = this.fields.find(field => field.name == 'newClientsNeeded');
       const newClientsToAddObj = this.fields.find(field => field.name == 'newClientsToAdd');

      if (!averageDoors || !aquirenewDoors)
        {
          newClientsNeededObj.value = '';
          newClientsToAddObj.value = '';
          return;
        }
      newClientsNeededObj.value = parseFloat(aquirenewDoors / averageDoors).toFixed(2);
      newClientsToAddObj.value = newClientsNeededObj.value;
    },
    leeds(){
        const newClientsNeeded = this.fields.find(field => field.name == 'newClientsNeeded').value;
        const avrClosingRate = this.fields.find(field => field.name == 'avrClosingRate').value;
        const neededLeedsObj = this.fields.find(field => field.name == 'neededLeeds');

      if (!newClientsNeeded || !avrClosingRate)
        {
          neededLeedsObj.value = '';
          return;
        }
      neededLeedsObj.value = parseFloat((newClientsNeeded / avrClosingRate) * 100).toFixed(2);

    },
    calculate() {
      this.doors();
      this.clients();
      this.leeds();
    }
  },
}
</script>
