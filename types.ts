
export interface AuditResult {
  currentPosition: string;
  leveragePoints: string[];
  strategicShift: string;
  unfairAdvantage: string;
  scoreCard: {
    identity: number;
    marketing: number;
    sales: number;
    growth: number;
  };
}

export interface Framework {
  id: string;
  category: 'marketing' | 'sales' | 'growth';
  title: string;
  description: string;
  benefit: string;
  icon: string;
  visualUrl?: string;
}

export interface DiagnosticQuestion {
  id: string;
  field: string;
  question: string;
  placeholder: string;
}
