import { useState } from "react";
import Modal from "./Modal";

function FoodListItem({ item, onDelete }) {
  const { id, imgUrl, title, content, calorie } = item;
  const dateString = new Date(item.createdAt).toLocaleDateString();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{dateString}</p>
        <p>{calorie}</p>
        <button onClick={() => setIsOpen(true)}>수정</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          음식 수정 모달
        </Modal>
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  );
}

export default FoodListItem;
