<template>
  <div class="view">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <p>This is a paragraph.</p>
    <button class="button button-primary">Button Primary</button>
    <button class="button button-theme-primary">Button Theme Primary</button>
    <button class="button button-theme-secondary">Button Theme Secondary</button>
    <button class="button button-tertiary">Button Tertiary</button>
    <button class="button button-danger">Button Danger</button>
    <div class="field">
      <div class="label-container">
        <label class="field-label" for="test"></label>
        <div class="field-error-msg">Field Label</div>
      </div>
      <input class="field-input" type="text" name="test">
    </div>
    <Dropdown label="Payment Terms" :options="testOptions"></Dropdown>
    <DateSelector label="Issue Date"></DateSelector>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Dropdown from '@/components/Dropdown.vue';
import DateSelector from '@/components/DateSelector.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Dropdown,
    DateSelector,
  },
  data: () => {
    return {
      testOptions: [
        'Net 1 Day',
        'Net 7 Days',
        'Net 14 Days',
        'Net 30 Days',
      ],
    }
  }
});
</script>
