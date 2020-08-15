<template>
  <v-col cols="12">
    <v-text-field
      v-model="nameValue"
      label="Name"
      @keyup.enter="$emit('update-state', updateState())"
    ></v-text-field>

    <v-text-field
      v-model="budgetValue"
      label="Budget"
      @keyup.enter="$emit('update-state', updateState())"
    ></v-text-field>
  </v-col>
</template>

<script>
export default {
  name: 'BasicForm',
  props: {
    name: {
      type: String,
      defualt: ''
    },
    budget: {
      type: String,
      defualt: ''
    }
  },
  // data: () => ({
  //   name: '',
  //   budget: ''
  // }),
  data: function() {
    const data = {
      nameValue: this.name,
      budgetValue: this.budget
    }
    return data;
  },
  methods: {
    updateState() {
      return {
        name: this.nameValue,
        budget: this.budgetValue
      }
    }
  }
}
</script>

<style scoped>

</style>