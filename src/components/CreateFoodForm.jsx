import { useEffect, useRef, useState } from "react";

function CreateFoodForm({ onCreate }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const submit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    onCreate(data);
  };

  return (
    <div>
      <form action={submit}>
        <input name="title" placeholder="이름을 입력하세요." ref={inputRef} />
        <input type="number" name="calorie" placeholder="Kcal" />
        <textarea name="content" placeholder="설명을 입력하세요." />
        <button>작성완료</button>
      </form>
    </div>
  );
}

export default CreateFoodForm;
