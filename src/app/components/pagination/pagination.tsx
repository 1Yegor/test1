import React, { FC, KeyboardEvent } from "react";
import DefaultBtn from "../defaultButton/button";
import style from "./pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  setInputValue: (value: string) => void;
  totalPages: number;
  setCurrentPage: (value: number) => void;
  inputValue: string;
  handleScrollToTop: () => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  setInputValue,
  totalPages,
  setCurrentPage,
  inputValue,
  handleScrollToTop,
}) => {
  const inputHandler = (value: string) => {
    if (
      value === "" ||
      (!isNaN(Number(value)) &&
        Number(value) >= 1 &&
        Number(value) <= totalPages)
    ) {
      setInputValue(value);
    }
  };

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const parsedValue = parseInt(inputValue);
      if (
        !isNaN(parsedValue) &&
        parsedValue >= 1 &&
        parsedValue <= totalPages
      ) {
        setCurrentPage(parsedValue);
      }
    }
  };

  return (
    <div className={style.pagination}>
      {" "}
      <DefaultBtn
        onClick={() => {
          setCurrentPage(currentPage - 1);
          setInputValue(String(currentPage - 1));
          handleScrollToTop();
        }}
        disabled={currentPage === 1}
        txt={" Листаем влево"}
        width={"normal"}
        bg={"red"}
        border={"violet"}
      />
      <input
        onChange={(e) => inputHandler(e.target.value)}
        onKeyPress={handleEnterKey}
        value={inputValue}
      />
      <DefaultBtn
        onClick={() => {
          setCurrentPage(currentPage + 1);
          setInputValue(String(currentPage + 1));
          handleScrollToTop();
        }}
        disabled={currentPage === totalPages}
        txt={"Листаем вправо"}
        width={"normal"}
        bg={"red"}
        border={"violet"}
      />
    </div>
  );
};
