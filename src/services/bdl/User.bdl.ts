import api from '../technique/api';
import urls from '../../data/constants/urls';

export const UserBDL = () => ({
  getUsers: (token: string) =>
    api.get(urls.USERS, token),
});
