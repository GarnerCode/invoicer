<template>
    <div class="invoice-form-container">
        <h2 v-if="!invoice.id.length">New Invoice</h2>
        <h2 v-if="invoice.id.length">Edit #{{ invoice.id }}</h2>
        <form class="invoice-form">

            <h4 class="section-header">Bill From</h4>
            <section class="form-section">
                <div class="field" :class="{'error': errors.includes('senderAddressStreet')}">
                    <div class="label-container">
                        <label for="from-street">Street Address</label>
                        <p class="error-msg">Required</p>
                    </div>
                    <input v-model="formModel.senderAddress.street" class="field-input" type="text" name="from-street">
                </div>
                <div class="fields-row">
                    <div class="field" :class="{'error': errors.includes('senderAddressCity')}">
                        <div class="label-container">
                            <label for="from-city">City</label>
                            <p class="error-msg">Required</p>
                        </div>
                        <input v-model="formModel.senderAddress.city" class="field-input" type="text" name="from-city">
                    </div>
                    <div class="field" :class="{'error': errors.includes('senderAddressPost')}">
                        <div class="label-container">
                            <label for="from-post">Post Code</label>
                            <p class="error-msg">Required</p>
                        </div>
                        <input v-model="formModel.senderAddress.postCode" class="field-input" type="text" name="from-post">
                    </div>
                </div>
                <div class="field" :class="{'error': errors.includes('senderAddressCountry')}">
                    <div class="label-container">
                        <label for="from-country">Country</label>
                        <p class="error-msg">Required</p>
                    </div>
                    <input v-model="formModel.senderAddress.country" class="field-input" type="text" name="from-country">
                </div>
            </section>

            <h4 class="section-header">Bill To</h4>
            <section class="form-section">
                <div class="field" :class="{'error': errors.includes('clientName')}">
                    <div class="label-container">
                        <label for="client-name">Client's Name</label>
                        <p class="error-msg">Required</p>
                    </div>
                    <input v-model="formModel.clientName" class="field-input" type="text" name="client-name">
                </div>
                <div class="field" :class="{'error': errors.includes('clientEmail')}">
                    <div class="label-container">
                        <label for="client-email">Client's Email</label>
                        <p class="error-msg">Required</p>
                    </div>
                    <input v-model="formModel.clientEmail" class="field-input" type="text" name="client-email">
                </div>
                <div class="field" :class="{'error': errors.includes('clientAddressStreet')}">
                    <div class="label-container">
                        <label for="client-street">Street Address</label>
                        <p class="error-msg">Required</p>
                    </div>
                    <input v-model="formModel.clientAddress.street" class="field-input" type="text" name="client-street">
                </div>
                <div class="fields-row">
                    <div class="field" :class="{'error': errors.includes('clientAddressCity')}">
                        <div class="label-container">
                            <label for="client-city">City</label>
                            <p class="error-msg">Required</p>
                        </div>
                        <input v-model="formModel.clientAddress.city" class="field-input" type="text" name="client-city">
                    </div>
                    <div class="field" :class="{'error': errors.includes('clientAddressPost')}">
                        <div class="label-container">
                            <label for="client-post">Post Code</label>
                            <p class="error-msg">Required</p>
                        </div>
                        <input v-model="formModel.clientAddress.postCode" class="field-input" type="text" name="client-post">
                    </div>
                </div>
                <div class="field" :class="{'error': errors.includes('clientAddressCountry')}">
                    <div class="label-container">
                        <label for="client-country">Country</label>
                        <p class="error-msg">Required</p>
                    </div>
                    <input v-model="formModel.clientAddress.country" class="field-input" type="text" name="client-country">
                </div>
                <DateSelector @date="(value) => getDateSelection(value)" :errors="errors" label="Invoice Date"></DateSelector>
                <Dropdown :errors="errors" label="Payment Terms" :options="paymentTerms"></Dropdown>
                <div class="field" :class="{'error': errors.includes('description')}">
                    <div class="label-container">
                        <label for="project-desc">Project Description</label>
                        <p class="error-msg">Required</p>
                    </div>
                    <input v-model="formModel.description" class="field-input" type="text" name="project-desc">
                </div>
            </section>

            <section class="form-section items-section">
                <h4 class="item-list-header">Item List</h4>
                <div class="item" v-for="(item, index) of formModel.items" :key="index">
                    <div class="field" :class="{'error': errors.includes(`item${index}Name`)}">
                        <div class="label-container">
                            <label :for="`item${index}-name`">Item Name</label>
                            <p class="error-msg">Required</p>
                        </div>
                        <input v-model="formModel.items[index].name" class="field-input" type="text" :name="`item${index}-name`">
                    </div>
                    <div class="fields-row">
                        <div class="field field-quantity" :class="{'error': errors.includes(`item${index}Quantity`)}">
                            <div class="label-container">
                                <label :for="`item${index}-quantity`">Qty.</label>
                                <p class="error-msg">Req.</p>
                            </div>
                            <input v-model="formModel.items[index].quantity" class="field-input" type="number" :name="`item${index}-quantity`">
                        </div>
                        <div class="field field-price" :class="{'error': errors.includes(`item${index}Price`)}">
                            <div class="label-container">
                                <label :for="`item${index}-price`">Price</label>
                                <p class="error-msg">Req.</p>
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
            <p class="errors" :class="{'active': errors.length}">- All fields must be added</p>
        </form>
        <div class="mobile-actions-container flex-hide-tablet">
            <RouterLink v-if="!invoice.id" class="button button-theme-primary" to="/">Discard</RouterLink>
            <button @click="saveInvoice(true)" class="button button-theme-secondary">Save as Draft</button>
            <button @click="saveInvoice(false)" class="button button-primary">Save & Send</button>
        </div>
        <div class="actions-container flex-hide-mobile">
            <div class="left">
                <button v-if="!invoice.id" @click="globalStore.setFormModalToggled(false, null)" class="button button-theme-primary">Discard</button>
            </div>
            <div class="right">
                <button @click="saveInvoice(true)" class="button button-theme-secondary">Save as Draft</button>
                <button @click="saveInvoice(false)" class="button button-primary">Save & Send</button>
            </div>
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
            gap: 1rem;
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
            margin: 4rem 0;
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
            max-width: 70px;
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
    @media screen and (min-width: 768px) {
        .invoice-form-container {
            padding: 3rem;
            .mobile-actions-container {
                display: none;
            }
            .actions-container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                position: fixed;
                bottom: 0;
                left: 0;
                width: calc(616px - 6rem);
                margin-left: 3rem;
                background-color: var(--color-background);
                padding: 2rem 0;
                .right {
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                }
            }
        }
    }
    @media screen and (min-width: 1440px) {
        .invoice-form-container {
            .actions-container {
                width: 100%;
                position: static;
                margin: 0;
                margin-top: 4rem;
                padding-bottom: 0;
            }
        }
    }
