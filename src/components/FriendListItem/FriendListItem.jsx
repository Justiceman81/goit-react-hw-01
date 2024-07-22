import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css.friendCard)}>
      <img className={clsx(css.avatar)} src={avatar} alt="Avatar" width="88" />
      <p className={clsx(css.name)}>{name}</p>
      <p
        className={
          isOnline ? clsx(css.status, css.online) : clsx(css.status, css.offline)}        
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
