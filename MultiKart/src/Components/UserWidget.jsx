import React from "react";
import UserCard from "./UserCard";
import styles from "./userwidget.module.css";

const UserWidget = () => {
  return (
    <div className={styles.userwidgetContainer}>
      {/* <div className={styles.cardContainer}> */}
      <UserCard />
      {/* </div> */}
    </div>
  );
};

export default UserWidget;
