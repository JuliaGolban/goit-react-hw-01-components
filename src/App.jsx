import { Profile } from "components/Profile/Profile";

import user from './components/Profile/user.json';
import css from 'App.module.css'

export const App = () => {
  return (
    <div className={css.App }>
      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers.toLocaleString('ru')}
        views={user.stats.views.toLocaleString('ru')}
        likes={user.stats.likes.toLocaleString('ru')}
      />
      
    </div>
  );
};
