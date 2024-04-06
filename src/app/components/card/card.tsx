import Image from "next/image";
import style from "./card.module.scss";

import { ImageItem } from "@/app/page";
import Tags from "../tag/tag";

interface CardProps {
  el: ImageItem;
}

export const Card: React.FC<CardProps> = ({ el }) => {
  return (
    <div className={style.card}>
      <span>
        {" "}
        <Tags text="top" backGroundColor="#87CEFA" textColor="black" />{" "}
        {el.slug.split("-")[0]}
      </span>
      <Image
        key={el.id}
        src={el.urls.small}
        alt="bigImage"
        className={style.image}
        width={100}
        height={100}
      />
      <span>{el.alt_description}</span>
    </div>
  );
};
