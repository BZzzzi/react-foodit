import FoodListItem from "./FoodListItem";
import styles from "./FoodList.module.css";
import { useState } from "react";
import moreView from "../../asset/more-view-green.svg";
import Button from "../common/Button";
import useTranslate from "../../hooks/useTranslate";

function FoodList({ items, onUpdate, onDelete, cursor, onLoadMore }) {
  const t = useTranslate();

  return (
    <div>
      <ul className={styles.listLayout}>
        {items.map((it) => (
          <li key={it.id} className={styles.listBox}>
            <FoodListItem item={it} onUpdate={onUpdate} onDelete={onDelete} />
          </li>
        ))}
      </ul>

      {cursor && (
        <div className={styles.showMoreLayout}>
          <Button
            variant="ghostPrimary"
            onClick={() => onLoadMore()}
            className={styles.button}
          >
            {t("load more")} <img src={moreView} />
          </Button>
        </div>
      )}
    </div>
  );
}

export default FoodList;
