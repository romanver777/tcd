import type { TService } from "../../types/service";
import styles from "./card.module.css";

type TCardProps = {
  service: TService;
  isAdded: boolean;
  onAdd: (service: TService) => void;
};

export const Card = ({ service, isAdded, onAdd }: TCardProps) => {
  const handleClick = () => {
    if (!isAdded) onAdd(service);
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.name}>{service.name}</h3>
        <div className={styles.footer}>
          <span className={styles.price}>{service.price} ₽</span>
          <button
            className={styles.addButton}
            disabled={isAdded}
            onClick={handleClick}
          >
            {!isAdded ? "Добавить" : "Добавлено"}
          </button>
        </div>
      </div>
    </div>
  );
};
