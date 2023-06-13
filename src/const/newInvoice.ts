export const newInvoice = {
    id: '',
    createdAt: '',
    paymentDue: '',
    description: '',
    paymentTerms: 0,
    clientName: '',
    clientEmail: '',
    status: 'draft',
    senderAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
    },
    clientAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
    },
    items: [],
    total: 0,
}