import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../slices/rootReducer"; // Adjust the import path as needed
import {
  addExtraCharges,
  removeExtraCharges,
  updateExtraCharges,
} from "../slices/extraChargesSlice";

interface ExtraCharges {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

const ExtraCharges: React.FC = () => {
  const dispatch = useDispatch();
  const extraChargesItems = useSelector(
    (state: RootState) => state.extraCharges.items
  );

  const [newItem, setNewItem] = useState<ExtraCharges>({
    id: "",
    name: "",
    quantity: 0,
    price: 0,
  });

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity > 0 && newItem.price > 0) {
      dispatch(addExtraCharges({ ...newItem, id: Date.now().toString() }));
      setNewItem({ id: "", name: "", quantity: 0, price: 0 });
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeExtraCharges(id));
  };

  const handleUpdateItem = (updatedItem: ExtraCharges) => {
    dispatch(updateExtraCharges(updatedItem));
  };

  return (
    <div>
      <h2>Extra Charges</h2>
      <div>
        <input
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) =>
            setNewItem({ ...newItem, quantity: Number(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) =>
            setNewItem({ ...newItem, price: Number(e.target.value) })
          }
        />
        <button onClick={handleAddItem}>Add Extra Charge</button>
      </div>
      <ul>
        {extraChargesItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Price: ${item.price}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button
              onClick={() =>
                handleUpdateItem({ ...item, quantity: item.quantity + 1 })
              }
            >
              Increase Quantity
            </button>
            <button
              onClick={() =>
                handleUpdateItem({
                  ...item,
                  quantity: Math.max(0, item.quantity - 1),
                })
              }
            >
              Decrease Quantity
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraCharges;
