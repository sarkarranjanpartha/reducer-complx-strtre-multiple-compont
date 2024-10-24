import { combineReducers } from "@reduxjs/toolkit";
import discountQuantityReducer from "./discountQuantitySlice";
import freeQuantityReducer from "./freeQuantitySlice";
import shippingReducer from "./shippingSlice";
import handlingChargesReducer from "./handlingChargesSlice";
import mainlineReducer from "./mainlineSlice";
import upsellReducer from "./upsellSlice";
import accessoryChargesReducer from "./accessoryChargesSlice";
import extraChargesReducer from "./extraChargesSlice";
import perUnitExtraChargesReducer from "./perUnitExtraChargesSlice";

const rootReducer = combineReducers({
  discountQuantity: discountQuantityReducer,
  freeQuantity: freeQuantityReducer,
  shipping: shippingReducer,
  handlingCharges: handlingChargesReducer,
  mainline: mainlineReducer,
  upsell: upsellReducer,
  accessoryCharges: accessoryChargesReducer,
  extraCharges: extraChargesReducer,
  perUnitExtraCharges: perUnitExtraChargesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
