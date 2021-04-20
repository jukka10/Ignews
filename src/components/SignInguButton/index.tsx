import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signout, useSession } from "next-auth/client";

import styles from "./styles.module.scss";

export function SignInguButton() {
  const [session] = useSession();

  return session ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d360" />
      {session.user.name}
      <FiX
        color="#737380"
        className={styles.closeButton}
        onClick={() => signout()}
      />
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type="button"
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
