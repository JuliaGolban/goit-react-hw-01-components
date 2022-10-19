import user from './data/user.json';
import stats from './data/data.json';
import css from 'App.module.css'
import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";

export const App = () => {
  return (
    <div className={css.App }>
      
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers.toLocaleString('ru')}
        views={user.stats.views.toLocaleString('ru')}
        likes={user.stats.likes.toLocaleString('ru')}
      />

      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />

    </div>
  );
};
