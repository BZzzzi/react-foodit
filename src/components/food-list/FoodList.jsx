import FoodListItem from "./FoodListItem";

function FoodList({ items, onUpdate, onDelete }) {
  return (
    <div>
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            <FoodListItem item={it} onUpdate={onUpdate} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
