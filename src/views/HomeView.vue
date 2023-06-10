<template>
  <div class="view">
    <div class="view-header">
      <div class="left">
        <h1>Invoices</h1>
        <p v-if="!globalStore.getInvoiceList.length">No invoices</p>
        <p v-if="globalStore.getInvoiceList.length">{{ globalStore.getInvoiceList.length }} invoice<span v-if="globalStore.getInvoiceList.length > 1">s</span></p>
      </div>
      <div class="actions flex-row">
        <Filter filterBy="by status"></Filter>
        <button class="button button-primary icon-text">
          <div class="button-icon">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fill-rule="nonzero"/></svg>
          </div>
          <div>
            New <span class="inline-hide-mobile">invoice</span>
          </div>
        </button>
      </div>
    </div>
    <div class="view-content home-view-content">
      <div v-if="!globalStore.getInvoiceList.length" class="no-content">
        <img src="@/assets/illustration-empty.svg" alt="No invoices illustration">
        <h2>There is nothing here</h2>
        <p>Create an invoice by clicking the<br/> New <span class="inline-hide-mobile">invoice</span> button and get started</p>
      </div>
      <div v-if="globalStore.getInvoiceList.length" class="invoice-list">
        <InvoiceSummary v-for="invoice of globalStore.getInvoiceList" :key="invoice.id" :invoice="invoice"></InvoiceSummary>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .view {
    height: 100%;
  }
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
  .home-view-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100% - 32px);
    .no-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      h2 {
        margin-top: 3rem;
      }
      p {
        margin-top: 2rem;
        text-align: center;
      }
    }
    .invoice-list {
      height: 100%;
      width: 100%;
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGlobalStore } from '@/store/globalStore';
import Filter from '@/components/Filter.vue';
import InvoiceSummary from '@/components/InvoiceSummary.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Filter,
    InvoiceSummary,
  },
  data: () => {
    return {
      globalStore: useGlobalStore(),
    }
  },
});
</script>
