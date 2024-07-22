import { useSelector } from 'react-redux';

import { userActions } from '@/services/zustand/actions/user';
import { userStates } from '@/services/zustand/states/user';
import { HOME } from '@/data/constants/strings';

const ReduxScreen = () => {
  const { credentials } = useSelector(({ auth }: any) => auth);
  const { age } = userStates();
  const { incrementAge, handleUpdateAge } = userActions();
  return (
    <div>
     {HOME.WELCOME}
    </div>
  );
};

export default ReduxScreen;
