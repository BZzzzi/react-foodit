import { useState } from "react";
import FoodListItem from "./FoodListItem";

function FoodList({ items, onDelete }) {
  return (
    <div>
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            <FoodListItem item={it} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
