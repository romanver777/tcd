import { useState, useCallback, useMemo } from "react";
import type { TService } from "../types/service";
import { mockServices } from "../mocks/mockData";
import { Card } from "../components/card/card";
import { SelectedCards } from "../components/selected-cards/selected-cards";
import styles from "./app.module.css";

export const App = () => {
  const [selected, setSelected] = useState<TService[]>([]);

  const selectedIds = useMemo(
    () => new Set(selected.map((s) => s.id)),
    [selected]
  );

  const handleAddService = useCallback((service: TService) => {
    setSelected((prev) => {
      const existingService = prev.find((s) => s.id === service.id);

      if (existingService) {
        return prev;
      }

      return [...prev, { ...service }];
    });
  }, []);

  const handleRemoveService = useCallback((id: string) => {
    setSelected((prev) => prev.filter((service) => service.id !== id));
  }, []);

  const handleCheckout = useCallback(() => {
    alert("Заказ оформлен!");
    setSelected([]);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Дополнительные услуги для авиапассажиров
        </h2>
      </header>

      <main className={styles.main}>
        <section className={styles.services}>
          <ul className={styles.cardsList}>
            {mockServices.map((service) => (
              <Card
                key={service.id}
                service={service}
                isAdded={selectedIds.has(service.id)}
                onAdd={handleAddService}
              />
            ))}
          </ul>
        </section>

        <aside className={styles.sidebar}>
          <SelectedCards
            services={selected}
            onRemove={handleRemoveService}
            onCheckout={handleCheckout}
          />
        </aside>
      </main>
    </>
  );
};
