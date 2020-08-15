<template>
  <v-expansion-panels class="mb-8">
    <v-expansion-panel>
      <v-expansion-panel-header>Base Form</v-expansion-panel-header>
        <v-expansion-panel-content>
          <BasicForm 
            v-bind:name="state.baseForm.name"
            v-bind:budget="state.baseForm.budget"
            v-on:update-state="updateState($event)"
          />
        </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { observer } from "mobx-vue";
// import ViewModel from "../store/ViewModel";
import { store } from '../store/ViewModel';
import BasicForm from './BasicForm';

// export default {
//   name: 'BaseForm',
//   components: {
//     BasicForm
//   },
//   data: () => ({
//     //
//   }),
// };

export default observer({
  data() {
      return { state: store }
  },
  components: {
    BasicForm
  },
  mounted() {
    this.state.fetchBaseForm();
  },
  methods: {
    updateState(data) {
      this.state.updateForm({...data})
    }
  }
});
</script>
