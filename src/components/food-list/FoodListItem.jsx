import Modal from "../modal/Modal";
import styles from "./FoodListItem.module.css/";
import FoodForm from "../modal/FoodForm";
import { useState } from "react";
import Button from "../common/Button";

function FoodListItem({ item, onUpdate, onDelete }) {
  const { id, imgUrl, title, content, calorie } = item;
  const dateString = new Date(item.createdAt).toLocaleDateString();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.itemLayout}>
      <img className={styles.image} src={imgUrl} alt={title} />
      <div className={styles.itemContentsLayout}>
        <div>
          <h2>{title}</h2>
          <p>{calorie}KCal</p>
        </div>
        <p>{content}</p>
        <div className={styles.boxBottomLayout}>
          <p>{dateString}</p>
          <div className={styles.buttonLayout}>
            <Button variant="confirm" onClick={() => setIsOpen(true)}>
              수정
            </Button>
            <Modal
              title="칼로리 수정하기"
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <FoodForm
                food={item}
                onSubmit={(data) => {
                  onUpdate(item.id, data);
                  setIsOpen(false);
                }}
              />
            </Modal>
            <Button variant="danger" onClick={() => onDelete(id)}>
              삭제
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodListItem;
