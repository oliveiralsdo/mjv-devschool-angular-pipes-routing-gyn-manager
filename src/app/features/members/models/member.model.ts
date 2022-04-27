export interface Member {
    id: number;
    name: string;
    monthlyPayment: number;
    lastPaymentDate: Date | string;
    inclusionDate: Date | string;
}