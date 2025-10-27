import { useEffect, useRef } from "react";
import Button from "../common/Button";
import Textarea from "../common/Textarea";
import Input from "../common/Input";
import styles from "./FoodForm.module.css";
import formPlaceholder from "../../asset/form-placeholder.svg";

function FoodForm({
  food = {
    title: "",
    imgUrl: formPlaceholder,
    content: "",
    calorie: "",
  },
  onSubmit,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const submit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <div>
      <form action={submit} className={styles.formLayout}>
        <div className={styles.contentsLayout}>
          <img src={formPlaceholder} alt="음식 추가 이미지" />
          <Input type="hidden" name="imgUrl" defaultValue={food.imgUrl} />
          <div className={styles.contents}>
            <div>
              <Input
                name="title"
                defaultValue={food.title}
                placeholder="이름을 입력하세요."
                ref={inputRef}
              />
              <Input
                type="number"
                name="calorie"
                defaultValue={food.calorie}
                placeholder="칼로리 (Kcal)"
              />
            </div>
            <Textarea
              name="content"
              defaultValue={food.content}
              placeholder="내용을 작성해 주세요."
            />
          </div>
        </div>
        <div className={styles.buttonLayout}>
          <Button>작성</Button>
        </div>
      </form>
    </div>
  );
}

export default FoodForm;
