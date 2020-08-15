<template>
  <v-expansion-panels :multiple="true">
    <v-expansion-panel
      v-for="(form) in state.forms"
      :key="form.id"
    >
      <v-expansion-panel-header>Form {{form.id}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="form.name"
          label="Name"
        ></v-text-field>
        <v-text-field
          type="number"
          v-model="form.budget"
          label="Budget"
          :disabled="form.inheritance"
        ></v-text-field>
        <v-switch 
          v-model="form.inheritance" 
          label="Inheritance"
          @change="updateState(form.id)"
        >
        </v-switch>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { observer } from "mobx-vue";
import { store } from '../store/ViewModel';

export default observer({
  data() {
    return { state: store };
  },
  mounted() {
    this.state.getForms();
  },
  methods: {
    updateState(id) {
      this.state.updateForm(id);
    }
  }
});
</script>