<template>
  <v-col cols="12">
    <BasicForm
      v-bind:name="name"
      v-bind:budget="budget"
      v-on:update-state="$emit('update-state', updateState($event))"
    />
    <v-switch 
      v-model="inheritance" 
      label="Inheritance"
      @change="$emit('update-state', updateState({}))"
    >
    </v-switch>
  </v-col>
</template>

<script>
import BasicForm from './BasicForm';

export default {
  name: 'ExtendedForm',
  components: {
    BasicForm
  },
  props: ['formData'],
  // data: () => ({
  //   name: '',
  //   budget: '',
  //   inheritance: false
  // })
  data: function() {
    let { name, budget, inheritance } = this.formData;
    const data = {
      name: name || '',
      budget: budget || '',
      inheritance: inheritance || false,
    }
    return data;
  },
  methods: {
    updateState(data) {
      this.name = data.name !== undefined ? data.name : this.name;
      this.budget = data.budget !== undefined ? data.budget : this.budget;

      return {
        name: this.name,
        budget: this.budget,
        inheritance: this.inheritance
      };
    }
  }
};
</script>
