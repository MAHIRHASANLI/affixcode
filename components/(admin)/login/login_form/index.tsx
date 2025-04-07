"use client";
import { loginRequest } from "@/api/admin_requests";
// import { loginUser } from "@/utils/auth";
import loginValidationSchema from "@/validations/login.validation";
import { useFormik } from "formik";

import React from "react";

import styles from "./index.module.css";
import { trimObject } from "@/utils/trim_object";
import { sweetAlertLogIn } from "@/utils/sweet_alert";
import { useRouter } from "next/navigation";
type Props = {};

const LoginForm = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const { token } = await loginRequest(
          trimObject({ ...values, isAdmin: true })
        );

        if (token) {
          // Cookie olaraq yazırıq (burada 1 saatlıq müddət veririk)
          document.cookie = `accessToken=${token}; path=/; max-age=3600`;
          router.replace("/admin/dashboard");
          sweetAlertLogIn("success", "Daxil olundu.");
        } else {
          sweetAlertLogIn("error", "Token alınmadı");
        }

        // loginUser(response.token);
      } catch (error: any) {
        sweetAlertLogIn("error", error.message);
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <div className={styles["login-form-container"]}>
      <div className={styles["login-title"]}>
        <h2>Login</h2>
      </div>
      <form onSubmit={formik.handleSubmit} className={styles["login-form"]}>
        <div className={styles["login-form-input"]}>
          <label>Username</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.username}
            name="username"
            placeholder="username"
            type="text"
          />
          <p>{formik.errors.username}</p>
        </div>
        <div className={styles["login-form-input"]}>
          <label>Password</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            placeholder="password"
            type="password"
          />
          <p>{formik.errors.password}</p>
        </div>
        <div className={styles["login-form-btn"]}>
          <button type="submit">
            {isLoading ? <div className={styles.loader}></div> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
