import { Period } from './period.enum';
import { Recording } from './recording';

export class Goal {
    id: string;
    name: string;
    description?: string;
    period: Period;
    currentAmount: number;
    targetAmount: number;
    currentPercentage?: number;
    recordings?: Recording[];
}
