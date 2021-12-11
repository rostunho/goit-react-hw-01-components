// import logo from './logo.svg';
// import './App.css';
import Profile from 'components/Profile/Profile';
import user from './database/user.json';

function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default App;