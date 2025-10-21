import { useState } from "react";
import FoodListItem from "./FoodListItem";

function FoodList({ items }) {
  return (
    <div>
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            <FoodListItem item={it} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
