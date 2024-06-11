import React from "react";
import useUserStore from "./useUserStore";
import styles from "./usercard.module.css";
import style from "./userwidget.module.css";

const UserCard = () => {
  const users = useUserStore((state) => state.users);
  {
    console.log(users);
  }

  return (
    <div className={style.userdivide}>
      {users.map((user) => (
        <div className={styles.userWidget} key={user.id}>
          <img
            src={user.photo}
            alt={`${user.firstName} ${user.lastName}`}
            className={styles.userPhoto}
          />
          <div className={styles.userDetails}>
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            <p>{user.email}</p>
            <p>Status: {user.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
