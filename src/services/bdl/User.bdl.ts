import api from '../technique/api';
import urls from '../../data/constants/urls';
import { UserRequestDTO } from '@/data/dto/user/user-request.dto';

export const UserBDL = () => ({
  getUsers: () =>
    api.get(urls.USERS, ''),
  updateUserById: (id : string, data: UserRequestDTO) =>
    api.put(`${urls.USERS}/${id}`, data),
});
