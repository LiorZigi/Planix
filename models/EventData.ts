export interface EssentalItem {
  image: string;
  name: string;
  units?: string;
  amount: number;
}
export interface EventData {
  disposables: EssentalItem[];
  drinks: EssentalItem[];
  food: EssentalItem[];
  others: EssentalItem[];
}
