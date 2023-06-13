const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const generateId = () => {
    const letter = alpha[Math.floor(Math.random() * alpha.length)] + alpha[Math.floor(Math.random() * alpha.length)] as string;
    const number = Math.floor(Math.random() * 9000 + 1000) as number;
    const id = letter + number as string;
    return id;
}

export const formatCurrency = (num: number): string => {
    const pounds = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });
    return pounds.format(num);
}