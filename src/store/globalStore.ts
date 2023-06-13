import { defineStore } from 'pinia'
import { Invoice } from '@/models/Invoice.interface';
import { supabase } from '@/lib/supabaseClient';
import { generateId } from '@/utils/utils';

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
        getUniqueId(): string {
            let unique = false;
            let id = null;
            while (!unique) {
                id = generateId();
                if (!this.getInvoiceList.find((invoice: Invoice) => {
                    return invoice.id === id;
                })) {
                    unique = true
                }
            }
            return id;
        },
        async deleteInvoiceById(id: string): Promise<void> {
            const { error } = await supabase
            .from('invoices')
            .delete()
            .eq('id', id);
            error ? console.error(error) : await this.fetchInvoices();
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
                await this.fetchInvoices();
            }
        },
        async createNewInvoice(payload: Invoice): Promise<void> {
            console.log('Running create invoice');
            payload.id = this.getUniqueId();
            const { error } = await supabase
            .from('invoices')
            .insert(payload);
            if (error) {
                console.error(error);
            } else {
                await this.fetchInvoices();
            }
        },
        async editInvoice(payload: Invoice): Promise<void> {
            const { error } = await supabase
            .from('invoices')
            .update(payload)
            .eq('id', payload.id);
            if (error) {
                console.error(error);
            } else {
                await this.fetchInvoices();
            }
        }
    },
})