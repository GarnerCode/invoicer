<template>
    <div class="view" v-if="invoice">
        <div class="view-header">
            <RouterLink to="/" class="go-back">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                <h4>Go back</h4>
            </RouterLink>
        </div>
        <div class="view-content invoice-view-content">
            <div class="content-header mobile-header">
                <div class="status-container">
                    <p>Status</p>
                    <div class="status" :class="`${invoice.status}`">
                        <div class="indicator"></div>
                        <h4 class="status-label">{{ invoice.status }}</h4>
                    </div>
                </div>
                <div class="actions-container flex-hide-mobile">
                    <button @click="globalStore.setFormModalToggled(true, invoice)" v-if="invoice.status !== 'paid'" class="button button-theme-primary">Edit</button>
                    <button class="button button-danger" @click="globalStore.setDeleteModalToggled(true)">Delete</button>
                    <button @click="globalStore.updateInvoiceStatusById(invoice.id, statusEnum.PENDING)" v-if="invoice.status === statusEnum.DRAFT" class="button button-primary">Mark as Pending</button>
                    <button @click="globalStore.updateInvoiceStatusById(invoice.id, statusEnum.PAID)" v-if="invoice.status === statusEnum.PENDING" class="button button-primary">Mark as Paid</button>
                </div>
            </div>
            <div class="invoice-details">
                <div class="row invoice-overview">
                    <div class="column">
                        <h3><span class="highlight">#</span>{{ invoice.id }}</h3>
                        <p class="desc">{{ invoice.description }}</p>
                    </div>
                    <div class="column sender-address">
                        <p>{{ invoice.senderAddress.street }}</p>
                        <p>{{ invoice.senderAddress.city }}</p>
                        <p>{{ invoice.senderAddress.postCode }}</p>
                        <p>{{ invoice.senderAddress.country }}</p>
                    </div>
                </div>
                <div class="row billing-details">
                    <div class="column payment-details">
                        <div class="detail">
                            <p class="detail-label">Invoice Date</p>
                            <div>{{ invoice.createdAt }}</div>
                        </div>
                        <div class="detail">
                            <p class="detail-label">Payment Due</p>
                            <div>{{ invoice.paymentDue }}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="detail">
                            <p class="detail-label">Bill To</p>
                            <div>{{ invoice.clientName }}</div>
                            <div class="client-address">
                                <p>{{ invoice.clientAddress.street }}</p>
                                <p>{{ invoice.clientAddress.city }}</p>
                                <p>{{ invoice.clientAddress.postCode }}</p>
                                <p>{{ invoice.clientAddress.country }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="column flex-hide-mobile">
                        <div class="detail">
                            <p class="detail-label">Sent To</p>
                            <div>{{ invoice.clientEmail }}</div>
                        </div>
                    </div>
                </div>
                <div class="row block-hide-tablet">
                    <div class="detail">
                        <p class="detail-label">Sent To</p>
                        <div>{{ invoice.clientEmail }}</div>
                    </div>
                </div>
                <div class="invoice-items-container">
                    <div class="items-list">
                        <div class="item-labels grid-hide-mobile">
                            <p>Item Name</p>
                            <p class="text-right">QTY.</p>
                            <p class="text-right">Price</p>
                            <p class="text-right">Total</p>
                        </div>
                        <div class="item" v-for="(item, index) of invoice.items" :key="index">
                            <div class="item-details">
                                <h4 class="item-name">{{ item.name }}</h4>
                                <h4 class="item-quantity block-hide-tablet">{{ item.quantity }} x {{ formatCurrency(item.price) }}</h4>
                            </div>
                            <p class="quantity block-hide-mobile">{{ item.quantity }}</p>
                            <p class="price block-hide-mobile">{{ formatCurrency(item.price) }}</p>
                            <div class="item-total">
                                <h4>{{ formatCurrency(item.total) }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="total-due">
                        <p>Amount Due</p>
                        <h1>{{ formatCurrency(invoice.total) }}</h1>
                    </div>
                </div>
            </div>
            <div class="mobile-actions-container flex-hide-tablet">
                <RouterLink :to="`/edit-invoice/${invoice.id}`" v-if="invoice.status !== 'paid'" class="button button-theme-primary">Edit</RouterLink>
                <button class="button button-danger" @click="globalStore.setDeleteModalToggled(true)">Delete</button>
                <button @click="globalStore.updateInvoiceStatusById(invoice.id, statusEnum.PENDING)" v-if="invoice.status === statusEnum.DRAFT" class="button button-primary">Mark as Pending</button>
                <button @click="globalStore.updateInvoiceStatusById(invoice.id, statusEnum.PAID)" v-if="invoice.status === statusEnum.PENDING" class="button button-primary">Mark as Paid</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .go-back {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
            text-decoration: none;
            color: var(--color-text);
        }
        .status-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            align-items: center;
        }
        .invoice-view-content {
            position: relative;
            .content-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                background-color: var(--color-field-background);
                padding: 32px 16px;
                border-radius: 8px;
            }
            .invoice-details {
                background-color: var(--color-field-background);
                border-radius: 8px;
                padding: 16px;
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .sender-address {
                margin-top: 16px;
            }
            .detail-label {
                margin-bottom: 8px;
            }
            .invoice-items-container {
                background-color: var(--color-invoice-items-container);
                padding: 16px;
                margin: 16px;
                margin-top: 2rem;
                border-radius: 8px;
                .total-due {
                    padding: 32px 16px;
                    background-color: var(--color-button-theme-secondary);
                    border-radius: 8px;
                    border-top-left-radius: 0px;
                    border-top-right-radius: 0px;
                    margin: 0px -16px;
                    margin-bottom: -16px;
                    margin-top: 16px;
                }
                .items-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .item {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .item-quantity {
                    color: var(--color-item-quantity);
                    margin-top: 8px;
                }
                .item-total {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .total-due {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    h1 {
                        color: #FFFFFF;
                    }
                }
            }
        }
        .mobile-actions-container {
            margin-top: 2rem;
            background-color: var(--color-field-background);
            position: absolute;
            bottom: -9rem;
            left: -2rem;
            width: calc(100% + 4rem);
            padding: 16px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
    }
    @media screen and (min-width: 768px) {
        .status-container {
            width: fit-content;
            gap: 1rem;
        }
        .actions-container {
            gap: 1rem;
        }
        .invoice-view-content {
            .invoice-overview {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            .sender-address {
                margin: 0;
            }
            .billing-details {
                gap: 8rem;
            }
            .item-labels {
                grid-template-columns: repeat(4, 1fr);
            }
            .invoice-items-container {
                .item {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    .quantity, .price, .item-total {
                        text-align: right;
                    }
                }
            }
        }
    }

</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/globalStore';
    import { Invoice } from '@/models/Invoice.interface';
    import { statusEnum } from '@/enum/status.enum';
    import { formatCurrency } from '@/utils/utils';

    export default defineComponent({
        name: 'InvoiceView',
        data: () => {
            return {
                globalStore: useGlobalStore(),
                invoice: null as Invoice | null,
                statusEnum,
                formatCurrency,
            }
        },
        mounted() {
            this.invoice = this.globalStore.getInvoiceById(this.$route.params.id);
        },
        watch: {
            'globalStore.getInvoiceList': {
                handler: function (val) {
                    if (val) {
                        this.invoice = this.globalStore.getInvoiceById(this.$route.params.id);
                    }
                },
                deep: true,
            }
        }
    })
</script>