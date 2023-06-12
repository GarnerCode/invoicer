<template>
    <div class="invoice-form-container">
        <h2 v-if="!invoice">New Invoice</h2>
        <h2 v-if="invoice">Edit #{{ invoice.id }}</h2>
        <form class="invoice-form">

            <h4 class="section-header">Bill From</h4>
            <section class="form-section">
                <div class="field">
                    <div class="label-container">
                        <label for="from-street">Street Address</label>
                    </div>
                    <input v-model="formModel.senderAddress.street" class="field-input" type="text" name="from-street">
                </div>
                <div class="fields-row">
                    <div class="field">
                        <div class="label-container">
                            <label for="from-city">City</label>
                        </div>
                        <input v-model="formModel.senderAddress.city" class="field-input" type="text" name="from-city">
                    </div>
                    <div class="field">
                        <div class="label-container">
                            <label for="from-post">Post Code</label>
                        </div>
                        <input v-model="formModel.senderAddress.postCode" class="field-input" type="text" name="from-post">
                    </div>
                </div>
                <div class="field">
                    <div class="label-container">
                        <label for="from-country">Country</label>
                    </div>
                    <input v-model="formModel.senderAddress.country" class="field-input" type="text" name="from-country">
                </div>
            </section>

            <h4 class="section-header">Bill To</h4>
            <section class="form-section">
                <div class="field">
                    <div class="label-container">
                        <label for="client-name">Client's Name</label>
                    </div>
                    <input v-model="formModel.clientName" class="field-input" type="text" name="client-name">
                </div>
                <div class="field">
                    <div class="label-container">
                        <label for="client-email">Client's Email</label>
                    </div>
                    <input v-model="formModel.clientEmail" class="field-input" type="text" name="client-email">
                </div>
                <div class="field">
                    <div class="label-container">
                        <label for="client-street">Street Address</label>
                    </div>
                    <input v-model="formModel.clientAddress.street" class="field-input" type="text" name="client-street">
                </div>
                <div class="fields-row">
                    <div class="field">
                        <div class="label-container">
                            <label for="client-city">City</label>
                        </div>
                        <input v-model="formModel.clientAddress.city" class="field-input" type="text" name="client-city">
                    </div>
                    <div class="field">
                        <div class="label-container">
                            <label for="client-post">Post Code</label>
                        </div>
                        <input v-model="formModel.clientAddress.postCode" class="field-input" type="text" name="client-post">
                    </div>
                </div>
                <div class="field">
                    <div class="label-container">
                        <label for="client-country">Country</label>
                    </div>
                    <input v-model="formModel.clientAddress.country" class="field-input" type="text" name="client-country">
                </div>
                <DateSelector label="Invoice Date"></DateSelector>
                <Dropdown label="Payment Terms" :options="paymentTerms"></Dropdown>
                <div class="field">
                    <div class="label-container">
                        <label for="project-desc">Project Description</label>
                    </div>
                    <input v-model="formModel.description" class="field-input" type="text" name="project-desc">
                </div>
            </section>

            <section class="form-section items-section">
                <h4 class="item-list-header">Item List</h4>
                <div class="item" v-for="(item, index) of formModel.items" :key="index">
                    <div class="field">
                        <div class="label-container">
                            <label :for="`item${index}-name`">Item Name</label>
                        </div>
                        <input v-model="formModel.items[index].name" class="field-input" type="text" :name="`item${index}-name`">
                    </div>
                </div>
            </section>
        </form>
    </div>
</template>

<style lang="scss">
    .invoice-form-container {
        .section-header {
            color: var(--color-primary);
            margin: 2rem 0;
        }
        .form-section {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        label {
            color: var(--color-field-label);
        }
        .fields-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 2rem;
            .field {
                width: calc(50% - 1rem);
            }
        }
        .items-section {
            margin-top: 4rem;
        }
        .item-list-header {
            font-size: 18px;
            font-family: var(--font-family-primary);
            font-weight: bold;
            color: var(--color-field-label);
        }
    }
</style>

<script lang="ts">
    import { Invoice } from '@/models/Invoice.interface';
    import { defineComponent } from 'vue';
    import DateSelector from './DateSelector.vue';
    import Dropdown from './Dropdown.vue';

    export default defineComponent({
        name: 'InvoiceForm',
        data: () => {
            return {
                formModel: {} as Invoice,
                paymentTerms: [
                    'Net 1 Day',
                    'Net 7 Days',
                    'Net 14 Days',
                    'Net 30 Days',
                ],
            }
        },
        components: {
            DateSelector,
            Dropdown,
        },
        props: {
            invoice: {
                type: Object,
            }
        },
        created() {
            if (this.invoice) {
                this.formModel = JSON.parse(JSON.stringify(this.invoice));
            }
        },
    })
</script>