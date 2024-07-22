import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.friendList)}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="88"
          />
          <p className={css.name}>{name}</p>
          <p
            className={clsx(css.status, {
              [css.online]: isOnline,
              [css.offline]: !isOnline,
            })}
          >
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
