import React from "react";
import { Card } from "../card/card";
import style from "./content.module.scss";
import { ImageItem } from "@/app/page";

const Content = ({ images }: { images: ImageItem[] }) => {
  return (
    <div className={style.wrapper}>
      {images?.map((el, i) => (
        <Card key={i} el={el} />
      ))}
    </div>
  );
};

export default Content;
