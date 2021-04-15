import styles from "./styles.module.scss";

interface ButtonProps {
  priceId: string;
}

export function SubscriblButton({ priceId }) {
  return (
    <button type="button" className={styles.subscribleButton}>
      Subscrible now
    </button>
  );
}
