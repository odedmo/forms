<template>
  <v-expansion-panels :multiple="true">
    <v-expansion-panel
      v-for="(form) in state.forms"
      :key="form.id"
    >
      <v-expansion-panel-header>Form {{form.id}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <ExtendedForm 
          v-bind:formData="form"
          v-on:update-state="updateState($event, form.id)"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { observer } from "mobx-vue";
// import ViewModel from "../store/ViewModel";
import { store } from '../store/ViewModel';
import ExtendedForm from './ExtendedForm';

export default observer({
  data() {
    // return { state: new ViewModel() }
    return { state: store }
  },
  components: {
    ExtendedForm
  },
  mounted() {
    this.state.fetchForms();
  },
  methods: {
    updateState(data, id) {
      this.state.updateForm({...data, id})
    }
  }
});
</script>