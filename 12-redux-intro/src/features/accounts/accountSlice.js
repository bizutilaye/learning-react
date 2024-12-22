const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanpurpose: "",
};
export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.loan,
        loanpurpose: action.payload.loanpurpose,
        balance: state.balance + action.payload.loan,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: state.loan - action.payload,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
}

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(loan, loanpurpose) {
  return { type: "account/requestLoan", payload: { loan, loanpurpose } };
}

export function payLoan() {
  return { type: "account/payLoan" };
}
// store.dispatch(deposit(500));
// console.log(store.getState());
// store.dispatch(withdraw(200));
// console.log(store.getState());
// store.dispatch(requestLoan(1000, "buy a car"));
// console.log(store.getState());
// store.dispatch(payLoan(10000));
// console.log(store.getState());
