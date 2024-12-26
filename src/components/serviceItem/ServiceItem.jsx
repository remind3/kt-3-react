import styles from "./styles.module.css";
import { Stars } from "../stars/Stars";

function ServiceItem({ text, prise, id, image, rating, setData }) {
  return (
    <div
      className={styles.card}
      onDoubleClick={() =>
        setData((prev) => {
          return prev.filter((el) => el.id !== id);
        })
      }
    >
      <img
        className={styles.img}
        src={Array.isArray(image) ? image[0] : image}
      />
      <p className={styles.text}>{text}</p>
      <p className={styles.text}> Прайс {prise} </p>
      <Stars stars={rating} />
    </div>
  );
}

export default ServiceItem;
