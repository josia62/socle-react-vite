import api from '../technique/api';
import urls from '../../data/constants/urls';

export const UserBDL = () => ({
  getUsers: () =>
    api.get(urls.USERS, ''),
});
