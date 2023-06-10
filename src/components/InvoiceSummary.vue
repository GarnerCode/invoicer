<template>
    <div class="invoice invoice-summary-mobile">
        <div class="row">
            <h4><span class="highlight">#</span>{{ invoice.id }}</h4>
            <p>{{ invoice.clientName }}</p>
        </div>
        <div class="row">
            <div class="column">
                <p>Due {{ invoice.paymentDue }}</p>
                <h3>${{ invoice.total.toLocaleString() }}</h3>
            </div>
            <div class="status" :class="`${invoice.status}`">
                <div class="indicator"></div>
                <h4 class="status-label">{{ invoice.status }}</h4>
            </div>
        </div>
        <svg class="block-hide-mobile" width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
    </div>
    <div class="invoice invoice-summary">
        <h4><span class="highlight">#</span>{{ invoice.id }}</h4>
        <p>Due {{ invoice.paymentDue }}</p>
        <p>{{ invoice.clientName }}</p>
        <h3>${{ invoice.total.toLocaleString() }}</h3>
        <div class="status" :class="`${invoice.status}`">
            <div class="indicator"></div>
            <h4 class="status-label">{{ invoice.status }}</h4>
        </div>
        <div class="arrow">
            <svg class="block-hide-mobile" width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .invoice {
            background-color: var(--color-field-background);
            padding: 16px;
            border-radius: 8px;
            width: calc(100% - 32px);
            cursor: pointer;
            transition: var(--transition);
            border: 1px solid var(--color-field-background);
            &:hover {
                border: 1px solid var(--color-primary);
            }
        }
        .invoice-summary-mobile {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .row {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
            .highlight {
                color: var(--color-gamma);
            }
        }
        .invoice-summary {
            display: none;
        }
        .status {
            width: 104px;
            height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 8px;
            border-radius: 6px;
            .indicator {
                width: 8px;
                height: 8px;
                border-radius: 100%;
            }
            .status-label {
                text-transform: capitalize;
            }
            &.paid {
                background-color: var(--color-background-paid);
                color: var(--color-text-paid);
                .indicator {
                    background-color: var(--color-text-paid);
                }
            }
            &.pending {
                background-color: var(--color-background-pending);
                color: var(--color-text-pending);
                .indicator {
                    background-color: var(--color-text-pending);
                }
            }
            &.draft {
                background-color: var(--color-background-draft);
                color: var(--color-text-draft);
                .indicator {
                    background-color: var(--color-text-draft);
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        .invoice-summary-mobile {
            display: none;
        }
        .invoice-summary {
            display: grid;
            grid-template-columns: repeat(5, 1fr) 7px;
            h3, h4, p, .arrow {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Invoice } from '@/models/Invoice.interface';

    export default defineComponent({
        name: 'InvoiceSummary',
        data: () => {
            return {

            }
        },
        props: {
            invoice: {
                type: Object,
            }
        }
    })
</script>