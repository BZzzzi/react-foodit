import { useEffect, useState } from "react";
import FoodList from "./components/food-list/FoodList";
import Modal from "./components/modal/Modal";
import FoodForm from "./components/modal/FoodForm";
import search from "./asset/search-green.svg";
import Layout from "./components/Layout";
import styles from "./App.module.css";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import useTranslate from "./hooks/useTranslate";
import axios from "./utils/axios";

const LIMIT = 10;

function App() {
  const t = useTranslate();
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [cursor, setCursor] = useState();

  const handleLoad = async (orderParam, searchParam) => {
    const res = await axios.get("/foods", {
      params: {
        order: orderParam,
        search: searchParam,
        limit: LIMIT,
      },
    });

    const { foods, paging } = res.data;
    setItems(foods);
    setCursor(paging.nextCursor);
  };

  const handleLoadMore = async () => {
    const res = await axios.get("/foods", {
      params: {
        order,
        search,
        limit: LIMIT,
        cursor,
      },
    });

    const { foods, paging } = res.data;
    setItems((prevItems) => [...prevItems, ...foods]);
    setCursor(paging.nextCursor);
  };

  const onCreate = async (data) => {
    const res = await axios.post("/foods", data);
    const { food } = res.data;
    setItems((prevItems) => [food, ...prevItems]);
    setIsOpen(false);
  };

  const onUpdate = async (id, data) => {
    const res = await axios.patch(`/foods/${id}`, data);
    const { food } = res.data;
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      return [
        ...prevItems.slice(0, index),
        food,
        ...prevItems.slice(index + 1),
      ];
    });
  };

  const onDelete = async (id) => {
    await axios.delete(`/foods/${id}`);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    handleLoad(order, search);
  }, [order, search]);

  return (
    <>
      <Layout>
        <div className={styles.layout}>
          <header className={styles.mainHeader}>
            <div className={styles.searchInputBox}>
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
            items={items}
            onUpdate={onUpdate}
            onDelete={onDelete}
            cursor={cursor}
            onLoadMore={handleLoadMore}
          />
        </div>
      </Layout>
    </>
  );
}

export default App;
