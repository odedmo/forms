<template>
  <v-app>
    <v-container>
      <BaseForm />
      <FormsList />
    </v-container>
  </v-app>
</template>

<script>
import BaseForm from './components/BaseForm';
import FormsList from './components/FormsList';

export default {
  name: 'App',
  components: {
    BaseForm,
    FormsList
  }
};
</script>
