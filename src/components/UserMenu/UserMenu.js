import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <span className={s.name}>{name}</span>
      <button
        className={s.button}
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
        title="Log out"
        aria-label="Log out"
      >
        Log out
      </button>
    </div>
  );
}
