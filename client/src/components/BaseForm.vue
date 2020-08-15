<template>
  <v-expansion-panels class="mb-8">
    <v-expansion-panel>
      <v-expansion-panel-header>Base Form</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field
            v-model="state.baseForm.name"
            label="Name"
          ></v-text-field>
          <v-text-field
            type="number"
            v-model="state.baseForm.budget"
            label="Budget"
            @input="updateBudget()"
          ></v-text-field>
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
    this.state.getBaseForm();
  },
  methods: {
    updateBudget() {
      this.state.updateBudget();
    }
  }
});
</script>
