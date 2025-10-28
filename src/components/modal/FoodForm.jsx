import { useEffect, useRef } from "react";
import Button from "../common/Button";
import Textarea from "../common/Textarea";
import Input from "../common/Input";
import styles from "./FoodForm.module.css";
import useTranslate from "../../hooks/useTranslate";
import FileInput from "../common/FileInput";

function FoodForm({
  food = {
    title: "",
    imgUrl: "",
    content: "",
    calorie: "",
  },
  onSubmit,
}) {
  const t = useTranslate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <form action={onSubmit} className={styles.formLayout}>
        <div className={styles.contentsLayout}>
          <FileInput name="imgFile" initialPreview={food.imgUrl} />
          <div className={styles.contents}>
            <div>
              <Input
                name="title"
                defaultValue={food.title}
                placeholder={t("food title placeholder")}
                ref={inputRef}
              />
              <Input
                type="number"
                name="calorie"
                defaultValue={food.calorie}
                placeholder={t("food calorie placeholder")}
              />
            </div>
            <Textarea
              name="content"
              defaultValue={food.content}
              placeholder={t("food content placeholder")}
            />
          </div>
        </div>
        <div className={styles.buttonLayout}>
          <Button>{t("submit button")}</Button>
        </div>
      </form>
    </div>
  );
}

export default FoodForm;
