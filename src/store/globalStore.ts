import { defineStore } from 'pinia'
import { Invoice } from '@/models/Invoice.interface';
import { supabase } from '@/lib/supabaseClient';

export const useGlobalStore = defineStore('globalStore', {
    state: () => {
        return {
            invoicesLoading: true,
            invoiceList: [] as Array<Invoice>,
            filteredInvoiceList: [] as Array<Invoice>,
            toggleDeleteModal: false,
        }
    },
    getters: {
        getLoading: (state): boolean => {
            return state.invoicesLoading;
        },
        getInvoiceList: (state): Array<Invoice> => {
            return state.invoiceList;
        },
        getDeleteModalToggled: (state): boolean => {
            return state.toggleDeleteModal;
        },
    },
    actions: {
        async fetchInvoices(): Promise<void> {
            const { data } = await supabase
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
        },
        setDeleteModalToggled(payload: boolean): void {
            this.toggleDeleteModal = payload;
        },
        async deleteInvoiceById(id: string): Promise<void> {
            console.log('ID deleted: ', id);
        },
        async updateInvoiceStatusById(id: string, status: string): Promise<void> {
            const updatedInvoice = this.getInvoiceById(id);
            updatedInvoice.status = status;
            const { error } = await supabase
            .from('invoices')
            .update(updatedInvoice)
            .eq('id', id);
            if (error) {
                console.error(error);
            } else {
                this.fetchInvoices();
            }
        }
    },
})