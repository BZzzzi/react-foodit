import { useEffect, useRef } from "react";

function FoodForm({
  food = {
    title: "",
    content: "",
    calorie: 0,
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
      <form action={submit}>
        <input
          name="title"
          defaultValue={food.title}
          placeholder="이름을 입력하세요."
          ref={inputRef}
        />
        <input
          type="number"
          name="calorie"
          defaultValue={food.calorie}
          placeholder="Kcal"
        />
        <textarea
          name="content"
          defaultValue={food.content}
          placeholder="설명을 입력하세요."
        />
        <button>작성완료</button>
      </form>
    </div>
  );
}

export default FoodForm;
