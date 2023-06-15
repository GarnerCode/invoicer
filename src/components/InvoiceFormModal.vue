<template>
    <div class="form-modal-container">
        <div @click="globalStore.setFormModalToggled(false, null)" class="modal-overlay"></div>
        <div v-if="invoice" class="invoice-form-modal">
            <InvoiceForm @saveInvoice="saveInvoice" :invoice="invoice"></InvoiceForm>
        </div>
    </div>
</template>

<style>
    @media screen and (min-width: 768px) {
        .form-modal-container {
            overflow-y: scroll;
            height: fit-content;
        }
        .modal-overlay {
            position: absolute;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            background-color: rgba(0,0,0,0.5);
            z-index: 99;
        }
        .invoice-form-modal {
            width: 616px;
            height: calc(100vh - 80px);
            position: absolute;
            left: 0;
            top: 80px;
            z-index: 500;
            background-color: var(--color-background);
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            overflow-y: scroll;
        }
    }
    @media screen and (min-width: 1440px) {
        .invoice-form-modal {
            top: 0;
            left: 0;
            height: 100vh;
            z-index: 100;
            padding-left: 103px;
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/globalStore';
    import { newInvoice } from '@/const/newInvoice';
    import { Invoice } from '@/models/Invoice.interface';
    import { statusEnum } from '@/enum/status.enum';
    import InvoiceForm from './InvoiceForm.vue';

    export default defineComponent({
        name: 'InvoiceFormModal',
        data: () => {
            return {
                globalStore: useGlobalStore(),
                invoice: null,
                newInvoice,
                statusEnum,
            }
        },
        components: {
            InvoiceForm,
        },
        mounted() {
            if (this.globalStore.getTargetInvoice) {
                this.invoice = this.globalStore.getTargetInvoice;
            } else {
                this.invoice = newInvoice;
            }
        },
        methods: {
            async saveInvoice(payload: Invoice, draft: boolean): Promise<void> {
                console.log('Saving invoice, ', payload, draft);
                draft ? payload.status = statusEnum.DRAFT : payload.status = statusEnum.PENDING;
                payload.id.length ? await this.globalStore.editInvoice(payload) : await this.globalStore.createNewInvoice(payload);
                this.$router.push(`/invoice/${payload.id}`);
            }
        }
    })
</script>