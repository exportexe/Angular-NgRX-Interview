export interface User {
  readonly id: string;
  readonly name: string;
  readonly age: number;
}

export interface Subscription {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly userId: string;
}
