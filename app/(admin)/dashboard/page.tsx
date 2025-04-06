"use client";
import { isTokenExpired } from "@/utils/auth";
import React, { useEffect } from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  useEffect(() => {
    isTokenExpired();
  });
  return <div>DashboardPage</div>;
};

export default DashboardPage;
