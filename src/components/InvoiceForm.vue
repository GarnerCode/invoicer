<template>
    <div class="invoice-form-container">
        <h2 v-if="!invoice.id.length">New Invoice</h2>
        <h2 v-if="invoice.id.length">Edit #{{ invoice.id }}</h2>
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
                    <div class="fields-row">
                        <div class="field field-quantity">
                            <div class="label-container">
                                <label :for="`item${index}-quantity`">Qty.</label>
                            </div>
                            <input v-model="formModel.items[index].quantity" class="field-input" type="number" :name="`item${index}-quantity`">
                        </div>
                        <div class="field field-price">
                            <div class="label-container">
                                <label :for="`item${index}-price`">Price</label>
                            </div>
                            <input v-model="formModel.items[index].price" class="field-input" type="number" :name="`item${index}-price`">
                        </div>
                        <div class="field">
                            <div class="label-container">
                                <label :for="`item${index}-total`">Total</label>
                            </div>
                            <h4 class="item-total">
                                {{ formatCurrency(formModel.items[index].price * formModel.items[index].quantity) }}
                            </h4>
                        </div>
                        <div class="delete-item">
                            <svg @click="deleteItem(index)" width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill-rule="nonzero"/></svg>
                        </div>
                    </div>
                </div>
                <button @click="(e) => addNewItem(e)" class="button button-theme-primary">
                    <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fill-rule="nonzero"/></svg>
                    Add New Item
                </button>
            </section>
        </form>
        <div class="mobile-actions-container">
            <RouterLink v-if="invoice" class="button button-theme-primary" :to="`/invoice/${invoice.id}`">Discard</RouterLink>
            <RouterLink v-if="!invoice" class="button button-theme-primary" to="/">Discard</RouterLink>
            <button @click="saveInvoice(true)" class="button button-theme-secondary">Save as Draft</button>
            <button @click="saveInvoice(false)" class="button button-primary">Save & Send</button>
        </div>
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
                &.field-quantity {
                    width: 64px;
                }
                &.field-price {
                    width: 100px;
                }
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
        .item {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 2.5rem;
        }
        .item-total, .delete-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 48px;
        }
        .delete-item {
            height: 77px;
            svg {
                cursor: pointer;
                transition: var(--transition);
                fill: var(--color-field-label);
                &:hover {
                    fill: var(--color-button-danger);
                }
            }
        }
    }
</style>

<script lang="ts">
    import { Invoice, InvoiceItem } from '@/models/Invoice.interface';
    import { defineComponent } from 'vue';
    import { formatCurrency } from '@/utils/utils';
    import { newInvoice } from '@/const/newInvoice';
    import DateSelector from './DateSelector.vue';
    import Dropdown from './Dropdown.vue';

    export default defineComponent({
        name: 'InvoiceForm',
        data: () => {
            return {
                formatCurrency,
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
            } else {
                this.formModel = newInvoice as Invoice;
            }
        },
        methods: {
            deleteItem(index: number): void {
                this.formModel.items.splice(index, 1);
            },
            addNewItem(e: Event): void {
                e.preventDefault();
                const newItem = {
                    name: '',
                    quantity: 1,
                    price: 0,
                    total: 0,
                } as InvoiceItem;
                this.formModel.items.push(newItem);
            },
            saveInvoice(draft: boolean): void {
                this.$emit('saveInvoice', this.formModel, draft);
            }
        }
    })
</script>