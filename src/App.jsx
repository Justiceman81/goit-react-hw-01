import Section from "./components/Section/Section.jsx";
import Profile from "./components/Profile/Profile.jsx";
import userData from "./components/data/userData.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./components/data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./components/data/transactions.json";

const App = () => {
  return (
    <div>
      <Section>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};

export default App;
