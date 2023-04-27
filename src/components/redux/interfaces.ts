export interface IState {
  count: any;
  converter: any;
}

export interface ICounterProps {
  count: number;
  countIncrement: () => void;
  countDecrement: () => void;
  countIncrementNumber: (arg1: number) => void;
  countDecrementNumber: (arg1: number) => void;
  countReset: () => void;
}
export interface IConverterAction {
  type: string;
  payload: number;
}
