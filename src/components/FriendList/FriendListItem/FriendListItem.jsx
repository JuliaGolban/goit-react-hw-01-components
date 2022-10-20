import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendlistItem = ({ id, avatar, name, isOnline }) => {
    
    return (< li className={css.item} id={id} key={id} >
            { isOnline === true ? <span className={`${css.status} ${css.online}`}></span> : <span className={`${css.status} ${css.offline}`}></span>}
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>)
}

FriendlistItem.prototype = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}