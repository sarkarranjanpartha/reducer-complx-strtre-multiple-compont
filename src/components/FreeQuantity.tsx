// components/FreeQuantity.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../slices/rootReducer";
import { setDiscountPercent } from "../slices/discountQuantitySlice";

const FreeQuantity: React.FC = () => {
  const discountPercent = useSelector(
    (state: RootState) => state.freeQuantity.percent
  );
  const dispatch = useDispatch();

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDiscountPercent(Number(e.target.value)));
  };

  return (
    <div>
      <h2>Free Quantity</h2>
      <input
        type="number"
        value={discountPercent}
        onChange={handleDiscountChange}
        min="0"
        max="100"
      />
      <span>%</span>
    </div>
  );
};

export default FreeQuantity;
