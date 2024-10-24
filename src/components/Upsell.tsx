import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../slices/rootReducer"; // Adjust the import path as needed
import {
  addupsellItem,
  removeupsellItem,
  updateupsellItem,
} from "../slices/upsellSlice";

interface Upsell {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

const Upsell: React.FC = () => {
  const dispatch = useDispatch();
  const upsellItems = useSelector((state: RootState) => state.upsell.items);

  const [newItem, setNewItem] = useState<Upsell>({
    id: "",
    name: "",
    quantity: 0,
    price: 0,
  });

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity > 0 && newItem.price > 0) {
      dispatch(addupsellItem({ ...newItem, id: Date.now().toString() }));
      setNewItem({ id: "", name: "", quantity: 0, price: 0 });
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeupsellItem(id));
  };

  const handleUpdateItem = (updatedItem: Upsell) => {
    dispatch(updateupsellItem(updatedItem));
  };

  return (
    <div>
      <h2>Upsell Items</h2>
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
        <button onClick={handleAddItem}>Add Upsell Item</button>
      </div>
      <ul>
        {upsellItems.map((item) => (
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

export default Upsell;
