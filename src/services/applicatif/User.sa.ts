import {
  useQuery,
} from '@tanstack/react-query'
import {UserBDL} from '../bdl/User.bdl';
import { USER_QUERY_KEY } from '@/data/constants/query-key-name';

export const UserSA = () => {
  const {
    getUsers,
  } = UserBDL();
  const getUsersSA = () => {
    return  useQuery({
      queryKey: [USER_QUERY_KEY.USER],
      queryFn: getUsers,
      staleTime: 10000,
      refetchOnWindowFocus: false,
      refetchInterval: 30000,
    })
  }

  return {
    getUsersSA,
  };
};
