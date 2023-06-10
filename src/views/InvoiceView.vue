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
                <p>Status</p>
                <div class="status" :class="`${invoice.status}`">
                    <div class="indicator"></div>
                    <h4 class="status-label">{{ invoice.status }}</h4>
                </div>
            </div>
            <div class="invoice-details">
                <div class="row">
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
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .go-back {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
        color: var(--color-text);
    }
    .invoice-view-content {
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
        }
        .desc {
            margin-top: 8px;
        }
        .sender-address {
            margin-top: 16px;
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/globalStore';
    import { Invoice } from '@/models/Invoice.interface';

    export default defineComponent({
        name: 'InvoiceView',
        data: () => {
            return {
                globalStore: useGlobalStore(),
                invoice: null as Invoice | null,
            }
        },
        mounted() {
            this.invoice = this.globalStore.getInvoiceById(this.$route.params.id);
            console.log('Target: ', this.invoice);
        }
    })
</script>