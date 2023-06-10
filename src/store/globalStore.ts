import { defineStore } from 'pinia'
import { Invoice } from '@/models/Invoice.interface';
import { supabase } from '@/lib/supabaseClient';

export const useGlobalStore = defineStore('globalStore', {
    state: () => {
        return {
            invoicesLoading: true,
            invoiceList: [] as Array<Invoice>,
            filteredInvoiceList: [] as Array<Invoice>,
        }
    },
    getters: {
        getLoading: (state): boolean => {
            return state.invoicesLoading;
        },
        getInvoiceList: (state): Array<Invoice> => {
            return state.invoiceList;
        },
    },
    actions: {
        async fetchInvoices(): Promise<void> {
            const { data, error } = await supabase
            .from('invoices')
            .select();
            if (data) {
                this.setInvoiceList(data);
                this.setFilteredInvoiceList(data);
                this.invoicesLoading = false;
            }
        },
        setInvoiceList(payload: Array<Invoice>): void {
            this.invoiceList = payload;
        },
        setFilteredInvoiceList(payload: Array<Invoice>): void {
            this.filteredInvoiceList = payload;
        },
        getInvoiceById(id: string): Invoice {
            return this.getInvoiceList.find((invoice: Invoice) => {
                return invoice.id === id;
            });
        }
    },
})