</style>

<script lang="ts">
    import { Invoice, InvoiceItem } from '@/models/Invoice.interface';
    import { defineComponent } from 'vue';
    import { formatCurrency } from '@/utils/utils';
    import { newInvoice } from '@/const/newInvoice';
    import { useGlobalStore } from '@/store/globalStore';
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
                globalStore: useGlobalStore(),
                errors: [] as Array<string>,
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
            this.invoice ? this.formModel = JSON.parse(JSON.stringify(this.invoice)) : this.formModel = newInvoice as Invoice;
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
                if (this.validateForm()) {
                    const items = this.formModel.items;
                    let total = 0;
                    items.forEach((item: InvoiceItem) => {
                        item.total = item.quantity * item.price;
                        total += item.total;
                    });
                    this.formModel.items = items;
                    this.formModel.total = total;
                    this.$emit('saveInvoice', this.formModel, draft);
                }
            },
            getDateSelection(value: string): void {
                this.formModel.paymentDue = value;
            },
            validateForm(): boolean {
                const form = this.formModel;
                this.errors = [];
                if (!form.senderAddress.street.length) {
                    this.errors.push('senderAddressStreet');
                } if (!form.senderAddress.city.length) {
                    this.errors.push('senderAddressCity');
                } if (!form.senderAddress.postCode.length) {
                    this.errors.push('senderAddressPost');
                } if (!form.senderAddress.country.length) {
                    this.errors.push('senderAddressCountry');
                } if (!form.clientName.length) {
                    this.errors.push('clientName');
                } if (!form.clientEmail.length) {
                    this.errors.push('clientEmail');
                } if (!form.clientAddress.street.length) {
                    this.errors.push('clientAddressStreet');
                } if (!form.clientAddress.city.length) {
                    this.errors.push('clientAddressCity');
                } if (!form.clientAddress.postCode.length) {
                    this.errors.push('clientAddressPost');
                } if (!form.clientAddress.country.length) {
                    this.errors.push('clientAddressCountry');
                } if (!form.description.length) {
                    this.errors.push('description');
                } if (!form.paymentDue.length) {
                    this.errors.push('date');
                }
                form.items.forEach((item: InvoiceItem, index: number) => {
                    if (!item.name?.length) {
                        this.errors.push(`item${index}Name`);
                    } if (!item.quantity) {
                        this.errors.push(`item${index}Quantity`);
                    } if (!item.price) {
                        this.errors.push(`item${index}Price`);
                    }
                });
                return !this.errors.length;
            }
        }
    })
</script>