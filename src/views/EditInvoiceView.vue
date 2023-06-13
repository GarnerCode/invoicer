<template>
    <div v-if="invoice" class="view">
        <div class="view-header">
            <RouterLink v-if="invoice.id.length" :to="`/invoice/${invoice.id}`" class="go-back">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                <h4>Go back</h4>
            </RouterLink>
            <RouterLink v-if="!invoice.id.length" to="/" class="go-back">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                <h4>Go back</h4>
            </RouterLink>
        </div>
        <div class="view-content edit-invoice-view-content">
            <InvoiceForm @saveInvoice="saveInvoice" :invoice="invoice"></InvoiceForm>
        </div>
    </div>
</template>

<style lang="scss">
    .edit-invoice-view-content {
        .mobile-actions-container {
            position: relative;
            bottom: -6rem;
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/globalStore';
    import InvoiceForm from '@/components/InvoiceForm.vue';
    import { Invoice } from '@/models/Invoice.interface';
    import { statusEnum } from '@/enum/status.enum';
    import { newInvoice } from '@/const/newInvoice';

    export default defineComponent({
        name: 'EditInvoiceView',
        data: () => {
            return {
                globalStore: useGlobalStore(),
                invoice: null,
                statusEnum,
                newInvoice,
            }
        },
        components: {
            InvoiceForm,
        },
        mounted() {
            this.invoice = this.globalStore.getInvoiceById(this.$route.params.id);
            if (!this.invoice) this.invoice = newInvoice;
        },
        methods: {
            async saveInvoice(payload: Invoice, draft: boolean): Promise<void> {
                draft ? payload.status = statusEnum.DRAFT : payload.status = statusEnum.PENDING;
                this.invoice.id.length ? await this.globalStore.editInvoice(payload) : await this.globalStore.createNewInvoice(payload);
                this.$router.push(`/invoice/${payload.id}`);
            }
        }
    })
</script>