import React from "react";
import style from "./UserCard.module.css";
import image from "../../assets/photo-cover.svg";

const UserCard = (props) => {
  return (
    <div className={style.userCard}>
      <div className={style.userPhotoContainer}>
        <object
          data={props.item.photo}
          alt="user_avatar"
          type="image/jpg"
          className={style.userPhoto}
        >
          <img src={image} alt={"user_avatar"} />
        </object>
      </div>
      <div className={style.userName}>{props.item.name}</div>
      <div className={style.userPosition}>{props.item.position}</div>
      <div className={style.userEmail}>
        <a
          href={"mailto:" + props.item.email}
          title={props.item.email}
          className={style.userEmailLink}
        >
          {props.item.email}
        </a>
      </div>
      <div className={style.userPhone}>{props.item.phone}</div>
    </div>
  );
};
export default UserCard;
