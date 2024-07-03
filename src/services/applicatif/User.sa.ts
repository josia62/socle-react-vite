import {UserBDL} from '../bdl/User.bdl';

export const UserSA = () => {
  const {
    getUsers,
  } = UserBDL();

  return {
    getUsers,
  };
};
