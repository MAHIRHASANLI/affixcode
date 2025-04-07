import React from "react";
import styles from "./index.module.css";
import MessagesList from "@/components/(admin)/message/messages_list";
import MessageItem from "@/components/(admin)/message/message_item";
type Props = {};

const MessageSection = (props: Props) => {
  return (
    <div className={styles["message-grid"]}>
      <div>
        <MessagesList />
      </div>
      <div>
        <MessageItem />
      </div>
    </div>
  );
};

export default MessageSection;
