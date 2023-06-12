<template>
    <div v-if="invoice" class="view">
        <div class="view-header">
            <RouterLink :to="`/invoice/${invoice.id}`" class="go-back">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                <h4>Go back</h4>
            </RouterLink>
        </div>
        <div class="view-content">
            <InvoiceForm :invoice="invoice"></InvoiceForm>
        </div>
    </div>
</template>

<style lang="scss">

</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/globalStore';
    import InvoiceForm from '@/components/InvoiceForm.vue';

    export default defineComponent({
        name: 'EditInvoiceView',
        data: () => {
            return {
                globalStore: useGlobalStore(),
                invoice: null,
            }
        },
        components: {
            InvoiceForm,
        },
        mounted() {
            this.invoice = this.globalStore.getInvoiceById(this.$route.params.id);
        }
    })
</script>