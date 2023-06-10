import { useGlobalStore } from '@/store/globalStore';
import { Invoice } from '@/models/Invoice.interface';

const store = useGlobalStore();
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const generateId = () => {
    const letter = alpha[Math.floor(Math.random() * alpha.length)] + alpha[Math.floor(Math.random() * alpha.length)] as string;
    const number = Math.floor(Math.random() * 9000 + 1000) as number;
    const id = letter + number as string;
    return id;
}

export const getUniqueId = (): string => {
    let unique = false;
    let id = null;
    while (!unique) {
        id = generateId();
        if (!store.getInvoiceList.find((invoice: Invoice) => {
            return invoice.id === id;
        })) {
            unique = true;
        }
    }
    return id;
}