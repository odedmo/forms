<template>
  <div class="button-wrapper mb-2">
    <v-btn
        color="blue-grey"
        class="ma-2 white--text float-right"
        fab
        @click="saveForms()"
      >
        <v-icon dark>mdi-cloud-upload</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import { store } from '../store/ViewModel';

export default observer({
  data() {
    return { state: store };
  },
  methods: {
    saveForms() {
      this.state.saveForms();
    }
  }
});
</script>

<style scoped>
  .button-wrapper {
    overflow: hidden;
  }
</style>
