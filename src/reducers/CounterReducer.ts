export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";
export const INITIAL_COUNTER = 0;
export type COUNTER_TYPE = number;

export interface CounterAction {
  type: string;
}

export type CounterReducer = (
  state: COUNTER_TYPE,
  action: CounterAction
) => COUNTER_TYPE;

export const CounterReducer: CounterReducer = (state, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state - 1;
    default:
      return state;
  }
};
