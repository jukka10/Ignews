import { Session } from "next-auth";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";

import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface ButtonProps {
  priceId: string;
}

interface SessionPostProps extends Session {
  activeSubscription: object;
}

export function SubscriblButton({ priceId }: ButtonProps) {
  const [session] = useSession();
  const router = useRouter();

  async function handleSubscrible() {
    const { activeSubscription } = session as SessionPostProps;

    if (!session) {
      signIn("github");
      return;
    }

    if (activeSubscription) {
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
