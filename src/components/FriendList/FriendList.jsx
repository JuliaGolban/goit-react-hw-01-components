import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendlistItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendlistItem
        key={id} id={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
          
    </ul>);
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }))
}