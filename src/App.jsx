import { useState } from "react";
import FoodList from "./components/food-list/FoodList";
import mockItems from "./mock.json";
import Modal from "./components/modal/Modal";
import FoodForm from "./components/modal/FoodForm";
import search from "./asset/search-green.svg";
import Layout from "./components/Layout";
import styles from "./App.module.css";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import useTranslate from "./hooks/useTranslate";

function App() {
  const t = useTranslate();
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
    <>
      <Layout>
        <div className={styles.layout}>
          <header className={styles.mainHeader}>
            <div className={styles.searchInputBox}>
              <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={t("search keyword placeholder")}
                className={styles.input}
              />
              {/* TODO: 검색 기능 보완 */}
              {/* <img src={search} alt="검색" className={styles.searchIcon} /> */}
            </div>
            <div className={styles.buttonLayout}>
              <Button
                variant={order === "createdAt" ? "ghostPrimary" : "ghostSecond"}
                buttonDeco={true}
                onClick={() => setOrder("createdAt")}
              >
                {t("sort by latest")}
              </Button>
              <Button
                variant={order === "calorie" ? "ghostPrimary" : "ghostSecond"}
                buttonDeco={true}
                onClick={() => setOrder("calorie")}
              >
                {t("sort by calorie")}
              </Button>
              <Button onClick={() => setIsOpen(true)}>
                {t("create button")}
              </Button>
              <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={t("create calorie title")}
              >
                <FoodForm onSubmit={onCreate} />
              </Modal>
            </div>
          </header>
          <FoodList
            items={resultItems}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        </div>
      </Layout>
    </>
  );
}

export default App;
