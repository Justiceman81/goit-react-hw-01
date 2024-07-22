import FriendList from "../FriendList/FriendList";

const FriendListItem = ({ item }) => {
  return item.map((friends) => {
    return (
      <FriendList
        key={friends.id}
        name={friends.name}
        avatar={friends.avatar}
        isOnline={friends.isOnline}
      />
    );
  });
};

export default FriendListItem;
