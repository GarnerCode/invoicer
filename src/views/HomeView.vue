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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>
