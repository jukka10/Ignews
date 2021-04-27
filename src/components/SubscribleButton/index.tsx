import { signIn, useSession } from "next-auth/client";
import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface ButtonProps {
  priceId: string;
}

export function SubscriblButton({ priceId }) {
  const [session] = useSession();

  async function handleSubscrible() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const { data } = await api.post("subscrible");
      const { sessionId } = data;

      const stripe = await getStripeJS();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribleButton}
      onClick={handleSubscrible}
    >
      Subscrible now
    </button>
  );
}
