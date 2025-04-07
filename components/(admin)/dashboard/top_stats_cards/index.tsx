import React from "react";
import styles from "./index.module.css";
import StatsCardItem from "../stats_card_item";
import { FaMicroblog } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
type Props = {};

const TopStatsCards = (props: Props) => {
  const array = [
    { title: "Bloq", count: 23, icon: <FaMicroblog /> },
    { title: "Proyekt", count: 19, icon: <GoProjectSymlink /> },
    { title: "Komanda", count: 33, icon: <PiMicrosoftTeamsLogoBold /> },
    { title: "Blog", count: 23, icon: <FaMicroblog /> },
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
