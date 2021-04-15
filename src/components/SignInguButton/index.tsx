import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInguButton() {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d360" />
      Jukka
      <FiX color="#737380" className={styles.closeButton} />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
