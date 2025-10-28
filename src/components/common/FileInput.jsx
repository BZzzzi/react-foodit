import { useEffect, useRef, useState } from "react";
import placeholderImg from "../../asset/form-placeholder.svg";
import styles from "./FileInput.module.css";
import imgCloseIcon from "../../asset/img-close-icon.svg";
import Button from "./Button.jsx";

function FileInput({ name, initialPreview }) {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextFile = e.target.files[0];
    setFile(nextFile);
  };

  const handleClear = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  useEffect(() => {
    if (!file) {
      setPreview(initialPreview);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    <>
      <input
        type="file"
        name={name}
        onChange={handleChange}
        ref={inputRef}
        hidden
      />
      <div className={styles.imageContain}>
        <img
          src={preview || placeholderImg}
          onClick={handleClick}
          className={styles.image}
        />
        {file && (
          <Button
            variant="ghostPrimary"
            type="button"
            onClick={handleClear}
            className={styles.button}
          >
            <img src={imgCloseIcon} alt="닫기" />
          </Button>
        )}
      </div>
    </>
  );
}

export default FileInput;
