import React from "react";

// custom type for state
interface IState {
  episodes: [];
  favourites: [];
}

// custom type for actions
interface IAction {
  type: string;
  payload: any;
}

// default value for store
const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IState | any>(initialState); // Consumer and Provider inside

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
