import LoginForm from "@/components/(admin)/login/login_form";
import React from "react";
import styles from "./index.module.css";
import LoginCard from "@/components/(admin)/login/login_card";

type Props = {};

const LoginSection = (props: Props) => {
  return (
    <div className={styles["login-grid"]}>
      <div className={styles["grid-item-left"]}>
        <LoginForm />
      </div>
      <div className={styles["grid-item-right"]}>
        <LoginCard />
      </div>
    </div>
  );
};

export default LoginSection;
