import type { TService } from "../../types/service";
import styles from "./selected-cards.module.css";

type TSelectedCardsProps = {
  services: TService[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
};

export const SelectedCards = ({
  services,
  onRemove,
  onCheckout,
}: TSelectedCardsProps) => {
  const total = services.reduce((sum, service) => sum + service.price, 0);

  if (services.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Выбранные услуги</h2>
        <p className={styles.emptyMessage}>Услуги не выбраны</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Выбранные услуги</h2>

      <ul className={styles.list}>
        {services.map((service) => (
          <li key={service.id} className={styles.item}>
            <div className={styles.itemContent}>
              <span className={styles.itemName}>{service.name}</span>
              <span className={styles.itemPrice}>{service.price} ₽</span>
            </div>
            <button
              className={styles.removeButton}
              onClick={() => onRemove(service.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <span>Итого:</span>
        <span className={styles.totalPrice}>{total} ₽</span>
      </div>

      <button className={styles.checkoutButton} onClick={onCheckout}>
        Оформить заказ
      </button>
    </div>
  );
};
