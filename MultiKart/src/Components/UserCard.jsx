import React from "react";
import useUserStore from "./useUserStore";
import styles from "./usercard.module.css";

const UserCard = () => {
  const users = useUserStore((state) => state.users);
  {
    console.log(users);
  }

  return (
    <div className={styles.userdivide}>
      {users.map((user) => (
        <div className={styles.userWidget} key={user.id}>
          <img
            src={user.photo}
            alt={`${user.firstName} ${user.lastName}`}
            className={styles.userPhoto}
          />
          <div>
            <h2
              className={styles.userDetailsName}
            >{`${user.firstName} ${user.lastName}`}</h2>
            <p className={styles.userDetailsEmail}>{user.email}</p>
            <p>
              Status:
              {user.status === "Active" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="rgb(10,210,42,1)"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="rgb(255,153,0,1)"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              )}{" "}
              {user.status}{" "}
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgb(100,28,192)"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
