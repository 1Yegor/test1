import styles from "./tag.module.scss";

interface Props {
  backGroundColor: string;
  text: string;
  textColor: string;
}

const Tags: React.FC<Props> = ({ text, backGroundColor, textColor }) => {
  return (
    <span
      style={{ color: textColor, background: backGroundColor }}
      className={styles["tag"]}
    >
      {text}
    </span>
  );
};

export default Tags;
