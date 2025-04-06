"use client";
import { loginRequest } from "@/api/admin_requests";
import { loginUser } from "@/utils/auth";
import loginValidationSchema from "@/validations/login.validation";
import { useFormik } from "formik";

import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const response = await loginRequest({ ...values, isAdmin: true });
      if (response.auth) {
        loginUser(response.token);
      } else {
        console.log("response : ", response);
        alert(response.message);
      }
    },
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.username}
            name="username"
            type="text"
          />
        </div>
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            type="text"
          />
        </div>
        <div>
          <button type="submit">
            <span>Giriş</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
