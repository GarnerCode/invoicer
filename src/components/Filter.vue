<template>
    <div class="filter-container">
        <div @click="filtersToggled = !filtersToggled" class="filter-trigger">
            <h4>Filter <span>{{ filterBy }}</span></h4>
            <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
        </div>
        <div v-if="filtersToggled" class="filter-options-container">
            <div class="filter-option" @click="filterInvoices('draft')">
                <!-- <input :checked="globalStore.getActiveFilters.includes('draft')" type="checkbox"> -->
                <div class="checkbox" :class="{'checked': globalStore.getActiveFilters.includes('draft')}">
                    <svg v-if="globalStore.getActiveFilters.includes('draft')" width="10" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5l2.124 2.124L8.97 1.28" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </div>
                <h4>Draft</h4>
            </div>
            <div class="filter-option" @click="filterInvoices('pending')">
                <!-- <input :checked="globalStore.getActiveFilters.includes('pending')" type="checkbox"> -->
                <div class="checkbox" :class="{'checked': globalStore.getActiveFilters.includes('pending')}">
                    <svg v-if="globalStore.getActiveFilters.includes('pending')" width="10" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5l2.124 2.124L8.97 1.28" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </div>
                <h4>Pending</h4>
            </div>
            <div class="filter-option" @click="filterInvoices('paid')">
                <!-- <input :checked="globalStore.getActiveFilters.includes('paid')" type="checkbox"> -->
                <div class="checkbox" :class="{'checked': globalStore.getActiveFilters.includes('paid')}">
                    <svg v-if="globalStore.getActiveFilters.includes('paid')" width="10" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5l2.124 2.124L8.97 1.28" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </div>
                <h4>Paid</h4>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .filter-container {
            position: relative;
            .filter-trigger {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
                height: 15px;
                cursor: pointer;
                span {
                    display: none;
                }
            }
            .filter-options-container {
                position: absolute;
                top: 2rem;
                left: -42px;
                background-color: var(--color-filters-background);
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: 176px;
                padding: 16px 0;
                padding-left: 16px;
                box-shadow: 0px 10px 20px var(--color-filters-shadow);
            }
            .filter-option {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                input {
                    background-color: var(--color-checkbox);
                }
                .checkbox {
                    background-color: var(--color-checkbox);
                    width: 14px;
                    height: 14px;
                    border-radius: 2px;
                    border: 1px solid var(--color-checkbox);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    &.checked {
                        background-color: var(--color-primary);
                        border: 1px solid var(--color-primary);
                    }
                }
                &:hover {
                    .checkbox {
                        border: 1px solid var(--color-primary);
                    }
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        .filter-container {
            .filter-trigger {
                span {
                    display: inline-flex;
                }
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/globalStore';
    import { Invoice } from '@/models/Invoice.interface';

    export default defineComponent({
        name: 'Filter',
        data: () => {
            return {
                globalStore: useGlobalStore(),
                filtersToggled: false,
                activeFilters: [] as Array<string>,
            }
        },
        props: {
            filterBy: {
                type: String,
            }
        },
        mounted() {
            this.activeFilters = this.globalStore.getActiveFilters;
        },
        methods: {
            filterInvoices(value: string): void {
                if (!this.activeFilters.includes(value)) {
                    this.activeFilters.push(value);
                } else {
                    const index = this.activeFilters.indexOf(value);
                    this.activeFilters.splice(index, 1);
                }
                if (this.activeFilters.length) {
                    const filteredInvoices = this.globalStore.getInvoiceList.filter((invoice: Invoice) => {
                        if (this.activeFilters.includes(invoice.status)) {
                            return invoice
                        }
                    });
                    this.globalStore.setFilteredInvoiceList(filteredInvoices);
                } else {
                    this.globalStore.setFilteredInvoiceList(this.globalStore.getInvoiceList);
                }
                this.globalStore.setActiveFilters(this.activeFilters);
            },
        }
    })
</script>