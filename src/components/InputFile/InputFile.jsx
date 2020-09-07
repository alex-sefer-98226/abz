import React, { useRef, useState } from "react";
import classNames from "classnames";
import style from "./InputFile.module.css";

const InputFile = React.forwardRef(
  ({ className, inputStyles, buttonStyles, error, uploadFile }, ref) => {
    const [state, setState] = useState(null);
    const fileRef = useRef(null);
    const inputRef = useRef(null);
    const onClickHandler = (e) => {
      e.preventDefault();
      fileRef.current.click();
    };

    const fileChange = (e) => {
      if (fileRef.current.files[0].size / 1024 / 1024 > 5) {
        //We have limit on file upload: file should be less than 5MB
        setState(null);
      } else {
        setState(fileRef.current.files[0].name);
        uploadFile(fileRef.current.files[0]);
      }
      console.log(fileRef.current.files[0]);
    };

    const onFocus = (e) => {
      e.target.classList.add(style.onFocusButton);
      inputRef.current.classList.add(style.onFocus);
    };
    const onBlur = (e) => {
      e.target.classList.remove(style.onFocusButton);
      inputRef.current.classList.remove(style.onFocus);
    };
    return (
      <div
        className={classNames(
          style.wrapper,
          className,
          error ? style.error : ""
        )}
      >
        <input
          type="file"
          ref={fileRef}
          accept={"image/jpg,image/jpeg"}
          className={style.inputFile}
          onChange={fileChange}
        />
        {/* display none*/}
        <input
          type="text"
          className={classNames(
            style.description,
            inputStyles,
            error ? style.error : ""
          )}
          ref={inputRef}
          placeholder={state == null ? "Upload Your Photo" : state}
          disabled={true}
        />
        <button
          className={classNames(
            style.browseButton,
            buttonStyles,
            error ? style.error : ""
          )}
          onClick={onClickHandler}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          Browse
        </button>
      </div>
    );
  }
);
export default InputFile;
