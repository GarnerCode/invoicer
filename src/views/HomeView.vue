<template>
  <div class="view">
    <div class="view-header">
      <div class="left">
        <h1>Invoices</h1>
        <p>No invoices</p>
      </div>
      <div class="actions flex-row">
        <Filter filterBy="by status"></Filter>
        <button class="button button-primary icon-text">
          <div class="button-icon">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fill-rule="nonzero"/></svg>
          </div>
          New
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .view-header {
    .filter {
      justify-content: space-between;
      align-items: center;
      width: 53.46px;
    }
    .actions {
      align-items: center;
      gap: 1.5rem;
    }
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Filter from '@/components/Filter.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Filter,
  },
  data: () => {
    return {
      
    }
  }
});
</script>
