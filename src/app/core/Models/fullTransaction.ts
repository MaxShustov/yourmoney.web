import { ITransaction } from './transaction';

export class Transaction implements ITransaction {
    _id: string;
    description: string;
    category: string;
    value: number;
    userId: string;
    date: Date;
}
