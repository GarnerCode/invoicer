export const generateId = () => {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = alpha[Math.floor(Math.random() * alpha.length)] + alpha[Math.floor(Math.random() * alpha.length)] as string;
    const number = Math.floor(Math.random() * 9000 + 1000) as number;
    return `${letter + number}`;
}