import { useState } from "react";
import FoodList from "./components/FoodList";
import mockItems from "./mock.json";
import Modal from "./components/Modal";

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState(mockItems);
  const [keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const resultItems = items
    .sort((a, b) => b[order] - a[order])
    .filter((it) => it.title.includes(keyword) || it.content.includes(keyword));

  const onDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <button onClick={() => setOrder("createdAt")}>최신순</button>
      <button onClick={() => setOrder("calorie")}>칼로리순</button>
      <button onClick={() => setIsOpen(true)}>음식 추가하기</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        음식 추가 모달
      </Modal>
      <FoodList items={resultItems} onDelete={onDelete} />
    </div>
  );
}

export default App;
