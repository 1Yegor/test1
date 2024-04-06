"use client";
import React, { useEffect, useState } from "react";
import style from "./page.module.scss";
import { Pagination } from "./components/pagination/pagination";
import Content from "./components/content/content";
import DefaultBtn from "./components/defaultButton/button";
import loader from "../../public/next.svg";
const clientID = "Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs";
const API_URL = "https://api.unsplash.com";

export interface ImageItem {
  alt_description: string;
  slug: string;
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
}

export default function Main() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [inputValue, setInputValue] = useState("1");

  const fetchImages = async (page: number) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${API_URL}/search/photos?client_id=${clientID}&query=sun&page=${page}&per_page=30`
      );
      const data = await response.json();
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.main}>
      <Pagination
        currentPage={currentPage}
        setInputValue={setInputValue}
        totalPages={totalPages}
        setCurrentPage={handlePageChange}
        inputValue={inputValue}
        handleScrollToTop={handleScrollToTop}
      />
      {isLoading ? (
        <div className={style.loader}> {"=)"} </div>
      ) : (
        <Content images={images} />
      )}
      <DefaultBtn
        txt={"Наверх"}
        width={"normal"}
        bg={"red"}
        border={"violet"}
        onClick={handleScrollToTop}
      />
    </div>
  );
}
