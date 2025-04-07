import AdminLayout from "@/layouts/admin_layout";
import AnalyticsSection from "@/sections/(admin)/dashboard/analytics";
import TopStatsCardsSection from "@/sections/(admin)/dashboard/stats_card_item";
import React from "react";

type Props = {};

const AdminContainer = (props: Props) => {
  return (
    <AdminLayout>
      <TopStatsCardsSection />
      <AnalyticsSection />
    </AdminLayout>
  );
};

export default AdminContainer;
