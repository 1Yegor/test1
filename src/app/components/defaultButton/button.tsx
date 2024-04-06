import React, { useMemo } from "react";
import styles from "./button.module.scss";
import Link from "next/link";
import ArrLeft from "../../../../public/next.svg";
import TrashIcon from "../../../../public/next.svg";

interface Props {
  txt?: string;
  props?: any;
  onClick?: any;
  addClass?: string;
  icon?: "ArrLeft" | "TrashIcon" | JSX.Element;
  disabled?: boolean;
  href?: string;
  minWidth?: boolean;
  size?: "md" | "lg" | "sm";
  redBtn?: boolean;
  type?: "button" | "submit" | "reset";
  isTargetBlank?: boolean;
  btnId?: string;
  bg?: "white" | "red" | "orange";
  border?: "violet";
  width?:
    | "wide"
    | "extra-wide"
    | "normal"
    | "medium"
    | "micro"
    | "small"
    | "short"
    | "extra-small";
}

const DefaultBtn: React.FC<Props> = ({
  txt,
  onClick,
  addClass,
  icon,
  disabled,
  href,
  minWidth = true,
  size,
  redBtn,
  type = "button",
  isTargetBlank,
  btnId,
  bg,
  border,
  width,
  ...props
}) => {
  const iconEl = useMemo(() => {
    switch (icon) {
      case "ArrLeft":
        return <ArrLeft />;
      case "TrashIcon":
        return <TrashIcon />;
      default:
        return icon;
    }
  }, [icon]);

  const btnClasses = [
    "default-btn",
    styles.btn,
    minWidth ? "" : styles["btn--min-width-auto"],
    size ? styles["btn--" + size] : "",
    bg ? styles["btn--" + bg] : "",
    addClass ? addClass : "",
    redBtn ? styles.btn_red : "",
    disabled ? styles["btn--disabled"] : "",
    border ? styles["btn--" + border] : "",
    width ? styles["btn--" + width] : "",
  ].join(" ");

  return (
    <>
      {href ? (
        <Link
          href={href}
          onClick={onClick}
          className={btnClasses}
          target={isTargetBlank ? "_blank" : undefined}
          {...props}
        >
          {iconEl}
          {txt}
        </Link>
      ) : (
        <button
          onClick={onClick}
          id={btnId}
          className={btnClasses}
          disabled={disabled}
          type={type}
          {...props}
        >
          {iconEl}
          {txt}
        </button>
      )}
    </>
  );
};

export default DefaultBtn;
