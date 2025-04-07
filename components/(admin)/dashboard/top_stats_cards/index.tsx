import React from "react";
import styles from "./index.module.css";
import StatsCardItem from "../stats_card_item";
import { GoProjectSymlink } from "react-icons/go";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";

const TopStatsCards = () => {
  const array = [
    { title: "Bloq", count: 23, icon: <LuNewspaper /> },
    { title: "Proyekt", count: 19, icon: <GoProjectSymlink /> },
    { title: "Komanda", count: 33, icon: <PiMicrosoftTeamsLogoBold /> },
    { title: "Mesaj", count: 9, icon: <MdOutlineMessage /> },
  ];
  return (
    <div className={styles["cards-wrapper"]}>
      {array.map((item, index) => (
        <StatsCardItem key={index} item={item} />
      ))}
    </div>
  );
};

export default TopStatsCards;
