import FoodListItem from "./FoodListItem";
import styles from "./FoodList.module.css";
import { useState } from "react";
import moreView from "../../asset/more-view-green.svg";
import Button from "../common/Button";

function FoodList({ items, onUpdate, onDelete }) {
  const [visibleCount, setVisibleCount] = useState(7);
  const showItems = items.slice(0, visibleCount);

  return (
    <div>
      <ul className={styles.listLayout}>
        {showItems.map((it) => (
          <li key={it.id} className={styles.listBox}>
            <FoodListItem item={it} onUpdate={onUpdate} onDelete={onDelete} />
          </li>
        ))}
      </ul>
      {visibleCount < items.length && (
        <div className={styles.showMoreLayout}>
          <Button
            variant="ghostPrimary"
            onClick={() => setVisibleCount(visibleCount + 7)}
            className={styles.button}
          >
            더보기 <img src={moreView} />
          </Button>
        </div>
      )}
    </div>
  );
}

export default FoodList;
