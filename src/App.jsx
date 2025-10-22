import { useState } from "react";
import FoodList from "./components/FoodList";
import mockItems from "./mock.json";
import Modal from "./components/Modal";
import FoodForm from "./components/FoodForm";
import catImg from "./asset/cat.jpg";

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState(mockItems);
  const [keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const resultItems = items
    .sort((a, b) => b[order] - a[order])
    .filter((it) => it.title.includes(keyword) || it.content.includes(keyword));

  const onCreate = (data) => {
    const now = new Date();
    const newItem = {
      id: items.length + 1,
      imgUrl: catImg,
      ...data,
      createdAt: now.valueOf(),
      updatedAt: now.valueOf(),
    };

    setItems([newItem, ...items]);
    setIsOpen(false);
  };

  const onUpdate = (id, data) => {
    const index = items.findIndex((item) => item.id === id);
    const now = new Date();

    const newItem = {
      ...items[index],
      ...data,
      updatedAt: now.valueOf(),
    };

    const newItems = [
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1),
    ];

    setItems(newItems);
  };

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
        <FoodForm onSubmit={onCreate} />
      </Modal>
      <FoodList items={resultItems} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
