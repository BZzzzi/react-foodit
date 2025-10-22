import Modal from "./Modal";
import styles from "./FoodListItem.module.css/";
import EditFoodForm from "./EditFoodForm";
import { useState } from "react";

function FoodListItem({ item, onUpdate, onDelete }) {
  const { id, imgUrl, title, content, calorie } = item;
  const dateString = new Date(item.createdAt).toLocaleDateString();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.item}>
      <img className={styles.image} src={imgUrl} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{dateString}</p>
        <p>{calorie}</p>
        <button onClick={() => setIsOpen(true)}>수정</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <EditFoodForm
            food={item}
            onSubmit={(data) => {
              onUpdate(item.id, data);
              setIsOpen(false);
            }}
          />
        </Modal>
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  );
}

export default FoodListItem;
