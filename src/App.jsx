import { useState } from "react";
import FoodList from "./components/FoodList";
import items from "./mock.json";

function App() {
  const [order, setOrder] = useState("createdAt");
  const [keyword, setKeyword] = useState("");

  const resultItems = items
    .sort((a, b) => b[order] - a[order])
    .filter((it) => it.title.includes(keyword) || it.content.includes(keyword));

  return (
    <div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <button onClick={() => setOrder("createdAt")}>최신순</button>
      <button onClick={() => setOrder("calorie")}>칼로리순</button>
      <FoodList items={resultItems} />
    </div>
  );
}

export default App;
