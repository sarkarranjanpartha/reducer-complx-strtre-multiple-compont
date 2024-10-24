// components/Shipping.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../slices/rootReducer";
import { setDiscountPercent } from "../slices/discountQuantitySlice";

const Shipping: React.FC = () => {
  const discountPercent = useSelector(
    (state: RootState) => state.shipping.cost
  );
  const dispatch = useDispatch();

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDiscountPercent(Number(e.target.value)));
  };

  return (
    <div>
      <h2>Shipping Charges</h2>
      <input
        type="number"
        value={discountPercent}
        onChange={handleDiscountChange}
        min="0"
        max="100"
      />
    </div>
  );
};

export default Shipping;
