import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";

import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface ButtonProps {
  priceId: string;
}

export function SubscriblButton({ priceId }: ButtonProps) {
  const [session] = useSession();
  const router = useRouter();

  async function handleSubscrible() {
    if (!session) {
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
      router.push("/posts");
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
