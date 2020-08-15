<template>
  <v-app>
    <v-container>
      <Button />
      <BaseForm />
      <FormsList />
    </v-container>
  </v-app>
</template>

<script>
import Button from './components/Button';
import BaseForm from './components/BaseForm';
import FormsList from './components/FormsList';

export default {
  name: 'App',
  components: {
    Button,
    BaseForm,
    FormsList
  }
};
</script>
