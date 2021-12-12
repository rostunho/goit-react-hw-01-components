// import logo from './logo.svg';
// import './App.css';
import Profile from 'components/Profile/Profile';
import Statistic from 'components/Statistic/Statistic';
import FriendList from 'components/FriendList/FriendList';
import user from './database/user.json';
import data from './database/data.json';
import friends from './database/friends.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
