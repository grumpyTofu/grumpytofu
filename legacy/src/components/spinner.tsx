import React, { useContext } from "react";

interface LoadingState {
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

export const LoadingSpinnerContext = React.createContext<LoadingState>({ loading: false, startLoading: () => ({}), stopLoading: () => ({}) });

export const LoadingSpinner = () => (
  <div className="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
