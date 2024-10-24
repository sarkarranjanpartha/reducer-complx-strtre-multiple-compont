import React from "react";
import { Provider } from "react-redux";
import store from "./types/store"; // Assuming you have a store.ts file that configures your Redux store
import OrderSummary from "./components/OrderSummary";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Order Management System</h1>
        <OrderSummary />
      </div>
    </Provider>
  );
};

export default App;
