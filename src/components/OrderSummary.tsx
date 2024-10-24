import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../slices/rootReducer";
import DiscountQuantity from "./DiscountQuantity";
import FreeQuantity from "./FreeQuantity";
import Shipping from "./Shipping";
import HandlingCharges from "./HandlingCharges";
import Mainline from "./Mainline";
import Upsell from "./Upsell";
import AccessoryCharges from "./AccessoryCharges";
import ExtraCharges from "./ExtraCharges";
import PerUnitExtraCharges from "./PerUnitExtraCharges";

const OrderSummary: React.FC = () => {
  const totalCost = useSelector((state: RootState) => {
    // Calculate total cost based on all components
    // This is a simplified example
    return (
      state.mainline.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ) +
      state.shipping.cost +
      state.handlingCharges.cost
    );
  });

  return (
    <div>
      <h1>Order Summary</h1>
      <DiscountQuantity />
      <FreeQuantity />
      <Shipping />
      <HandlingCharges />
      <Mainline />
      <Upsell />
      <AccessoryCharges />
      <ExtraCharges />
      <PerUnitExtraCharges />
      <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
    </div>
  );
};

export default OrderSummary;
